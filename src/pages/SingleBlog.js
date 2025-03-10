// import React, { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import BreadCrumb from "../components/BreadCrumb";
// import { HiOutlineArrowLeft } from "react-icons/hi";
// import Meta from "../components/Meta";
// import blog from "../images/blog-1.jpg";
// import Container from "../components/Container";
// import { useDispatch, useSelector } from "react-redux";
// import { getABlog } from "../features/blogs/blogSlice";

// const SingleBlog = () => {
//   const blogState = useSelector((state) => state?.blog?.singleblog);
//   const location = useLocation();
//   const getBlogId = location.pathname.split("/")[2];

//   const dispatch = useDispatch();
//   useEffect(() => {
//     getblog();
//   }, []);
//   const getblog = () => {
//     dispatch(getABlog(getBlogId));
//   };
//   return (
//     <>
//       <Meta title={blogState?.title} />
//       <BreadCrumb title={blogState?.title} />
//       <Container class1="blog-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-12">
//             <div className="single-blog-card">
//               <Link to="/blogs" className="d-flex align-items-center gap-10">
//                 <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
//               </Link>
//               <h3 className="title">{blogState?.title} </h3>
//               <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
//               <p
//                 dangerouslySetInnerHTML={{ __html: blogState?.description }}
//               ></p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default SingleBlog;



import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.singleblog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getABlog(getBlogId));
  }, [dispatch, getBlogId]);

  return (
    <>
      <Meta title={blogState?.title || "Blog"} />
      <BreadCrumb title={blogState?.title || "Blog"} />
      <Container class1="py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Back Button */}
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition mb-4"
          >
            <HiOutlineArrowLeft className="text-xl" />
            <span>Go back to Blogs</span>
          </Link>

          {/* Blog Title */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {blogState?.title}
          </h3>

          {/* Blog Image */}
          {blogState?.image && (
            <img
              src={blogState?.image}
              className="w-full rounded-lg shadow-md mb-4"
              alt="blog"
            />
          )}

          {/* Blog Content */}
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogState?.description }}
          ></div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
