import { Button } from "./ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default function Services(){
    return(
    <>
        <div className="text-center my-10 px-4 sm:px-6">
  <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    Our Services
  </h2>
  <p className="text-lg sm:text-xl text-muted-foreground">
    Empowering businesses with cutting-edge IT solutions tailored to your needs.
  </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-8 py-10">
  {/* Service 1 */}
  <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-600 text-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
    <h3 className="text-xl font-bold mb-4">Cloud Computing</h3>
    <p className="text-sm sm:text-base text-opacity-80 mb-4">
      Scalable and secure cloud solutions to streamline your business operations.
    </p>
    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2">
      Learn More
    </Button>
  </div>

  {/* Service 2 */}
  <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-600 text-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
    <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
    <p className="text-sm sm:text-base text-opacity-80 mb-4">
      Protect your organization with robust and proactive security measures.
    </p>
    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2">
      Learn More
    </Button>
  </div>

  {/* Service 3 */}
  <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-600 text-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
    <h3 className="text-xl font-bold mb-4">IT Infrastructure</h3>
    <p className="text-sm sm:text-base text-opacity-80 mb-4">
      Build and optimize your IT systems for performance and scalability.
    </p>
    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2">
      Learn More
    </Button>
  </div>
</div>

<div className="my-16">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    FAQ
  </h2>
  <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto px-4 sm:px-6 bg-white p-8 rounded-lg shadow-lg">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-lg font-semibold mb-2">What services do you offer?</AccordionTrigger>
      <AccordionContent>
        We specialize in cloud computing, cybersecurity, IT infrastructure design, and software development.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger className="text-lg font-semibold mb-2">How secure are your solutions?</AccordionTrigger>
      <AccordionContent>
        Our solutions adhere to the highest security standards, ensuring complete protection for your data and systems.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger className="text-lg font-semibold mb-2">Do you provide ongoing support?</AccordionTrigger>
      <AccordionContent>
        Yes, we offer 24/7 support to ensure your business runs smoothly at all times.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>

    </>    
    )
}