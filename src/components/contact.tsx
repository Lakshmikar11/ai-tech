import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function Contact(){
    return(
        <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-600 text-white py-16 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      Get in Touch
    </h2>
    <p className="text-lg sm:text-xl text-opacity-80 mb-8">
      Have questions or need assistance? We’re here to help. Let’s connect!
    </p>

    <form className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <Label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
        Name
      </Label>
      <Input
        id="name"
        type="text"
        placeholder="Your Full Name"
        className="w-full bg-gray-100 text-gray-800 placeholder-gray-400 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2"
      />
    </div>

    <div>
      <Label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="yourname@example.com"
        className="w-full bg-gray-100 text-gray-800 placeholder-gray-400 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2"
      />
    </div>
  </div>

  <div>
    <Label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
      Message
    </Label>
    <Textarea
      id="message"
      placeholder="Type your message here..."
      rows={5}
      className="w-full bg-gray-100 text-gray-800 placeholder-gray-400 rounded-lg shadow-sm px-4 py-2 focus:outline-none focus:ring-2"
    />
  </div>

  <div className="text-center">
    <Button
      type="submit"
      className="w-full sm:w-auto bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white shadow-lg transform transition duration-300 hover:scale-105"
    >
      Send Message
    </Button>
  </div>
</form>


    <div className="mt-8 text-lg space-y-4">
      <p className="mb-4">
        You can also reach us at <span className="font-bold text-green-400">lakshmikar53@gmail.com</span>
      </p>
      <p className="mb-4">
        Or call us at <span className="font-bold text-green-400">+91 7989010995</span>
      </p>
    </div>
  </div>
</div>

    )
}