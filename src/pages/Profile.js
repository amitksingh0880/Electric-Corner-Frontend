// import React, { useState } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Container from "../components/Container";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { updateProfile } from "../features/user/userSlice";
// import { FiEdit } from "react-icons/fi";

// let profileSchema = yup.object({
//   firstname: yup.string().required("First Name is Required"),
//   lastname: yup.string().required("Last Name is Required"),
//   email: yup
//     .string()
//     .required("Email is Required")
//     .email("Email Should be valid"),
//   mobile: yup.number().required().positive().integer("Mobile No is Required"),
// });

// const Profile = () => {
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
//   const dispatch = useDispatch();
//   const userState = useSelector((state) => state.auth.user);
//   const [edit, setEdit] = useState(true);
//   const formik = useFormik({
//     initialValues: {
//       firstname: userState?.firstname,
//       lastname: userState?.lastname,
//       email: userState?.email,
//       mobile: userState?.mobile,
//     },
//     validationSchema: profileSchema,
//     onSubmit: (values) => {
//       dispatch(updateProfile({ data: values, config2: config2 }));
//       setEdit(true);
//     },
//   });

//   return (
//     <>
//       <BreadCrumb title="My Profile" />
//       <Container class1="cart-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-12">
//             <div className="d-flex justify-content-between align-items-center">
//               <h3 className="my-3">Update Profile</h3>

//               <FiEdit className="fs-3" onClick={() => setEdit(false)} />
//             </div>
//           </div>
//           <div className="col-12">
//             <form action="" onSubmit={formik.handleSubmit}>
//               <div className="mb-3">
//                 <div className="mb-3">
//                   <label htmlFor="example1" className="form-label">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstname"
//                     className="form-control"
//                     id="example1"
//                     disabled={edit}
//                     value={formik.values.firstname}
//                     onChange={formik.handleChange("firstname")}
//                     onBlur={formik.handleBlur("firstname")}
//                   />
//                   <div className="error">
//                     {formik.touched.firstname && formik.errors.firstname}
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="example2" className="form-label">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastname"
//                     className="form-control"
//                     id="example2"
//                     disabled={edit}
//                     value={formik.values.lastname}
//                     onChange={formik.handleChange("lastname")}
//                     onBlur={formik.handleBlur("lastname")}
//                   />
//                   <div className="error">
//                     {formik.touched.lastname && formik.errors.lastname}
//                   </div>
//                 </div>
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   disabled={edit}
//                   aria-describedby="emailHelp"
//                   value={formik.values.email}
//                   onChange={formik.handleChange("email")}
//                   onBlur={formik.handleBlur("email")}
//                 />
//                 <div className="error">
//                   {formik.touched.email && formik.errors.email}
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="example3" className="form-label">
//                     Mobile No
//                   </label>
//                   <input
//                     type="number"
//                     name="mobile"
//                     className="form-control"
//                     id="example3"
//                     disabled={edit}
//                     value={formik.values.mobile}
//                     onChange={formik.handleChange("mobile")}
//                     onBlur={formik.handleBlur("mobile")}
//                   />
//                   <div className="error">
//                     {formik.touched.mobile && formik.errors.mobile}
//                   </div>
//                 </div>
//               </div>

//               {edit === false && (
//                 <button type="submit" className="btn btn-primary">
//                   Save
//                 </button>
//               )}
//             </form>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Profile;



import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import { FiEdit } from "react-icons/fi";

// Validation Schema
const profileSchema = yup.object({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required").email("Enter a valid email"),
  mobile: yup
    .number()
    .required("Mobile Number is required")
    .positive()
    .integer(),
});

const Profile = () => {
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

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);
  const [edit, setEdit] = useState(true);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstname: userState?.firstname || "",
      lastname: userState?.lastname || "",
      email: userState?.email || "",
      mobile: userState?.mobile || "",
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateProfile({ data: values, config2: config2 }));
      setEdit(true);
    },
  });

  return (
    <>
      <BreadCrumb title="My Profile" />
      <Container class1="py-5">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Update Profile</h2>
            <FiEdit
              className="text-gray-600 cursor-pointer text-xl hover:text-gray-800"
              onClick={() => setEdit(false)}
            />
          </div>

          {/* Form Section */}
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                disabled={edit}
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.firstname}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                disabled={edit}
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.lastname}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                disabled={edit}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="number"
                name="mobile"
                className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                disabled={edit}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.mobile}</p>
              )}
            </div>

            {/* Save Button */}
            {!edit && (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Save
              </button>
            )}
          </form>
        </div>
      </Container>
    </>
  );
};

export default Profile;
