import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Stickyheader from "@/components/ui/stickyheader"

export default function ServicesPage(){
    return(
        <>
        <Stickyheader />
        <main className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 space-y-20 px-6 py-16">
        {/* Introduction Section */}
        <section className="relative text-center py-16 bg-gradient-to-r from-purple-50 to-purple-100">
          <h1 className="text-6xl font-extrabold text-purple-900">Our Services</h1>
          <p className="text-lg text-purple-800 max-w-3xl mx-auto mt-6">
            Explore our comprehensive range of IT services designed to empower your business with cutting-edge solutions and innovation.
          </p>
        </section>
      
        {/* Services Grid Section */}
        <section className="grid gap-10 lg:grid-cols-3 px-4">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-blue-900">Custom Software Development</h3>
            <p className="mt-4 text-blue-700">
              We deliver tailor-made software solutions crafted to align perfectly with your business needs.
            </p>
            <div className="absolute top-4 right-4 text-blue-300 text-6xl opacity-20">💻</div>
          </div>
      
          {/* Card 2 */}
          <div className="relative bg-gradient-to-b from-purple-50 to-purple-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-purple-900">Cloud Solutions</h3>
            <p className="mt-4 text-purple-700">
              Unlock the power of scalability and security with our cloud infrastructure expertise.
            </p>
            <div className="absolute top-4 right-4 text-purple-300 text-6xl opacity-20">☁️</div>
          </div>
      
          {/* Card 3 */}
          <div className="relative bg-gradient-to-b from-orange-50 to-orange-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-orange-900">IT Consulting</h3>
            <p className="mt-4 text-orange-700">
              Leverage strategic insights to align your IT initiatives with business goals.
            </p>
            <div className="absolute top-4 right-4 text-orange-300 text-6xl opacity-20">📊</div>
          </div>
        </section>
      
        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-indigo-100">
          <h2 className="text-4xl font-bold text-center text-indigo-900">Why Our Services Stand Out</h2>
          <div className="mt-10 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl text-indigo-600 mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-indigo-900">Scalable Solutions</h3>
              <p className="text-gray-700">Our services are designed to grow with your business needs.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-indigo-600 mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-indigo-900">Security First</h3>
              <p className="text-gray-700">We prioritize security to protect your data and operations.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-indigo-600 mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-indigo-900">Expert Team</h3>
              <p className="text-gray-700">Our experienced professionals ensure success at every step.</p>
            </div>
          </div>
        </section>
      
        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold">Partner With Us Today!</h2>
            <p className="mt-4 text-lg">
              Take the next step toward transforming your business with Halix Tech Solutions.
            </p>
            <Button className="mt-6 px-8 py-4 bg-white text-purple-800 font-bold shadow-lg hover:bg-gray-200 transition-all">
              Get Started
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
