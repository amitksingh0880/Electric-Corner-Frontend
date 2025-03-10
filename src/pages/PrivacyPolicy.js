// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import Container from "../components/Container";

// const PrivacyPolicy = () => {
//   return (
//     <>
//       <Meta title={"Privacy Policy"} />
//       <BreadCrumb title="Privacy Policy" />
//       <Container class1="policy-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <div className="policy"></div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default PrivacyPolicy;

import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title="Privacy Policy" />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="py-5">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy outlines how we collect, use, and protect your personal 
              information when you use our website.
            </p>

            {/* Information We Collect */}
            <h3 className="text-xl font-semibold mb-2 text-gray-700">1. Information We Collect</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information such as your name, email address, phone 
              number, and any other details you provide while using our services.
            </p>

            {/* How We Use Your Information */}
            <h3 className="text-xl font-semibold mb-2 text-gray-700">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>To provide, operate, and maintain our website.</li>
              <li>To improve user experience and personalize content.</li>
              <li>To communicate with you, respond to inquiries, and provide support.</li>
              <li>To analyze trends and improve our services.</li>
            </ul>

            {/* Data Protection */}
            <h3 className="text-xl font-semibold mb-2 text-gray-700">3. Data Protection</h3>
            <p className="text-gray-600 mb-4">
              We take security seriously and implement appropriate measures to protect your 
              data from unauthorized access, alteration, or disclosure.
            </p>

            {/* Third-Party Services */}
            <h3 className="text-xl font-semibold mb-2 text-gray-700">4. Third-Party Services</h3>
            <p className="text-gray-600 mb-4">
              We may use third-party services to analyze website traffic or enhance 
              functionalities. These third parties may collect data according to their own 
              privacy policies.
            </p>

            {/* Your Rights */}
            <h3 className="text-xl font-semibold mb-2 text-gray-700">5. Your Rights</h3>
            <p className="text-gray-600 mb-4">
              You have the right to access, update, or delete your personal information. If you 
              wish to exercise these rights, please contact us.
            </p>

            {/* Changes to Policy */}
            <h3 className="text-xl font-semibold mb-2 text-gray-700">6. Changes to This Policy</h3>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted 
              on this page with an updated date.
            </p>

            {/* Contact Us */}
            <h3 className="text-xl font-semibold mb-2 text-gray-700">7. Contact Us</h3>
            <p className="text-gray-600">
              If you have any questions about our Privacy Policy, please contact us at 
              <span className="text-blue-500"> support@example.com</span>.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;

