// import React from "react";
// import { Link } from "react-router-dom";

// const BlogCard = (props) => {
//   const { id, title, description, image, date } = props;
//   return (
//     <div className="blog-card">
//       <div className="card-image">
//         <img
//           src={image ? image : "images/blog-1.jpg"}
//           className="img-fluid w-100"
//           alt="blog"
//         />
//       </div>
//       <div className="blog-content">
//         <p className="date">{date}</p>
//         <h5 className="title">{title}</h5>
//         <p
//           className="desc"
//           dangerouslySetInnerHTML={{
//             __html: description?.substr(0, 70) + "...",
//           }}
//         ></p>
//         <Link to={"/blog/" + id} className="button">
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, description = "", image, date }) => {
  const defaultImage = "images/blog-1.jpg";
  const truncatedDescription =
    description.length > 70 ? description.slice(0, 70) + "..." : description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-4">
      {/* Blog Image */}
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img
          src={image || defaultImage}
          className="w-full h-full object-cover"
          alt="blog"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <p className="text-gray-500 text-sm">{date}</p>
        <h5 className="text-lg font-semibold text-gray-800 mt-2">{title}</h5>
        <p className="text-gray-700 text-sm mt-2">{truncatedDescription}</p>

        {/* Read More Button */}
        <Link
          to={`/blog/${id}`}
          className="inline-block mt-3 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

