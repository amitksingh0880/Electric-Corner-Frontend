import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { resetPassword } from "../features/user/userSlice";

let passwordSchema = yup.object({
  password: yup.string().required("Password is required"),
});

const ResetPassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));
      navigate("/login");
    },
  });

  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <Container class1="py-5">
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h3 className="text-center text-2xl font-semibold text-gray-800 mb-4">
              Reset Password
            </h3>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Password Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your new password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
