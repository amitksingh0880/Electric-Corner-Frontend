// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import Container from "../components/Container";
// import CustomInput from "../components/CustomInput";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../features/user/userSlice";

// let loginSchema = yup.object({
//   email: yup
//     .string()
//     .required("Email is Required")
//     .email("Email Should be valid"),

//   password: yup.string().required("Password is Required"),
// });

// const Login = () => {
//   const authState = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: loginSchema,
//     onSubmit: (values) => {
//       dispatch(loginUser(values));

//       // setTimeout(() => {
//       //   window.location.reload();
//       // }, 1000);
//     },
//   });
//   useEffect(() => {
//     if (authState.user !== null && authState.isError === false) {
//       window.location.href = "/";
//     }
//   }, [authState]);

//   return (
//     <>
//       <Meta title={"Login"} />
//       <BreadCrumb title="Login" />

//       <Container class1="login-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Login</h3>
//               <form
//                 action=""
//                 onSubmit={formik.handleSubmit}
//                 className="d-flex flex-column gap-15"
//               >
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
//                   <Link to="/forgot-password">Forgot Password?</Link>

//                   <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
//                     <button className="button border-0" type="submit">
//                       Login
//                     </button>
//                     <Link to="/signup" className="button signup">
//                       SignUp
//                     </Link>
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

// export default Login;


import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";

let loginSchema = yup.object({
  email: yup.string().required("Email is Required").email("Email Should be valid"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  
  useEffect(() => {
    if (authState.user !== null && authState.isError === false) {
      window.location.href = "/";
    }
  }, [authState]);

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login"/>
      <Container>
        <div className="flex justify-center mt-3 mb-3">
          <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
            <h3 className="text-center text-2xl font-semibold mb-6">Login</h3>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <CustomInput
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}

              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              )}

              <div className="flex justify-between items-center text-sm">
                <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
                >
                  Login
                </button>
                <Link
                  to="/signup"
                  className="w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-md transition"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;

