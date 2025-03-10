// import React, { useEffect, useState } from "react";
// import ReactStars from "react-rating-stars-component";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import ProductCard from "../components/ProductCard";
// import ReactImageZoom from "react-image-zoom";
// import Color from "../components/Color";
// import { TbGitCompare } from "react-icons/tb";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import watch from "../images/watch.jpg";
// import Container from "../components/Container";
// import { addToWishlist } from "../features/products/productSlilce";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addRating,
//   getAProduct,
//   getAllProducts,
// } from "../features/products/productSlilce";
// import { toast } from "react-toastify";
// import { addProdToCart, getUserCart } from "../features/user/userSlice";

// const SingleProduct = () => {
//   const [color, setColor] = useState(null);

//   const [quantity, setQuantity] = useState(1);
//   const [alreadyAdded, setAlreadyAdded] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const getProductId = location.pathname.split("/")[2];
//   const dispatch = useDispatch();
//   const productState = useSelector((state) => state?.product?.singleproduct);
//   const productsState = useSelector((state) => state?.product?.product);
//   const cartState = useSelector((state) => state?.auth?.cartProducts);
//   const rat = productState?.totalrating;
//   const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
//   console.log(wishlistState);

//   useEffect(() => {
//     dispatch(getAProduct(getProductId));
//     dispatch(getUserCart());
//     dispatch(getAllProducts());
//   }, []);

//   useEffect(() => {
//     for (let index = 0; index < cartState?.length; index++) {
//       if (getProductId === cartState[index]?.productId?._id) {
//         setAlreadyAdded(true);
//       }
//     }
//   });

//   const uploadCart = () => {
//     if (color === null) {
//       toast.error("Please choose Color");
//     } else {
//       dispatch(
//         addProdToCart({
//           productId: productState?._id,
//           quantity,
//           color,
//           price: productState?.price,
//         }),
//         navigate("/cart")
//       );
//     }
//   };
//   const props = {
//     width: 594,
//     height: 600,
//     zoomWidth: 600,

//     img: productState?.images?.length > 0 && productState.images[0]?.url
//       ? productState.images[0].url
//       : "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",

//   };

//   const [orderedProduct, setorderedProduct] = useState(true);
//   const copyToClipboard = (text) => {
//     console.log("text", text);
//     var textField = document.createElement("textarea");
//     textField.innerText = text;
//     document.body.appendChild(textField);
//     textField.select();
//     document.execCommand("copy");
//     textField.remove();
//   };

//   const closeModal = () => { };
//   const [popularProduct, setPopularProduct] = useState([]);

//   useEffect(() => {
//     let data = [];
//     for (let index = 0; index < productsState.length; index++) {
//       const element = productsState[index];
//       if (element.tags === "popular") {
//         data.push(element);
//       } else {
//         setPopularProduct(data);
//       }
//     }
//   }, [productState]);

//   const [star, setStar] = useState(null);
//   const [comment, setComment] = useState(null);
//   const [like, setLike] = useState(false);
//   const [isFilled, setIsFilled] = useState(false);

//   const handleToggle = () => {
//     setIsFilled(!isFilled);
//   };

//   const addRatingToProduct = () => {
//     if (star === null) {
//       toast.error("Please add star rating");
//       return false;
//     } else if (comment === null) {
//       toast.error("Please Write Review About the Product");
//       return false;
//     } else {
//       dispatch(
//         addRating({ star: star, comment: comment, prodId: getProductId })
//       );
//       setTimeout(() => {
//         dispatch(getAProduct(getProductId));
//       }, 100);
//     }
//     return false;
//   };

