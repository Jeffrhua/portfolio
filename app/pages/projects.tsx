import projects from "../data/projects.json";

export default function Projects() {
    return (
        <main className="relative h-screen overflow-hidden p-6">
            {/* Background */}
            <div className="absolute inset-0 h-full bg-linear-to-t from-(--bottomgradient) to-(--topgradient)" aria-hidden="true"></div>

            {/* Main foreground stuff */}
            <div className="relative z-10 flex h-full flex-col">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-white">Projects</h1>
                <hr className="my-6 w-1/3 border-t-2 border-white/50 rounded-full" />

                <div className="grid grid-flow-row grid-cols-3 auto-rows-max">

                </div>
            </div>

        </main>
    );
}