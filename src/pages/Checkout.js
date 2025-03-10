import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { base_url, config } from "../utils/axiosConfig";
import {
  createAnOrder,
  deleteUserCart,
  getUserCart,
  resetState,
} from "../features/user/userSlice";

let shippingSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address Details are Required"),
  state: yup.string().required("S tate is Required"),
  city: yup.string().required("city is Required"),
  country: yup.string().required("country is Required"),
  pincode: yup.number("Pincode No is Required").required().positive().integer(),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
        }`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    dispatch(getUserCart(config2));
  }, []);

  useEffect(() => {
    if (
      authState?.orderedProduct?.order !== null &&
      authState?.orderedProduct?.success === true
    ) {
      navigate("/my-orders");
    }
  }, [authState]);

  const [cartProductState, setCartProductState] = useState([]);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      localStorage.setItem("address", JSON.stringify(values));
      setTimeout(() => {
        checkOutHandler();
      }, 300);
    },
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index].productId._id,
        quantity: cartState[index].quantity,
        color: cartState[index].color._id,
        price: cartState[index].price,
      });
    }
    setCartProductState(items);
  }, []);

  const checkOutHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK faild to Load");
      return;
    }
    const result = await axios.post(
      `${base_url}api/user/order/checkout`,
      { amount: totalAmount + 100 },
      config
    );

    if (!result) {
      alert("Something Went Wrong");
      return;
    }

    if (!result.data.order) {
      alert("Order creation failed");
      return;
    }
    if (!result.data.order) {
      alert("Order creation failed");
      return;
    }
    const { amount, id: order_id, currency } = result.data.order;

    const options = {
      key: "rzp_test_HSSeDI22muUrLR", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Cart's corner",
      description: "Test Transaction",

      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          `${base_url}api/user/order/paymentVerification`,
          data,
          config
        );

        dispatch(
          createAnOrder({
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalAmount,
            orderItems: cartProductState,
            paymentInfo: result.data,
            shippingInfo: JSON.parse(localStorage.getItem("address")),
          })
        );
        dispatch(deleteUserCart(config2));
        localStorage.removeItem("address");
        dispatch(resetState());
      },
      prefill: {
        name: "Dev Corner",
        email: "devcorner@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "developer's cornor office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <>
      <div className="container mx-auto py-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Checkout</h3>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <input type="text" placeholder="First Name" className="w-full p-2 border rounded" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.firstname && formik.errors.firstname && <p className="text-red-500 text-sm">{formik.errors.firstname}</p>}

              <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" name="lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.lastname && formik.errors.lastname && <p className="text-red-500 text-sm">{formik.errors.lastname}</p>}

              <input type="text" placeholder="Address" className="w-full p-2 border rounded" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.address && formik.errors.address && <p className="text-red-500 text-sm">{formik.errors.address}</p>}

              <input type="text" placeholder="City" className="w-full p-2 border rounded" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.city && formik.errors.city && <p className="text-red-500 text-sm">{formik.errors.city}</p>}

              <input type="text" placeholder="State" className="w-full p-2 border rounded" name="state" value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.state && formik.errors.state && <p className="text-red-500 text-sm">{formik.errors.state}</p>}

              <input type="text" placeholder="Country" className="w-full p-2 border rounded" name="country" value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.country && formik.errors.country && <p className="text-red-500 text-sm">{formik.errors.country}</p>}

              <input type="text" placeholder="Pincode" className="w-full p-2 border rounded" name="pincode" value={formik.values.pincode} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.pincode && formik.errors.pincode && <p className="text-red-500 text-sm">{formik.errors.pincode}</p>}

              <div className="flex justify-between items-center">
                <Link to="/cart" className="text-blue-500 flex items-center">
                  <BiArrowBack className="mr-2" /> Return to Cart
                </Link>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Place Order</button>
              </div>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {cartState?.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-4 border-b pb-2">
                <div className="flex items-center">
                  <img src={item?.productId?.images[0]?.url} className="w-16 h-16 object-cover rounded-md mr-4" alt={item?.productId?.title} />
                  <div>
                    <p className="font-medium">{item?.productId?.title}</p>
                    <p className="text-gray-600">{item?.color?.title}</p>
                  </div>
                </div>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            ))}
            <div className="flex justify-between items-center text-lg font-semibold">
              <p>Total</p>
              <p>₹{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