//   return (
//     <>
//       <Meta title={"Product Name"} />
//       <BreadCrumb title={productState?.title} />
//       <Container class1="main-product-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-6">
//             <div className="main-product-image">
//               <div>
//                 <ReactImageZoom {...props} />
//               </div>
//             </div>
//             <div className="other-product-images d-flex flex-wrap gap-15">
//               {productState?.images.map((item, index) => {
//                 return (
//                   <div>
//                     <img src={item?.url} className="img-fluid" alt="" />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="main-product-details">
//               <div className="border-bottom">
//                 <h3 className="title">{productState?.title}</h3>
//               </div>
//               <div className="border-bottom py-3">
//                 <p className="price"> Rs. {productState?.price}/-</p>
//                 <div className="d-flex align-items-center gap-10">
//                   <ReactStars
//                     count={5}
//                     size={24}
//                     value={productState?.totalrating.toString()}
//                     edit={false}
//                     activeColor="#ffd700"
//                   />
//                   <p className="mb-0 t-review">
//                     ( {productState?.ratings?.length} Reviews )
//                   </p>
//                 </div>
//                 <a className="review-btn" href="#review">
//                   Write a Review
//                 </a>
//               </div>
//               <div className=" py-3">
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Type :</h3>
//                   <p className="product-data">{productState?.category}</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Brand :</h3>
//                   <p className="product-data">{productState?.brand}</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Category :</h3>
//                   <p className="product-data">{productState?.category}</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Tags :</h3>
//                   <p className="product-data">{productState?.tags}</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Availablity :</h3>
//                   <p className="product-data">In Stock</p>
//                 </div>
//                 {/* <div className="d-flex gap-10 flex-column mt-2 mb-3">
//                   <h3 className="product-heading">Size :</h3>
//                   <div className="d-flex flex-wrap gap-15">
//                     <span className="badge border border-1 bg-white text-dark border-secondary">
//                       S
//                     </span>
//                     <span className="badge border border-1 bg-white text-dark border-secondary">
//                       M
//                     </span>
//                     <span className="badge border border-1 bg-white text-dark border-secondary">
//                       XL
//                     </span>
//                     <span className="badge border border-1 bg-white text-dark border-secondary">
//                       XXL
//                     </span>
//                   </div>
//                 </div> */}
//                 {alreadyAdded === false && (
//                   <div className="d-flex gap-10 flex-column mt-2 mb-3">
//                     <h3 className="product-heading">Color :</h3>
//                     <Color
//                       setColor={setColor}
//                       colorData={productState?.color}
//                     />
//                   </div>
//                 )}

//                 <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
//                   <h3 className="product-heading">Quantity :</h3>
//                   {alreadyAdded === false && (
//                     <div className="">
//                       <input
//                         type="number"
//                         name=""
//                         min={1}
//                         max={10}
//                         className="form-control"
//                         style={{ width: "70px" }}
//                         id=""
//                         onChange={(e) => setQuantity(e.target.value)}
//                         value={quantity}
//                       />
//                     </div>
//                   )}
//                   <div
//                     className={
//                       alreadyAdded
//                         ? "ms-0"
//                         : "ms-5" + "d-flex align-items-center gap-30"
//                     }
//                   >
//                     <button
//                       className="button border-0"
//                       // data-bs-toggle="modal"
//                       // data-bs-target="#staticBackdrop"
//                       type="button"
//                       onClick={() => {
//                         alreadyAdded ? navigate("/cart") : uploadCart();
//                       }}
//                     >
//                       {alreadyAdded ? "Go to Cart" : "Add to Cart "}
//                     </button>
//                     {/* <button className="button signup">Buy It Now</button> */}
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center gap-15">
//                   {/* <div>
//                     <a href="">
//                       <TbGitCompare className="fs-5 me-2" /> Add to Compare
//                     </a>
//                   </div> */}
//                   <div>
//                     {isFilled ? (
//                       <AiFillHeart
//                         className="fs-5 me-2"
//                         onClick={handleToggle}
//                       />
//                     ) : (
//                       <AiOutlineHeart
//                         className="fs-5 me-2"
//                         onClick={handleToggle}
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <div className="d-flex gap-10 flex-column  my-3">
//                   <h3 className="product-heading">Shipping & Returns :</h3>
//                   <p className="product-data">
//                     Free shipping and returns available on all orders! <br /> We
//                     ship all India domestic orders within
//                     <b> 5-10 business days!</b>
//                   </p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-3">
//                   <h3 className="product-heading">Product Link:</h3>
//                   <a
//                     href="javascript:void(0);"
//                     onClick={() => {
//                       copyToClipboard(window.location.href);
//                     }}
//                   >
//                     Copy Product Link
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Container class1="description-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <h4>Description</h4>
//             <div className="bg-white p-3">
//               <p
//                 dangerouslySetInnerHTML={{ __html: productState?.description }}
//               ></p>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Container class1="reviews-wrapper home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <h3 id="review">Reviews</h3>
//             <div className="review-inner-wrapper">
//               <div className="review-head d-flex justify-content-between align-items-end">
//                 <div>
//                   <h4 className="mb-2">Customer Reviews</h4>
//                   <div className="d-flex align-items-center gap-10">
//                     <ReactStars
//                       count={5}
//                       size={24}
//                       value={productState?.totalrating?.toString()}
//                       edit={false}
//                       activeColor="#ffd700"
//                     />
//                     <p className="mb-0">
//                       Based on {productState?.ratings?.length} Reviews
//                     </p>
//                   </div>
//                 </div>
//                 {orderedProduct && (
//                   <div>
//                     <a className="text-dark text-decoration-underline" href="">
//                       Write a Review
//                     </a>
//                   </div>
//                 )}
//               </div>
//               <div className="review-form py-4">
//                 <h4>Write a Review</h4>

