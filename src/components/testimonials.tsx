import {
    Carousel,
    CarouselItem,
  } from "@/components/ui/carousel"
 export default function Testimonials(){
    return(
        <div className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-opacity-80 mb-8">
            See how we’ve helped businesses achieve their IT goals.
          </p>
      
          {/* Carousel */}
          <div className="max-w-4xl mx-auto">
            <Carousel className="space-y-6">
              <CarouselItem>
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <p className="text-lg italic mb-4">
                    “Their cloud computing solutions revolutionized our operations. Reliable and professional service!”
                  </p>
                  <p className="font-bold text-gray-900">- John Doe, CTO at TechCorp</p>
                </div>
              </CarouselItem>
      
              <CarouselItem>
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <p className="text-lg italic mb-4">
                    “Their cybersecurity solutions gave us peace of mind. Highly recommended!”
                  </p>
                  <p className="font-bold text-gray-900">- Jane Smith, CEO at SecureNet</p>
                </div>
              </CarouselItem>
      
              <CarouselItem>
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <p className="text-lg italic mb-4">
                    “Amazing IT infrastructure services. Our business is now more efficient and scalable.”
                  </p>
                  <p className="font-bold text-gray-900">- Robert Brown, Manager at InfraTech</p>
                </div>
              </CarouselItem>
            </Carousel>
          </div>
      
          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-white text-center text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-3xl font-extrabold text-green-500">500+</h3>
              <p className="text-lg text-gray-600">Projects Delivered</p>
            </div>
      
            <div className="bg-white text-center text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-3xl font-extrabold text-green-500">200+</h3>
              <p className="text-lg text-gray-600">Happy Clients</p>
            </div>
      
            <div className="bg-white text-center text-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-3xl font-extrabold text-green-500">10+</h3>
              <p className="text-lg text-gray-600">Years in Business</p>
            </div>
          </div>
        </div>
      </div>
      

    )
 }  