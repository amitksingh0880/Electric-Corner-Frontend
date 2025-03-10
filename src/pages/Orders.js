// import React, { useEffect } from "react";
// import Container from "../components/Container";
// import BreadCrumb from "../components/BreadCrumb";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrders } from "../features/user/userSlice";

// const Orders = () => {
//   const dispatch = useDispatch();
//   const orderState = useSelector(
//     (state) => state?.auth?.getorderedProduct?.orders
//   );

//   const getTokenFromLocalStorage = localStorage.getItem("customer")
//     ? JSON.parse(localStorage.getItem("customer"))
//     : null;

//   const config2 = {
//     headers: {
//       Authorization: `Bearer ${
//         getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//       }`,
//       Accept: "application/json",
//     },
//   };

//   useEffect(() => {
//     dispatch(getOrders(config2));
//   }, []);
//   return (
//     <>
//       <BreadCrumb title="My Orders" />
//       <Container class1="cart-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-12">
//             <div className="row">
//               <div className="col-3">
//                 <h5>Order Id</h5>
//               </div>
//               <div className="col-3">
//                 <h5>Total Amount</h5>
//               </div>
//               <div className="col-3">
//                 <h5>Total Amount after Discount</h5>
//               </div>
//               <div className="col-3">
//                 <h5>Status</h5>
//               </div>
//             </div>

//             <div className="col-12  mt-3">
//               {orderState &&
//                 orderState?.map((item, index) => {
//                   return (
//                     <div
//                       style={{ backgroundColor: "#febd69" }}
//                       className="row pt-3 my-3"
//                       key={index}
//                     >
//                       <div className="col-3">
//                         <p>{item?._id}</p>
//                       </div>
//                       <div className="col-3">
//                         <p>{item?.totalPrice}</p>
//                       </div>
//                       <div className="col-3">
//                         <p>{item?.totalPriceAfterDiscount}</p>
//                       </div>
//                       <div className="col-3">
//                         <p>{item?.orderStatus}</p>
//                       </div>
//                       <div className="col-12">
//                         <div
//                           className="row py-3"
//                           style={{ backgroundColor: "#232f3e" }}
//                         >
//                           <div className="col-3">
//                             <h6 className="text-white">ProductName</h6>
//                           </div>
//                           <div className="col-3">
//                             <h6 className="text-white">Quantity</h6>
//                           </div>
//                           <div className="col-3">
//                             <h6 className="text-white">Price</h6>
//                           </div>
//                           <div className="col-3">
//                             <h6 className="text-white">Color</h6>
//                           </div>
//                           {item?.orderItems?.map((i, index) => {
//                             return (
//                               <div className="col-12">
//                                 <div className="row py-3">
//                                   <div className="col-3">
//                                     <p className="text-white">
//                                       {i?.product?.title}
//                                     </p>
//                                   </div>
//                                   <div className="col-3">
//                                     <p className="text-white">{i?.quantity}</p>
//                                   </div>
//                                   <div className="col-3">
//                                     <p className="text-white">{i?.price}</p>
//                                   </div>
//                                   <div className="col-3">
//                                     <ul className="colors ps-0">
//                                       <li
//                                         style={{
//                                           backgroundColor: i?.color.title,
//                                         }}
//                                       ></li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//         </div>
//       </Container>
//       .
//     </>
//   );
// };

// export default Orders;

import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getorderedProduct?.orders
  );

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    // Fetch orders when the component mounts
    dispatch(getOrders(config2));

    // Set up interval to fetch orders every 5 seconds
    const interval = setInterval(() => {
      dispatch(getOrders(config2));
    }, 5000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <BreadCrumb title="My Orders" />
      <Container className="py-5 px-4">
        <div className="bg-white shadow-lg p-6 rounded-lg mb-3">
          <div className="grid grid-cols-4 gap-4 border-b pb-2 font-semibold">
            <div>Order Id</div>
            <div>Total Amount</div>
            <div>Total After Discount</div>
            <div>Status</div>
          </div>

          {orderState?.map((item, index) => (
            <div key={index} className="mt-3 rounded-lg">
              <div className="bg-gray-900 text-white p-4 mt-2 rounded-lg">
                <div className="grid grid-cols-5 gap-2 font-semibold">
                  <div>Product Name</div>
                  <div>Quantity</div>
                  <div>Price</div>
                  <div>Color</div>
                  <div>Status</div>
                </div>

                {item?.orderItems?.map((i, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-2 py-2 border-t mt-2">
                    <p>{i?.product?.title}</p>
                    <p>{i?.quantity}</p>
                    <p>{i?.price}</p>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: i?.color?.title }}></div>
                    <p>{item?.orderStatus}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Orders;
