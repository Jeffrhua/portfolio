import { Timeline, TimelineItem, TimelinePoint, TimelineContent, TimelineTime, TimelineTitle, TimelineBody } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import experience from "../data/experience.json";

export default function Experience() {
    return (
        <main className="relative h-screen overflow-hidden p-6">
            {/* Main foreground stuff */}
            <div className={"fade-style"}>
                <div className="relative z-10 flex h-full flex-col">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-white">Experience</h1>
                    <hr className="my-6 w-1/3 border-t-2 border-white/50 rounded-full" />

                    {/* Timeline Stuff */}
                    <div className="flex flex-col items-center justify-start">
                        <Timeline>
                        {experience.map((job, index) => (
                            <TimelineItem key={index}>
                            <TimelinePoint />
                            <TimelineContent>
                            <TimelineTime>{job.Start} - {job.End}</TimelineTime>
                                <TimelineTitle>
                                    <a href={job.CompanySite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                        {job.PosTitle} • {job.Company} <FaExternalLinkAlt className="h-4 w-4" />
                                    </a>
                                </TimelineTitle>
                            {job.JobDesc.map((desc, i) => (
                                <TimelineBody key={i}>
                                    • {desc}
                                </TimelineBody>
                            ))}
                            </TimelineContent>
                            </TimelineItem>
                        ))}
                        </Timeline>
                    </div>
                </div>
            </div>
        </main>
    );
}