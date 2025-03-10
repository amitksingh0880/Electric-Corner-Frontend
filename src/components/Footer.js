// import React from "react";
// import { Link } from "react-router-dom";
// import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
// import newsletter from "../images/newsletter.png";
// const Footer = () => {
//   return (
//     <>
//       <footer className="py-4">
//         <div className="container-xxl">
//           <div className="row align-items-center">
//             <div className="col-5">
//               <div className="footer-top-data d-flex gap-30 align-items-center">
//                 <img src={newsletter} alt="newsletter" />
//                 <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
//               </div>
//             </div>
//             <div className="col-7">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control py-1"
//                   placeholder="Your Email Address"
//                   aria-label="Your Email Address"
//                   aria-describedby="basic-addon2"
//                 />
//                 <span className="input-group-text p-2" id="basic-addon2">
//                   Subscribe
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       <footer className="py-4">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-4">
//               <h4 className="text-white mb-4">Contact Us</h4>
//               <div>
//                 <address className="text-white fs-6">
//                   Hno : Daiict college, Reliance Cross Rd, <br />{" "}
//                   Gandhinagar,Gujarat <br />
//                   PinCode: 382007
//                 </address>
//                 <a
//                   href="tel:+91 8264954234"
//                   className="mt-3 d-block mb-1 text-white"
//                 >
//                   +91 8264954234
//                 </a>
//                 <a
//                   href="mailto:devjariwala8444@gmail.com"
//                   className="mt-2 d-block mb-0 text-white"
//                 >
//                   devjariwala8444@gmail.com
//                 </a>
//                 <div className="social_icons d-flex align-items-center gap-30 mt-4">
//                   <a className="text-white" href="#">
//                     <BsLinkedin className="fs-4" />
//                   </a>
//                   <a className="text-white" href="#">
//                     <BsInstagram className="fs-4" />
//                   </a>
//                   <a className="text-white" href="#">
//                     <BsGithub className="fs-4" />
//                   </a>
//                   <a className="text-white" href="#">
//                     <BsYoutube className="fs-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-3">
//               <h4 className="text-white mb-4">Information</h4>
//               <div className="footer-link d-flex flex-column">
//                 <Link to="/privacy-policy" className="text-white py-2 mb-1">
//                   Privacy Policy
//                 </Link>
//                 <Link to="/refund-policy" className="text-white py-2 mb-1">
//                   Refund Policy
//                 </Link>
//                 <Link to="/shipping-policy" className="text-white py-2 mb-1">
//                   Shipping Policy
//                 </Link>
//                 <Link to="/term-conditions" className="text-white py-2 mb-1">
//                   Terms & Conditions
//                 </Link>
//                 <Link className="text-white py-2 mb-1">Blogs</Link>
//               </div>
//             </div>
//             <div className="col-3">
//               <h4 className="text-white mb-4">Account</h4>
//               <div className="footer-link d-flex flex-column">
//                 <Link className="text-white py-2 mb-1">About Us</Link>
//                 <Link className="text-white py-2 mb-1">Faq</Link>
//                 <Link className="text-white py-2 mb-1">Contact</Link>
//               </div>
//             </div>
//             <div className="col-2">
//               <h4 className="text-white mb-4">Quick Links</h4>
//               <div className="footer-link d-flex flex-column">
//                 <Link className="text-white py-2 mb-1">Laptops</Link>
//                 <Link className="text-white py-2 mb-1">Headphones</Link>
//                 <Link className="text-white py-2 mb-1">Tablets</Link>
//                 <Link className="text-white py-2 mb-1">Watch</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       <footer className="py-4">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12">
//               <p className="text-center mb-0 text-white">
//                 &copy; {new Date().getFullYear()}; Powered by Cart Corner
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <footer className="py-2 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-6">
              <img src={newsletter} alt="newsletter" className="w-12 h-12" />
              <h2 className="text-lg font-semibold">Sign Up for Newsletter</h2>
            </div>
            <div className="flex items-center w-full sm:w-auto sm:mt-0">
              <input
                type="text"
                className="w-full sm:w-64 p-2 text-black rounded-l-md focus:outline-none"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Main Footer */}
      <footer className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <address className="text-sm">
              123 Street Name, City, <br />
              State, Country <br />
              PinCode: 000000
            </address>
            <a href="tel:+91 1234567890" className="block mt-2 text-sm hover:text-blue-400">
              +91 1234567890
            </a>
            <a href="mailto:info@example.com" className="block mt-2 text-sm hover:text-blue-400">
              info@example.com
            </a>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white text-xl hover:text-blue-400">
                <BsLinkedin />
              </a>
              <a href="#" className="text-white text-xl hover:text-blue-400">
                <BsInstagram />
              </a>
              <a href="#" className="text-white text-xl hover:text-blue-400">
                <BsGithub />
              </a>
              <a href="#" className="text-white text-xl hover:text-blue-400">
                <BsYoutube />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Information</h4>
            <div className="flex flex-col text-sm space-y-2">
              <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
              <Link to="/refund-policy" className="hover:text-blue-400">Refund Policy</Link>
              <Link to="/shipping-policy" className="hover:text-blue-400">Shipping Policy</Link>
              <Link to="/terms-conditions" className="hover:text-blue-400">Terms & Conditions</Link>
              <Link to="/blogs" className="hover:text-blue-400">Blogs</Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Account</h4>
            <div className="flex flex-col text-sm space-y-2">
              <Link className="hover:text-blue-400">About Us</Link>
              <Link className="hover:text-blue-400">FAQ</Link>
              <Link className="hover:text-blue-400">Contact</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col text-sm space-y-2">
              <Link className="hover:text-blue-400">Laptops</Link>
              <Link className="hover:text-blue-400">Headphones</Link>
              <Link className="hover:text-blue-400">Tablets</Link>
              <Link className="hover:text-blue-400">Watches</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Footer */}
      <footer className="py-2 bg-gray-900 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Powered by Your Brand</p>
      </footer>
    </>
  );
};

export default Footer;
