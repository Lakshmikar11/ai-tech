import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  export default function Herosection(){
    return(
<div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-600 text-white py-20 px-6">
  <Card className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg text-center">
    <CardHeader className="flex items-center mx-auto flex-col sm:flex-row justify-center p-8">
      <div className="space-y-4 sm:space-y-0 sm:text-left sm:mr-8">
        <CardTitle className="text-4xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Innovative IT Solutions for Modern Businesses
        </CardTitle>
        <CardDescription className="text-lg sm:text-xl text-muted-foreground">
          Expertise in Cloud Computing, Cybersecurity, and Data Analytics.
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent className="flex space-x-4 justify-center py-8">
      <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
        Learn More
      </Button>
      <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
        Schedule a Call
      </Button>
    </CardContent>
  </Card>
</div>

    )
}