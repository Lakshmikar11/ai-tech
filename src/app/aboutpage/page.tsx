import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Stickyheader from "@/components/ui/stickyheader";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
    <Stickyheader />
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 space-y-16 px-6 py-16">
      {/* Introduction Section */}
      <section className="text-center space-y-6 py-10 border-b border-gray-300 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-900">About Halix Tech Solutions</h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-blue-800">
          At Halix Tech Solutions, we provide cutting-edge IT services and consulting solutions tailored to your business needs. 
          Our mission is to empower growth and innovation through technology.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-3 px-4">
  <Card className="bg-gradient-to-b from-purple-50 to-purple-100 border border-purple-200 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 rounded-lg">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-purple-900">Our Mission</CardTitle>
      <CardDescription className="text-purple-800">
        Empowering businesses with reliable and scalable IT solutions that drive results.
      </CardDescription>
    </CardHeader>
  </Card>
  <Card className="bg-gradient-to-b from-white to-yellow-50 border border-yellow-200 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 rounded-lg">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-yellow-900">Our Vision</CardTitle>
      <CardDescription className="text-yellow-800">
        To be at the forefront of innovation, providing exceptional technology solutions.
      </CardDescription>
    </CardHeader>
  </Card>
  <Card className="bg-gradient-to-b from-white to-orange-50 border border-orange-200 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 rounded-lg">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-orange-900">Our Values</CardTitle>
      <CardDescription className="text-orange-800">
        Built on trust, innovation, and excellence, we aim to exceed client expectations.
      </CardDescription>
    </CardHeader>
  </Card>
</section>


      {/* Core Values Accordion */}
      <section className="relative py-16">
  {/* Background with Gradient and Subtle Pattern */}
  <div
    className="absolute inset-0 bg-gradient-to-b from-blue-100 via-white to-gray-50 -z-10"
    style={{
      backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 fill=%27%23f0f0f0%27%3E%3Ccircle cx=%2780%27 cy=%2780%27 r=%2710%27/%3E%3C/svg%3E')",
      opacity: "0.4",
    }}
  ></div>

  <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">
    Our Core Values
  </h2>
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 ring-1 ring-blue-200">
    <Accordion type="single" collapsible>
      <AccordionItem value="integrity">
        <AccordionTrigger className="text-2xl font-semibold text-blue-800 hover:text-blue-600 transition duration-300">
          Integrity
        </AccordionTrigger>
        <AccordionContent className="bg-blue-50 p-4 text-lg text-blue-700 rounded-md">
          We uphold the highest standards of honesty and transparency in every action.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="innovation">
        <AccordionTrigger className="text-2xl font-semibold text-blue-800 hover:text-blue-600 transition duration-300">
          Innovation
        </AccordionTrigger>
        <AccordionContent className="bg-blue-50 p-4 text-lg text-blue-700 rounded-md">
          Innovation drives our solutions, enabling us to meet evolving challenges effectively.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="collaboration">
        <AccordionTrigger className="text-2xl font-semibold text-blue-800 hover:text-blue-600 transition duration-300">
          Collaboration
        </AccordionTrigger>
        <AccordionContent className="bg-blue-50 p-4 text-lg text-blue-700 rounded-md">
          We work closely with clients and partners to achieve mutual success.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-12 bg-gradient-to-b from-indigo-50 to-indigo-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-900">Why Choose Us?</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-indigo-800">Proven Expertise</h3>
            <p className="text-gray-600 mt-2">
              Over a decade of experience delivering top-notch IT solutions.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-indigo-800">Customer Focus</h3>
            <p className="text-gray-600 mt-2">
              Tailored strategies designed to meet your unique business goals.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-indigo-800">Continuous Innovation</h3>
            <p className="text-gray-600 mt-2">
              Pioneering technology solutions that stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section>
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">Our Achievements</h2>
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <Badge className="text-lg p-6 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer transition duration-300">
      🌟 100+ Clients Served
    </Badge>
    <Badge className="text-lg p-6 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer transition duration-300">
      🚀 50+ Projects Completed
    </Badge>
    <Badge className="text-lg p-6 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer transition duration-300">
      🎉 10+ Years in Business
    </Badge>
  </div>
</section>


      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-white mb-6">Ready to Transform Your Business?</h2>
    <p className="text-lg text-white mb-8">
      Our expert team is ready to help you drive growth through innovative technology solutions. Let&apos;s start the conversation today!
    </p>
    <Button className="px-8 py-4 bg-white text-indigo-600 font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300">
      Get in Touch
    </Button>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-6 text-center">
        <p className="text-sm">© 2024 Halix Tech Solutions. All Rights Reserved.</p>
        <div className="mt-2">
          <Link href="/privacypage" className="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link href="/termspage" className="text-sm text-gray-400 hover:text-gray-300">Terms of Service</Link>
        </div>
      </footer>
    </main>
    </>
  );
}
