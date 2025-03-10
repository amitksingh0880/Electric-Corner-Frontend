// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Container from "../components/Container";
// import Meta from "../components/Meta";

// const ShippingPolicy = () => {
//   return (
//     <>
//       <Meta title={"Shippingg Pplicy"} />
//       <BreadCrumb title="Shippingg Pplicy" />
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

// export default ShippingPolicy;



import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title="Shipping Policy" />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="py-5">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Shipping Policy for Electric Items
          </h2>

          <p className="text-gray-700 mb-4">
            Thank you for shopping with us! We strive to provide fast and reliable shipping for all electric products. Below is our detailed shipping policy.
          </p>

          {/* 1. Shipping Regions */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Shipping Regions</h3>
            <p className="text-gray-600">
              We currently ship electric items across the United States, Canada, and select international locations. Shipping availability may vary depending on the product type and destination.
            </p>
          </div>

          {/* 2. Processing Time */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Processing Time</h3>
            <p className="text-gray-600">
              Orders are typically processed within <span className="font-semibold">1-3 business days</span>. Processing times may vary during peak seasons or due to unforeseen circumstances.
            </p>
          </div>

          {/* 3. Estimated Delivery Time */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Estimated Delivery Time</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li><span className="font-semibold">Standard Shipping:</span> 5-7 business days</li>
              <li><span className="font-semibold">Express Shipping:</span> 2-3 business days</li>
              <li><span className="font-semibold">International Shipping:</span> 7-14 business days</li>
            </ul>
          </div>

          {/* 4. Shipping Charges */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Shipping Charges</h3>
            <p className="text-gray-600">
              Shipping costs depend on the item weight, destination, and shipping method selected at checkout. Free shipping is available on orders over <span className="font-semibold">$100</span>.
            </p>
          </div>

          {/* 5. Order Tracking */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Order Tracking</h3>
            <p className="text-gray-600">
              Once your order is shipped, you will receive a tracking number via email to monitor your package in real time.
            </p>
          </div>

          {/* 6. Damaged or Lost Packages */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Damaged or Lost Packages</h3>
            <p className="text-gray-600">
              If your package is lost or arrives damaged, please contact our support team within <span className="font-semibold">48 hours</span> of delivery for assistance.
            </p>
          </div>

          {/* 7. Return Policy for Electric Items */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Returns & Exchanges</h3>
            <p className="text-gray-600">
              Electric items can be returned within <span className="font-semibold">30 days</span> of purchase. The product must be unused, in its original packaging, and include all accessories.
            </p>
          </div>

          <p className="text-gray-700 mt-6">
            If you have any further questions, please contact our customer service at{" "}
            <span className="text-blue-600 font-semibold">support@yourelectronicsstore.com</span>.
          </p>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;

