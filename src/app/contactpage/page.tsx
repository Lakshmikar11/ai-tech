import { Button } from "@/components/ui/button"
import Stickyheader from "@/components/ui/stickyheader"
export default function Contactpage(){
    return(
        <>
        <Stickyheader />
        <main className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 space-y-16 px-6 py-16">
  {/* Contact Introduction Section */}
  <section className="text-center space-y-6 py-10 border-b border-gray-300 bg-gradient-to-r from-blue-50 to-blue-100">
  <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">Contact Us</h1>
  <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
  We're here to help! Whether you have a question about our services or want to discuss how we can assist your business, get in touch with us today.
  </p>
</section>


  {/* Contact Information Section */}
  <section className="grid gap-10 md:grid-cols-3 px-4">
    <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 border border-indigo-200 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold text-indigo-900">Email Us</h3>
      <p className="text-indigo-800">contact@halixtechsolutions.com</p>
    </div>
    <div className="bg-gradient-to-b from-orange-50 to-orange-100 border border-orange-200 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold text-orange-900">Call Us</h3>
      <p className="text-orange-800">+1 (800) 123-4567</p>
    </div>
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 border border-purple-200 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold text-purple-900">Our Office</h3>
      <p className="text-purple-800">123 Tech Lane, Suite 400, City, State, 12345</p>
    </div>
  </section>

  {/* Contact Form Section */}
  <section className="px-4 py-12 bg-gradient-to-b from-pink-50 to-pink-100">
    <h2 className="text-3xl font-bold text-center mb-6 text-pink-900">Get In Touch</h2>
    <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 ring-1 ring-pink-200">
      <div className="grid gap-6 mb-6 sm:grid-cols-2">
        <div className="relative">
          <label htmlFor="name" className="text-sm text-pink-800">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="email" className="text-sm text-pink-800">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      <div className="relative mb-6">
        <label htmlFor="message" className="text-sm text-pink-800">Your Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Enter your message"
          rows= {6}
          required
        ></textarea>
      </div>
      <div className="text-center">
        <Button className="px-8 py-4 bg-pink-600 text-white font-semibold shadow-lg hover:bg-pink-500 transition-all duration-300">
          Send Message
        </Button>
      </div>
    </form>
  </section>

  {/* Call to Action Section */}
  <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">Let's Start the Conversation</h2>
      <p className="text-lg text-white mb-8">
        Our team is ready to help you take your business to the next level. Reach out now to get started!
      </p>
      <Button className="px-8 py-4 bg-white text-blue-600 font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300">
        Contact Us Today
      </Button>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-900 text-gray-200 py-6 text-center">
    <p className="text-sm">© 2024 Halix Tech Solutions. All Rights Reserved.</p>
    <div className="mt-2">
      <a href="/privacypage" className="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</a>
      <span className="mx-2">|</span>
      <a href="/termspage" className="text-sm text-gray-400 hover:text-gray-300">Terms of Service</a>
    </div>
  </footer>
</main>
</>

    )
}
