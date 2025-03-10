import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Conditions"} />
      <BreadCrumb title="Terms and Conditions" />
      <Container className="py-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          <p className="mb-6">
            Welcome to our website. By accessing or using our website, you agree
            to comply with and be bound by the following terms and conditions.
            Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By using this website, you agree to these terms and conditions. If
            you do not agree, please do not use this website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Use of the Website</h2>
          <p className="mb-6">
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of, restrict, or inhibit anyone
            else's use and enjoyment of the website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="mb-6">
            All content on this website, including text, graphics, logos, and
            images, is the property of the website owner and is protected by
            intellectual property laws. You may not reproduce, distribute, or
            use any content without prior written permission.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
          <p className="mb-6">
            If you create an account on this website, you are responsible for
            maintaining the confidentiality of your account and password. You
            agree to accept responsibility for all activities that occur under
            your account.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            The website owner is not liable for any damages arising from the use
            of this website, including but not limited to direct, indirect,
            incidental, or consequential damages.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these terms and conditions at any
            time. Your continued use of the website after any changes constitutes
            your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p className="mb-6">
            These terms and conditions are governed by and construed in
            accordance with the laws of [Your Country/State]. Any disputes
            arising from these terms will be subject to the exclusive
            jurisdiction of the courts of [Your Country/State].
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about these terms and conditions, please
            contact us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
          </p>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;