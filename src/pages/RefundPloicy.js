// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import Container from "../components/Container";

// const RefundPloicy = () => {
//   return (
//     <>
//       <Meta title={"Refund Policy"} />
//       <BreadCrumb title="Refund Policy" />
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

// export default RefundPloicy;



import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <Meta title="Refund Policy" />
      <BreadCrumb title="Refund Policy" />
      <Container class1="py-5">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Policy</h2>
          
          <p className="text-gray-600 mb-4">
            We strive to ensure customer satisfaction with every purchase. If you are not completely satisfied 
            with your order, we are here to help.
          </p>

          {/* Eligibility for Refunds */}
          <h3 className="text-lg font-semibold text-gray-700 mt-6">Eligibility for Refunds</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>Item must be unused and in the same condition as received.</li>
            <li>Returns must be initiated within <strong>7 days</strong> of delivery.</li>
            <li>Proof of purchase (receipt or order confirmation) is required.</li>
            <li>Items that are damaged or missing parts for reasons not due to our error are not eligible.</li>
          </ul>

          {/* Refund Process */}
          <h3 className="text-lg font-semibold text-gray-700 mt-6">Refund Process</h3>
          <p className="text-gray-600 mt-2">
            To request a refund, please follow these steps: 
          </p>
          <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-2">
            <li>Contact our support team at <strong>support@example.com</strong> with your order details.</li>
            <li>Ship the item back to our returns address (provided after refund approval).</li>
            <li>Once received and inspected, we will notify you of the refund approval status.</li>
            <li>If approved, refunds will be processed within <strong>5-7 business days</strong>.</li>
          </ol>

          {/* Non-Refundable Items */}
          <h3 className="text-lg font-semibold text-gray-700 mt-6">Non-Refundable Items</h3>
          <p className="text-gray-600 mt-2">
            Certain items are non-refundable, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Perishable goods (food, flowers, etc.)</li>
            <li>Items purchased during clearance sales</li>
          </ul>

          {/* Contact Information */}
          <h3 className="text-lg font-semibold text-gray-700 mt-6">Contact Us</h3>
          <p className="text-gray-600 mt-2">
            If you have any questions about our refund policy, please contact us at:  
            <strong> support@example.com</strong>.
          </p>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;

