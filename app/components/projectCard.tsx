import { useRef } from "react";
import { Card } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import parse, { domToReact } from "html-react-parser";
import { Project } from "../types/types";

export function ProjectCard({ project }: { project: Project }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <Card className="max-w-sm" 
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
            videoRef.current?.pause();
            if (videoRef.current) {
            videoRef.current.currentTime = 0;
            }
        }}
        >
        <video ref={videoRef} className="w-full rounded-base" muted controls>
            <source src="/Test.mkv" type="video/x-matroska"/>
            Your browser does not support the video tag.
        </video>
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