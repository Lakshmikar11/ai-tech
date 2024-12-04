// pages/privacy-policy.js

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen py-12 px-6">
      <section className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          At Halix Tech Solutions, we value your privacy. This privacy policy explains how we collect, use, and protect your personal data.
        </p>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Information We Collect</h2>
          <p className="text-gray-600">
            We collect information such as your name, email, and phone number when you contact us via our website or sign up for services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">How We Use Your Information</h2>
          <p className="text-gray-600">
            The information we collect is used to provide and improve our services, communicate with you, and fulfill your requests.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Data Security</h2>
          <p className="text-gray-600">
            We implement reasonable security measures to protect your personal data from unauthorized access or disclosure.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal data. Please contact us if you have any concerns.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this policy from time to time. Any changes will be posted on this page.
          </p>
        </div>
      </section>
    </main>
  );
}
