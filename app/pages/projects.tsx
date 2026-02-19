import projects from "../data/projects.json";
import { ProjectCard } from "../components/projectCard";

export default function Projects() {
    return (
        <main className="relative min-h-screen p-6 overflow-x-hidden">
            {/* Main foreground stuff */}
            <div className={"fade-style"}>
                <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-white">Projects</h1>
                <hr className="my-6 w-1/3 border-t-2 border-white/50 rounded-full" />
                
                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}