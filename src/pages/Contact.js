// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
// import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
// import Container from "../components/Container";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch } from "react-redux";
// import { createQuery } from "../features/contact/contactSlice";

// let contactSchema = yup.object({
//   name: yup.string().required("First Name is Required"),
//   email: yup
//     .string()
//     .required("Email is Required")
//     .email("Email Should be valid"),
//   mobile: yup.number().required().positive().integer("Mobile No is Required"),
//   comment: yup.string().required("comments is Required"),
// });

// const Contact = () => {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       mobile: "",
//       comment: "",
//     },
//     validationSchema: contactSchema,
//     onSubmit: (values) => {
//       dispatch(createQuery(values));
//     },
//   });
//   return (
//     <>
//       <Meta title={"Contact Us"} />
//       <BreadCrumb title="Contact Us" />
//       <Container class1="contact-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.771103663534!2d76.99275607711007!3d28.886888929272477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103!5e0!3m2!1sen!2sin!4v1669909087902!5m2!1sen!2sin"
//               width="600"
//               height="450"
//               className="border-0 w-100"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//           <div className="col-12 mt-5">
//             <div className="contact-inner-wrapper d-flex justify-content-between ">
//               <div>
//                 <h3 className="contact-title mb-4">Contact</h3>
//                 <form
//                   action=""
//                   onSubmit={formik.handleSubmit}
//                   className="d-flex flex-column gap-15"
//                 >
//                   <div>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Name"
//                       name="name"
//                       onChange={formik.handleChange("name")}
//                       onBlur={formik.handleBlur("name")}
//                       value={formik.values.name}
//                     />
//                     <div className="error">
//                       {formik.touched.name && formik.errors.name}
//                     </div>
//                   </div>

//                   <div>
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Email"
//                       name="email"
//                       onChange={formik.handleChange("email")}
//                       onBlur={formik.handleBlur("email")}
//                       value={formik.values.email}
//                     />
//                     <div className="error">
//                       {formik.touched.email && formik.errors.email}
//                     </div>
//                   </div>
//                   <div>
//                     <input
//                       type="tel"
//                       className="form-control"
//                       placeholder="Mobile Number"
//                       name="mobile"
//                       onChange={formik.handleChange("mobile")}
//                       onBlur={formik.handleBlur("mobile")}
//                       value={formik.values.mobile}
//                     />
//                     <div className="error">
//                       {formik.touched.mobile && formik.errors.mobile}
//                     </div>
//                   </div>
//                   <div>
//                     <textarea
//                       id=""
//                       className="w-100 form-control"
//                       cols="30"
//                       rows="4"
//                       placeholder="Comments"
//                       name="comment"
//                       onChange={formik.handleChange("comment")}
//                       onBlur={formik.handleBlur("comment")}
//                       value={formik.values.comment}
//                     ></textarea>
//                     <div className="error">
//                       {formik.touched.comment && formik.errors.comment}
//                     </div>
//                   </div>
//                   <div>
//                     <button className="button border-0">Submit</button>
//                   </div>
//                 </form>
//               </div>
//               <div>
//                 <h3 className="contact-title mb-4">Get in touch with us</h3>
//                 <div>
//                   <ul className="ps-0">
//                     <li className="mb-3 d-flex gap-15 align-items-center">
//                       <AiOutlineHome className="fs-5" />
//                       <address className="mb-0">
//                         Hno : Daiict college, Reliance Cross Rd,
//                         Gandhinagar,Gujarat, 382007
//                       </address>
//                     </li>
//                     <li className="mb-3 d-flex gap-15 align-items-center">
//                       <BiPhoneCall className="fs-5" />
//                       <a href="tel:+91 8264954234">+91 8264954234</a>
//                     </li>
//                     <li className="mb-3 d-flex gap-15 align-items-center">
//                       <AiOutlineMail className="fs-5" />
//                       <a href="mailto:devjariwala8444@gmail.com">
//                         devjariwala8444@gmail.com
//                       </a>
//                     </li>
//                     <li className="mb-3 d-flex gap-15 align-items-center">
//                       <BiInfoCircle className="fs-5" />
//                       <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Contact;



import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

let contactSchema = yup.object({
  name: yup.string().required("Full Name is Required"),
  email: yup.string().required("Email is Required").email("Email should be valid"),
  mobile: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
    .required("Mobile number is required"),
  comment: yup.string().required("Message is Required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      mobile: "9876543210",
      comment: "Hi, I have a query regarding your product pricing.",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("Submitted Data:", values); // For debugging
      dispatch(createQuery(values));
    },
  });

  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Google Map Section */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?..."
              className="w-full h-100 rounded-lg shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Full Name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}

              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Email Address"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}

              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Mobile Number"
                name="mobile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
              )}

              <textarea
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your Message"
                name="comment"
                rows="4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
              ></textarea>
              {formik.touched.comment && formik.errors.comment && (
                <p className="text-red-500 text-sm">{formik.errors.comment}</p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Get in Touch...</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <AiOutlineHome className="text-xl text-gray-600" />
              <p className="text-gray-700">Sector 10, Gandhinagar, Gujarat</p>
            </li>
            <li className="flex items-center space-x-4">
              <BiPhoneCall className="text-xl text-gray-600" />
              <a href="tel:+91 1234567890" className="text-blue-600 hover:underline">
                +91 1234567890
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <AiOutlineMail className="text-xl text-gray-600" />
              <a href="mailto:amit@example.com" className="text-blue-600 hover:underline">
                amit.example.com
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <BiInfoCircle className="text-xl text-gray-600" />
              <p className="text-gray-700">Monday – Friday 10 AM – 8 PM</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;

