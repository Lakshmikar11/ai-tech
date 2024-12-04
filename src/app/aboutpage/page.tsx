import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="bg-white text-black space-y-16 px-6 py-16">
      {/* Introduction Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-wide text-blue-800 leading-tight">
          About Halix Tech Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
          At Halix Tech Solutions, we provide cutting-edge IT services and consulting solutions to help businesses thrive. Our mission is to deliver scalable, innovative technology solutions that address your unique business challenges.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white border border-gray-300 shadow-sm hover:shadow-md rounded-lg transform hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-800">Our Mission</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Empowering businesses through technology with scalable, reliable solutions.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-white border border-gray-300 shadow-sm hover:shadow-md rounded-lg transform hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-800">Our Vision</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              To be a leader in providing innovative technology solutions that drive business success.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-white border border-gray-300 shadow-sm hover:shadow-md rounded-lg transform hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-800">Our Values</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Built on trust, innovation, and excellence, our values drive every project.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Core Values Accordion Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Our Core Values</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="innovation">
            <AccordionTrigger className="text-xl font-semibold text-blue-800 hover:text-blue-600 transition duration-300">
              Innovation
            </AccordionTrigger>
            <AccordionContent className="bg-blue-50 p-4 text-lg text-gray-700 rounded-md">
              We embrace the latest technologies to deliver customized, future-ready solutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="reliability">
            <AccordionTrigger className="text-xl font-semibold text-blue-800 hover:text-blue-600 transition duration-300">
              Reliability
            </AccordionTrigger>
            <AccordionContent className="bg-blue-50 p-4 text-lg text-gray-700 rounded-md">
              Our commitment to reliability means we deliver dependable solutions on time, every time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="transparency">
            <AccordionTrigger className="text-xl font-semibold text-blue-800 hover:text-blue-600 transition duration-300">
              Transparency
            </AccordionTrigger>
            <AccordionContent className="bg-blue-50 p-4 text-lg text-gray-700 rounded-md">
              We believe in clear, open communication to build long-term relationships with our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Trust Signals Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Why Choose Us?</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white p-8 text-center rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-handshake text-4xl text-blue-800 mb-4"></i>
            <h3 className="text-2xl font-semibold text-blue-800">Trusted by Leading Companies</h3>
            <p className="text-lg text-gray-600 mt-2">We are trusted by top companies to deliver innovative and effective solutions.</p>
          </div>
          <div className="bg-white p-8 text-center rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-cogs text-4xl text-blue-800 mb-4"></i>
            <h3 className="text-2xl font-semibold text-blue-800">Expertise You Can Rely On</h3>
            <p className="text-lg text-gray-600 mt-2">Our team brings extensive industry experience to solve complex challenges efficiently.</p>
          </div>
          <div className="bg-white p-8 text-center rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <i className="fas fa-users text-4xl text-blue-800 mb-4"></i>
            <h3 className="text-2xl font-semibold text-blue-800">Client-Centered Approach</h3>
            <p className="text-lg text-gray-600 mt-2">We work closely with clients to understand their needs and deliver tailored solutions.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Our Achievements</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Badge className="text-lg p-6 bg-blue-100 text-blue-800 hover:bg-blue-200 transition duration-300">🌟 100+ Clients Served</Badge>
          <Badge className="text-lg p-6 bg-green-100 text-green-800 hover:bg-green-200 transition duration-300">🚀 50+ Projects Completed</Badge>
          <Badge className="text-lg p-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition duration-300">🎉 10+ Years in Business</Badge>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Ready to take your business to the next level? Let’s discuss how we can help you thrive through technology!
        </p>
        <Button className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">
          Get in Touch
        </Button>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 py-6 text-center text-gray-200">
        <p className="text-sm">&copy; 2024 Halix Tech Solutions. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="text-sm text-gray-400 hover:text-gray-300">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}
