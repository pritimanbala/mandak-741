"use client"

import { useEffect } from "react"
import Image from "next/image"
import { CloudIcon, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LiaLinkedinIn } from "react-icons/lia";
import {motion} from "framer-motion"

export default function Home() {
  // Handle smooth scrolling when clicking on navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for the fixed header
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  // Member data
const members = [
  {
    id: 1,
    name: "Raagul Khanna K",
    role: "Video Editor by passion",
    link : "https://www.linkedin.com/in/raagul-khanna-k-bb98b5205/",
    image: "/raagul_casual.png",
    about: "Raagul (ethinically Tamil) is a passionate video editor who sees every frame as a chance to tell a deeper story. With a keen eye for detail and rhythm, he brings emotion and energy into every project. Whether it's a short reel or a long-form documentary, Raagul thrives on shaping raw footage into powerful visual experiences."
  },
  {
    id: 2,
    name: "Om Dhomne",
    role: "Lazy to handle 8AM classes",
    image: "/om_casual.jpg",
    link: "https://www.linkedin.com/in/omdhomne",
    about: "Om (ethinically Marathi) might call himself lazy, but behind that chill demeanor is a quietly brilliant thinker who prefers to work smarter, not harder. Known for his quirky takes and unconventional approach, he has a knack for untangling complex problems when no one else can, even if he takes his sweet time doing it."
  },
  {
    id: 3,
    name: "Pritiman Bala",
    link : "https://www.linkedin.com/in/pritiman-bala-2352a5334/",
    role: "Developer by Code, Singer by Heart",
    image: "/pritiman_casual.jpg",
    about: "Pritiman (ethinically Bengali) owns his chaos and turns it into code. He’s the kind of developer who might not follow the textbook, but he gets results with flair and speed. His sharp instincts, bold experimentation, and love for breaking and fixing things make him the team’s secret weapon in any technical challenge."
  }
]

  // Stream data

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-black to-red-900 scroll-smooth">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/90 backdrop-blur-sm">
        <div className="flex items-center">
          <CloudIcon className="w-10 h-10 text-red-600" />
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-white hover:text-red-500 transition-colors text-lg">
            Home
          </a>
          <a href="#about" className="text-white hover:text-red-500 transition-colors text-lg">
            About Us
          </a>
          <a href="#members" className="text-white hover:text-red-500 transition-colors text-lg">
            Members
          </a>
        </div>
        <div className="md:hidden"></div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center min-h-screen justify-between px-6 py-20 md:py-32 md:px-20 gap-y-10 md:gap-x-12 bg-[linear-gradient(225deg,#7f1d1d_0%,#000000_100%)]"
      >
        {/* Text Section */}
        <div className="space-y-6 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white">Room 741</h1>
          <h2 className="text-3xl md:text-4xl font-medium text-red-600">Mandakini, IIT Madras</h2>
          <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
            The most diverse and business minded room in whole Mandakini Hostel.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <Button
              variant="outline"
              className="border-2 border-red-600 text-white bg-red-600 hover:bg-red-900/30 hover:text-white rounded-md px-8 py-2"
            >
              Explore
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative sm:w-[80%] w-[70%] mx-auto h-64 sm:h-80 md:h-[400px]">
            <Image
              src="/raagul_blazer.png"
              alt="Room Members"
              fill
              className="object-contain scale-150"
            />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section
  id="about"
  className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-20 md:py-32 md:px-20 gap-8 border-t bg-[linear-gradient(225deg,#7f1d1d_0%,#000000_100%)] border-red-900/30"
>
  <div className="md:w-1/2 w-full mb-10 md:mb-0">
  <motion.div className="relative w-full h-64 sm:h-80 md:h-[400px]">
    <Image
      src="/group.jpg"
      alt="Room Members"
      fill
      className="object-contain rounded-lg"
      style={{ objectFit: "cover", objectPosition: "center" }} 
    />
  </motion.div>
</div>

  <div className="space-y-6 md:w-1/2 text-center md:text-left mx-auto md:mx-0 lg:ml-6">
  <h1 className="text-4xl md:text-6xl font-bold text-white">
    About <span className="text-red-600">Us</span>
  </h1>
  <h2 className="text-3xl md:text-4xl font-medium text-white mt-6">
    THE ROOM <span className="text-red-600">741</span>
  </h2>
  <h3 className="text-xl text-red-500">The Dump room of Ideas</h3>
  <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
    Founded with a vision to create a unique space for like-minded individuals, our room has evolved into a
    thriving community...
  </p>
</div>

</section>


      {/* Members Section */}
      

        
          {members.map((member) => (
          <section id="members" className="px-6 py-20 md:py-32 h-[110vh] min-h-fit md:px-20 border-t border-red-900/30 bg-[linear-gradient(225deg,#7f1d1d_0%,#000000_100%)]"  key={member.id}>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          Our <span className="text-red-600">Members</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around space-x-0 md:space-x-6 space-y-6 md:space-y-0 h-[100%] ">
            <Card className="bg-black/40 border-red-800 overflow-hidden w-full sm:w-[80%] md:w-[60%] lg:w-[40%] min-h-fit">
              <CardContent className="p-0">
                <div className="relative w-full h-64 sm:h-80 md:h-96">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_30%] min-w-[100px]"
                  />
                </div>
                <div className="p-2 text-center bg-transparent">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-red-500">{member.role}</p>
                </div>
              </CardContent>
            </Card>

            <div className="about">
              <h2 className="text-3xl md:text-4xl font-medium text-white mt-6 mb-4 text-center"><span className="text-red-600">About </span>{member.name}</h2>
              <p className="text-gray-300 max-w-lg text-center">
                {member.about}
                <br />
                <a href={member.link} target="_blank" rel="noopener noreferrer">
              <motion.button className="bg-transparent hover:bg-red-800 text-white border-2 border-red-600 rounded-md px-8 py-2 mt-4 flex justify-center items-center mx-auto" animate={{ scale: 1.1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                <LiaLinkedinIn className="mx-1" />LinkedIn
              </motion.button>
                </a>
              </p>
            </div>
          </div>
      </section>
          ))}

      {/* Stream Section */}
      {/* <section id="stream" className="px-6 py-20 md:py-32 md:px-20 border-t border-red-900/30 bg-[linear-gradient(225deg,#7f1d1d_0%,#000000_100%)] ">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          Our <span className="text-red-600">Streams</span>
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 border-2 border-red-800 rounded-xl p-8 mb-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] bg-black/60 rounded-lg flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-red-600" />
                <p className="absolute bottom-4 left-4 text-white font-bold">Live Stream Coming Soon</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Upcoming Streams</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {streams.map((stream) => (
              <Card key={stream.id} className="bg-black/40 border-red-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">{stream.title}</h3>
                  <div className="flex justify-between mt-4">
                    <p className="text-gray-300">{stream.date}</p>
                    <p className="text-red-500">{stream.time}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-black/80 text-white py-8 px-6 border-t border-red-900/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <CloudIcon className="w-8 h-8 text-red-600 mr-2" />
            <span className="text-xl font-bold">ROOM 741</span>
          </div>
          {/* <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-red-500 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">
              About
            </a>
            <a href="#members" className="text-gray-300 hover:text-red-500 transition-colors">
              Members
            </a>
            <a href="#stream" className="text-gray-300 hover:text-red-500 transition-colors">
              Stream
            </a>
          </div> */}
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} 
             Website made by Pritiman Bala. Dont try to copy it.
          </div>
        </div>
      </footer>
    </main>
  )
}