//                 <div>
//                   <ReactStars
//                     count={5}
//                     size={24}
//                     value={0}
//                     edit={true}
//                     activeColor="#ffd700"
//                     onChange={(e) => {
//                       setStar(e);
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <textarea
//                     name=""
//                     id=""
//                     className="w-100 form-control"
//                     cols="30"
//                     rows="4"
//                     placeholder="Comments"
//                     onChange={(e) => {
//                       setComment(e.target.value);
//                     }}
//                   ></textarea>
//                 </div>
//                 <div className="d-flex justify-content-end mt-3">
//                   <button
//                     onClick={addRatingToProduct}
//                     className="button border-0"
//                     type="button"
//                   >
//                     Submit Review
//                   </button>
//                 </div>
//               </div>
//               <div className="reviews mt-4">
//                 {productState &&
//                   productState.ratings?.map((item, index) => {
//                     return (
//                       <div className="review">
//                         <div className="d-flex gap-10 align-items-center">
//                           <h6 className="mb-0">user</h6>
//                           <ReactStars
//                             count={5}
//                             size={24}
//                             value={item?.star}
//                             edit={false}
//                             activeColor="#ffd700"
//                           />
//                         </div>
//                         <p className="mt-3">{item?.comment}</p>
//                       </div>
//                     );
//                   })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Container class1="popular-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <h3 className="section-heading">Our Popular Products</h3>
//           </div>
//         </div>
//         <div className="row">
//           <ProductCard data={popularProduct} />
//         </div>
//       </Container>
//     </>
//   );
// };

// export default SingleProduct;


