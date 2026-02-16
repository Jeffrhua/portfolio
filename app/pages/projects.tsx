import projects from "../data/projects.json";
import { useRef } from "react";
import { ProjectCard } from "../components/projectCard";

export default function Projects() {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <main className="relative min-h-screen p-6 overflow-x-hidden inset-0 bg-linear-to-t from-(--bottomgradient) to-(--topgradient)">

            {/* Main foreground stuff */}
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-white">Projects</h1>
            <hr className="my-6 w-1/3 border-t-2 border-white/50 rounded-full" />
            
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid grid-flow-row grid-cols-3 auto-rows-max gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
            </div>
        </main>
    );
}