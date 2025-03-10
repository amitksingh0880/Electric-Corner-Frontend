// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import { Link, useNavigate } from "react-router-dom";
// import Container from "../components/Container";
// import CustomInput from "../components/CustomInput";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { forgotPasswordToken } from "../features/user/userSlice";

// let emailSchema = yup.object({
//   email: yup
//     .string()
//     .required("Email is Required")
//     .email("Email Should be valid"),
// });

// const Forgotpassword = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema: emailSchema,
//     onSubmit: (values) => {
//       dispatch(forgotPasswordToken(values));
//     },
//   });
//   return (
//     <>
//       <Meta title={"Forgot Password"} />
//       <BreadCrumb title="Forgot Password" />
//       <Container class1="login-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Reset Your Password</h3>
//               <p className="text-center mt-2 mb-3">
//                 We will send you an email to reset your password
//               </p>
//               <form
//                 action=""
//                 className="d-flex flex-column gap-15"
//                 onSubmit={formik.handleSubmit}
//               >
//                 <CustomInput
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   value={formik.values.email}
//                   onChange={formik.handleChange("email")}
//                   onBlur={formik.handleBlur("email")}
//                 />
//                 <div className="error">
//                   {formik.touched.email && formik.errors.email}
//                 </div>

//                 <div>
//                   <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
//                     <button className="button border-0" type="submit">
//                       Submit
//                     </button>
//                     <Link to="/login">Cancel</Link>
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

// export default Forgotpassword;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { forgotPasswordToken } from "../features/user/userSlice";

let emailSchema = yup.object({
  email: yup
    .string()
    .required("Email is Required")
    .email("Email should be valid"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-center text-gray-700">Reset Your Password</h3>
        <p className="text-center text-gray-500 mt-2 mb-5">
          We will send you an email to reset your password.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            <Link to="/login" className="text-blue-600 hover:underline">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

