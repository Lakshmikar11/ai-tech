export default function About(){
    return(
        <div className="my-16 px-4 sm:px-6">
  <div className="text-center mb-10">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      About Us
    </h2>
    <p className="text-lg sm:text-xl text-muted-foreground">
      Empowering businesses with innovative IT solutions and exceptional service.
    </p>
  </div>

  <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-600 text-white shadow-lg rounded-lg max-w-4xl mx-auto p-8 sm:p-12">
    <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
      Who We Are
    </h3>
    <p className="text-lg sm:text-xl leading-relaxed">
      We are a forward-thinking IT consulting company committed to driving growth and efficiency for businesses worldwide. 
      With a focus on innovation, we offer a comprehensive range of services, including 
      <span className="font-bold text-green-400"> cloud computing</span>, 
      <span className="font-bold text-green-400"> IT infrastructure design</span>, 
      and <span className="font-bold text-green-400"> cybersecurity solutions</span>. 
      Our mission is to empower organizations with the tools and expertise needed to succeed in a digital world.
    </p>
  </div>
</div>


    )
}