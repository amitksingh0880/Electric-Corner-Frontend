// import React, { useEffect } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import { Link, useNavigate } from "react-router-dom";
// import Container from "../components/Container";
// import CustomInput from "../components/CustomInput";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../features/user/userSlice";

// let signUpSchema = yup.object({
//   firstname: yup.string().required("First Name is Required"),
//   lastname: yup.string().required("Last Name is Required"),
//   email: yup
//     .string()
//     .required("Email is Required")
//     .email("Email Should be valid"),
//   mobile: yup.number().required().positive().integer("Mobile No is Required"),
//   password: yup.string().required("Password is Required"),
// });

// const Signup = () => {
//   const authState = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const formik = useFormik({
//     initialValues: {
//       firstname: "",
//       lastname: "",
//       email: "",
//       mobile: "",
//       password: "",
//     },
//     validationSchema: signUpSchema,
//     onSubmit: (values) => {
//       dispatch(registerUser(values));
//     },
//   });

//   // useEffect(() => {
//   //   if (authState.createdUser !== null && authState.isError === false) {
//   //     navigate("/login");
//   //   }
//   // }, [authState]);

//   return (
//     <>
//       <Meta title={"Sign Up"} />
//       <BreadCrumb title="Sign Up" />
//       <Container class1="login-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Sign Up</h3>
//               <form
//                 action=""
//                 className="d-flex flex-column gap-15"
//                 onSubmit={formik.handleSubmit}
//               >
//                 <CustomInput
//                   type="text"
//                   name="firstname"
//                   placeholder="FirstName"
//                   value={formik.values.firstname}
//                   onChange={formik.handleChange("firstname")}
//                   onBlur={formik.handleBlur("firstname")}
//                 />
//                 <div className="error">
//                   {formik.touched.firstname && formik.errors.firstname}
//                 </div>
//                 <CustomInput
//                   type="text"
//                   name="lastname"
//                   placeholder="LastName"
//                   value={formik.values.lastname}
//                   onChange={formik.handleChange("lastname")}
//                   onBlur={formik.handleBlur("lastname")}
//                 />
//                 <div className="error">
//                   {formik.touched.lastname && formik.errors.lastname}
//                 </div>
//                 <CustomInput
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange("email")}
//                   onBlur={formik.handleBlur("email")}
//                 />
//                 <div className="error">
//                   {formik.touched.email && formik.errors.email}
//                 </div>
//                 <CustomInput
//                   type="tel"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   value={formik.values.mobile}
//                   onChange={formik.handleChange("mobile")}
//                   onBlur={formik.handleBlur("mobile")}
//                 />
//                 <div className="error">
//                   {formik.touched.mobile && formik.errors.mobile}
//                 </div>
//                 <CustomInput
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange("password")}
//                   onBlur={formik.handleBlur("password")}
//                 />
//                 <div className="error">
//                   {formik.touched.password && formik.errors.password}
//                 </div>
//                 <div>
//                   <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
//                     <button className="button border-0">Sign Up</button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Signup;



import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";

let signUpSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .required("Email is Required")
    .email("Email should be valid"),
  mobile: yup
    .string()
    .matches(/^\d{10}$/, "Mobile number must be 10 digits")
    .required("Mobile Number is Required"),
  password: yup.string().required("Password is Required"),
});

const Signup = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <Container class1="py-10">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-5">
            Sign Up
          </h3>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <CustomInput
                type="text"
                name="firstname"
                placeholder="First Name"
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
              <CustomInput
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.lastname}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <CustomInput
                type="email"
                name="email"
                placeholder="Email"
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
              <CustomInput
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.mobile}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Signup;
