// import React from "react";
// import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
// const SpecialProduct = (props) => {
//   const { title, brand, totalrating, price, sold, quantity, id, img } = props;

//   console.log(id);
//   return (
//     <>
//       <div className="col-4 mb-3">
//         <div className="special-product-card">
//           <div className="d-flex justify-content-between">
//             <div>
//               <img
//                 src={img}
//                 className="img-fluid"
//                 alt="watch"
//                 height={300}
//                 width={300}
//               />
//             </div>
//             <div className="special-product-content">
//               <h5 className="brand">{brand}</h5>
//               <h6 className="title">{title?.substr(0, 20) + "..."}</h6>
//               <ReactStars
//                 count={5}
//                 size={24}
//                 value={totalrating}
//                 edit={false}
//                 activeColor="#ffd700"
//               />
//               <p className="price">
//                 <span className="red-p">Rs {price}</span> &nbsp;{" "}
//                 {/* <strike>$200</strike> */}
//               </p>
//               {/* <div className="discount-till d-flex align-items-center gap-10">
//                 <p className="mb-0">
//                   <b>5 </b>days
//                 </p>
//                 <div className="d-flex gap-10 align-items-center">
//                   <span className="badge rounded-circle p-3 bg-danger">1</span>:
//                   <span className="badge rounded-circle p-3 bg-danger">1</span>:
//                   <span className="badge rounded-circle p-3 bg-danger">1</span>
//                 </div>
//               </div> */}
//               <div className="prod-count my-3">
//                 <p>Products: {quantity}</p>
//                 <div className="progress">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     style={{ width: quantity / quantity + sold * 100 + "%" }}
//                     aria-valuenow={quantity / quantity + sold * 100}
//                     aria-valuemin={quantity}
//                     aria-valuemax={sold + quantity}
//                   ></div>
//                 </div>
//               </div>
//               <Link className="button" to={"/product/" + id}>
//                 View
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SpecialProduct;

import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = ({
  title = "Demo Product",
  brand = "Demo Brand",
  totalrating = 4,
  price = 999,
  sold = 0,
  quantity = 100,
  id = "1",
  img = "https://via.placeholder.com/300",
}) => {
  const totalStock = sold + quantity;
  const progressPercentage = (sold / totalStock) * 100;

  return (
    <div className="col-4 mb-3">
      <div className="p-4 border rounded-lg shadow-md bg-white flex justify-between">
        {/* Product Image */}
        <div>
          <img
            src={img}
            className="w-64 h-64 object-cover rounded"
            alt={title}
          />
        </div>

        {/* Product Details */}
        <div className="ml-4">
          <h5 className="text-gray-500">{brand}</h5>
          <h6 className="font-semibold">{title.length > 20 ? title.substr(0, 20) + "..." : title}</h6>

          <ReactStars count={5} size={24} value={totalrating} edit={false} activeColor="#ffd700" />

          <p className="text-lg font-bold text-red-500">Rs {price}</p>

          {/* Stock Progress Bar */}
          <div className="my-3">
            <p className="text-sm">Products Available: {quantity}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-red-500 h-2.5 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* View Button */}
          <Link className="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-3" to={`/product/${id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;

