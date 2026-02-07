import { Button } from "flowbite-react";
import { FaAddressBook, FaGithub, FaLinkedin } from "react-icons/fa";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-148 w-312 bg-(--cardcolor) shadow-xl rounded-lg p-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-6">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl text-white">Who am I?</h1>
              <p className="mb-4 text-body font-bold md:text-xl lg:text-xl text-(--cardtext)">
                I am currently a 4th year CS student at California State University, Long Beach with a distinct interest in
                building applications and software for people to enjoy and use. I enjoy music and game dev in my free time when
                I am not spending time with friends :{">"}
              </p>
            </div>

            <div className="grid justify-center">
              <Button size="md" color="dark" className="w-96">
                <FaAddressBook className="mr-2 h-5 w-5" /> Resume
              </Button>

              <a href="https://github.com/Jeffrhua" target="_blank" rel="noopener noreferrer">
                <Button size="md" color="dark" className="w-96 cursor-pointer">
                  <FaGithub className="mr-2 h-5 w-5" /> Github
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/jeffrey-hua-862691316/" target="_blank" rel="noopener noreferrer">
                <Button size="md" color="dark" className="w-96 cursor-pointer" >
                  <FaLinkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Button>
              </a>

            </div>
          </div>
        </div>
      </div> 
    </main>
  );
}
