import { useRef, useState } from "react";
import { Card } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import parse, { domToReact } from "html-react-parser";
import { Project } from "../types/types";

export function ProjectCard({ project }: { project: Project }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleEnter = () => {
        const video = videoRef.current;
        if (!video) return;

        video.play();
        setIsPlaying(true);
    };

    const handleLeave = () => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        video.currentTime = 0;
        setIsPlaying(false);
    };

    return (
        <Card className="max-w-sm" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <div className="relative w-full overflow-hidden rounded-base aspect-video">
            <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" controls muted playsInline preload="metadata">
                <source src="/Test.mkv" type="video/x-matroska"/>
                Your browser does not support the video tag.
            </video>
            <img src={project.Thumbnail}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isPlaying ? "opacity-0" : "opacity-100"}`}
            />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.Link ? (
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                    {project.Title} {" "} <FaExternalLinkAlt className="inline h-4 w-4" />
                </a>
            ) : (
                project.Title
            )}
        </h5>
        {project.Description.map((desc, i) => (
        <p className="font-normal text-gray-700 dark:text-gray-400" key={i}>
            •{" "}
            {parse(desc, {
            replace: (domNode: any) => {
                if (domNode.name === "a"){
                    return(
                    <a
                        href={domNode.attribs.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-800"
                    >
                        {domToReact(domNode.children)}
                    </a>
                    )
                }
            }
            })}
        </p>
        ))}
        </Card>
    )
}