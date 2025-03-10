// import React, { useEffect } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import Container from "../components/Container";
// import { useDispatch, useSelector } from "react-redux";
// import { addToWishlist } from "../features/products/productSlilce";
// import { getuserProductWishlist } from "../features/user/userSlice";
// const Wishlist = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     getWishlistFromDb();
//   }, []);
//   const getWishlistFromDb = () => {
//     dispatch(getuserProductWishlist());
//   };

//   const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
//   const removeFromWishlist = (id) => {
//     dispatch(addToWishlist(id));
//     setTimeout(() => {
//       dispatch(getuserProductWishlist());
//     }, 300);
//   };
//   return (
//     <>
//       <Meta title={"Wishlist"} />
//       <BreadCrumb title="Wishlist" />
//       <Container class1="wishlist-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           {wishlistState && wishlistState.length === 0 && (
//             <div className="text-center fs-3">No Data</div>
//           )}
//           {wishlistState &&
//             wishlistState?.map((item, index) => {
//               return (
//                 <div className="col-3" key={index}>
//                   <div className="wishlist-card position-relative">
//                     <img
//                       onClick={() => {
//                         removeFromWishlist(item?._id);
//                       }}
//                       src="images/cross.svg"
//                       alt="cross"
//                       className="position-absolute cross img-fluid"
//                     />
//                     <div className="wishlist-card-image">
//                       <img
//                         src={
//                           item?.images[0].url
//                             ? item?.images[0].url
//                             : "images/watch.jpg"
//                         }
//                         className="img-fluid w-100"
//                         alt="watch"
//                       />
//                     </div>
//                     <div className="py-3 px-3">
//                       <h5 className="title">{item?.title}</h5>
//                       <h6 className="price">Rs. {item?.price}</h6>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Wishlist;


import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlilce";
import { getuserProductWishlist } from "../features/user/userSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getuserProductWishlist());
  };

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getuserProductWishlist());
    }, 300);
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container className="py-5">
        <div className="text-center text-xl font-semibold mb-4">Your Wishlist</div>
        {wishlistState && wishlistState.length === 0 ? (
          <div className="text-center text-lg text-gray-500">No items in your wishlist</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-3">
            {wishlistState?.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg relative flex flex-col items-center">
                <img
                  onClick={() => removeFromWishlist(item?._id)}
                  src="/images/cross.svg"
                  alt="Remove"
                  className="absolute top-2 right-2 w-6 cursor-pointer"
                />
                <div className="flex justify-center items-center overflow-hidden">
                  <img
                    src={item?.images[0]?.url ? item?.images[0]?.url : "/images/watch.jpg"}
                    className="h-auto max-w-full object-cover rounded-md"
                    alt={item?.title}
                  />
                </div>
                <div className="mt-4 text-center w-full">
                  <h5 className="text-lg font-semibold text-gray-800 break-words">{item?.title}</h5>
                  <h6 className="text-md text-gray-600 mt-1">Rs. {item?.price}</h6>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Wishlist;