import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { addToWishlist } from "../features/products/productSlilce";
import { useDispatch, useSelector } from "react-redux";
import {
  addRating,
  getAProduct,
  getAllProducts,
} from "../features/products/productSlilce";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, [cartState, getProductId]);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please choose Color");
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img:
      productState?.images?.length > 0 && productState.images[0]?.url
        ? productState.images[0].url
        : "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState.length; index++) {
      const element = productsState[index];
      if (element.tags === "popular") {
        data.push(element);
      }
    }
    setPopularProduct(data);
  }, [productsState]);

  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const [isFilled, setIsFilled] = useState(false);

  const handleToggle = () => {
    setIsFilled(!isFilled);
  };

  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating");
    } else if (comment === null) {
      toast.error("Please write a review about the product");
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductId })
      );
      setTimeout(() => {
        dispatch(getAProduct(getProductId));
      }, 100);
    }
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={productState?.title} />
      <Container class1="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <ReactImageZoom {...props} />
            </div>
            <div className="flex flex-wrap gap-4">
              {productState?.images.map((item, index) => (
                <div key={index}>
                  <img src={item?.url} className="w-24 h-24 object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="border-b pb-4">
              <h3 className="text-2xl font-bold">{productState?.title}</h3>
            </div>
            <div className="border-b py-4">
              <p className="text-xl font-semibold">Rs. {productState?.price}/-</p>
              <div className="flex items-center gap-2">
                <ReactStars
                  count={5}
                  size={24}
                  value={productState?.totalrating?.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="text-sm">({productState?.ratings?.length} Reviews)</p>
              </div>
              <a href="#review" className="text-blue-500 underline">
                Write a Review
              </a>
            </div>
            <div className="py-4">
              <div className="flex items-center gap-2 my-2">
                <h3 className="font-semibold">Type:</h3>
                <p>{productState?.category}</p>
              </div>
              <div className="flex items-center gap-2 my-2">
                <h3 className="font-semibold">Brand:</h3>
                <p>{productState?.brand}</p>
              </div>
              <div className="flex items-center gap-2 my-2">
                <h3 className="font-semibold">Category:</h3>
                <p>{productState?.category}</p>
              </div>
              <div className="flex items-center gap-2 my-2">
                <h3 className="font-semibold">Tags:</h3>
                <p>{productState?.tags}</p>
              </div>
              <div className="flex items-center gap-2 my-2">
                <h3 className="font-semibold">Availability:</h3>
                <p>In Stock</p>
              </div>
              {alreadyAdded === false && (
                <div className="my-4">
                  <h3 className="font-semibold">Color:</h3>
                  <Color setColor={setColor} colorData={productState?.color} />
                </div>
              )}
              <div className="flex items-center gap-4 my-4">
                <h3 className="font-semibold">Quantity:</h3>
                {alreadyAdded === false && (
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="w-20 p-2 border rounded"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                )}
                <button
                  className={`px-6 py-2 ${
                    alreadyAdded ? "bg-green-500" : "bg-blue-500"
                  } text-white rounded`}
                  onClick={() => (alreadyAdded ? navigate("/cart") : uploadCart())}
                >
                  {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                </button>
              </div>
              <div className="flex items-center gap-4">
                {isFilled ? (
                  <AiFillHeart
                    className="text-red-500 cursor-pointer"
                    onClick={handleToggle}
                  />
                ) : (
                  <AiOutlineHeart
                    className="cursor-pointer"
                    onClick={handleToggle}
                  />
                )}
              </div>
              <div className="my-4">
                <h3 className="font-semibold">Shipping & Returns:</h3>
                <p>
                  Free shipping and returns available on all orders! <br />
                  We ship all India domestic orders within{" "}
                  <b>5-10 business days!</b>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Product Link:</h3>
                <a
                  href="#"
                  onClick={() => copyToClipboard(window.location.href)}
                  className="text-blue-500 underline"
                >
                  Copy Product Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="py-5">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-xl font-bold mb-4">Description</h4>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: productState?.description }}
          />
        </div>
      </Container>
      <Container class1="py-5">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 id="review" className="text-2xl font-bold mb-4">
            Reviews
          </h3>
          <div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <h4 className="text-xl font-semibold">Customer Reviews</h4>
                <div className="flex items-center gap-2">
                  <ReactStars
                    count={5}
                    size={24}
                    value={productState?.totalrating?.toString()}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p>({productState?.ratings?.length} Reviews)</p>
                </div>
              </div>
              {orderedProduct && (
                <a href="#review" className="text-blue-500 underline">
                  Write a Review
                </a>
              )}
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Write a Review</h4>
              <ReactStars
                count={5}
                size={24}
                value={0}
                edit={true}
                activeColor="#ffd700"
                onChange={(e) => setStar(e)}
              />
              <textarea
                className="w-full p-2 border rounded mt-2"
                rows="4"
                placeholder="Comments"
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={addRatingToProduct}
              >
                Submit Review
              </button>
            </div>
            <div>
              {productState?.ratings?.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2">
                    <h6 className="font-semibold">User</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={item?.star}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-2">{item?.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="py-5">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Popular Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ProductCard data={popularProduct} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;