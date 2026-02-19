"use client";
import { Button } from "flowbite-react";
import { FaAddressBook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen p-6 overflow-x-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/portfolio/oneshot-background.jpg')] bg-cover bg-center bg-no-repeat" aria-hidden="true"/>

      {/* Main foreground stuff */}
      <div className={"fade-style"}>
        <div className="relative z-10 flex flex-col">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-white">Who am I?</h1>
          <hr className="my-6 w-1/3 border-t-2 border-white/50 rounded-full" />

          {/* Card component */}
          <div className="flex flex-1 items-start justify-center sm:items-center">
            <div className="h-148 w-312 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Column */}
                <div className="space-y-6">
                  <p className="mb-4 text-body font-bold md:text-xl lg:text-xl text-(--cardtext)">
                    I am currently a 4th year CS student at California State University, Long Beach with a distinct interest in
                    building applications and software for people to enjoy and use. I enjoy music and game dev in my free time when
                    I am not spending time with friends :{">"}
                  </p>
                </div>
                
                {/* Right column */}
                <div className="grid justify-center gap-4">
                  <Button as="a" href="/portfolio/Resume.pdf" target="_blank" rel="noopener noreferrer" size="md" color="dark" className="w-96 cursor-pointer">
                      <FaAddressBook className="mr-2 h-5 w-5" /> Resume
                  </Button>
                  <Button as="a" href="https://github.com/Jeffrhua" target="_blank" rel="noopener noreferrer" size="md" color="dark" className="w-96 cursor-pointer">
                      <FaGithub className="mr-2 h-5 w-5" /> Github 
                  </Button>
                  <Button as="a" href="https://www.linkedin.com/in/jeffrey-hua-862691316/" target="_blank" rel="noopener noreferrer" size="md" color="dark" className="w-96 cursor-pointer" >
                      <FaLinkedin className="mr-2 h-5 w-5" /> LinkedIn
                  </Button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
