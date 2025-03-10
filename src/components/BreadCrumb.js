// import React from "react";
// import { Link } from "react-router-dom";

// const BreadCrumb = (props) => {
//   const { title } = props;
//   return (
//     <div className="breadcrumb mb-0 py-4">
//       <div className="container-xxl">
//         <div className="row">
//           <div className="col-12">
//             <p className="text-center mb-0">
//               <Link to="/" className="text-dark">
//                 Home &nbsp;
//               </Link>
//               / {title}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BreadCrumb;


import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-lg text-gray-700">
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="font-semibold text-gray-800">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default BreadCrumb;

