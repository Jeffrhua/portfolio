import { Timeline, TimelineItem, TimelinePoint, TimelineContent, TimelineTime, TimelineTitle, TimelineBody } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
    return (
        <main className="relative h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 h-full bg-linear-to-t from-(--bottomgradient) to-(--topgradient)" aria-hidden="true"></div>

            {/* Main foreground stuff */}
            <div className="relative z-10 flex h-full flex-col">

                {/* Timeline Stuff */}
                <div className="flex flex-col items-center justify-start">
                    <Timeline>
                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                        <TimelineTime>Oct 2025 - Dec 2025</TimelineTime>
                        <a href="https://www.navalsteminterns.us/nreip/" target="_blank" rel="noopener noreferrer">
                            <TimelineTitle className="flex items-center gap-2">
                                NREIP Research Intern • NAVSEA
                                <FaExternalLinkAlt className="h-4 w-4" />
                            </TimelineTitle>
                        </a>
                        <TimelineBody>
                            - Helped with the design and planning of a secure document management system for tracking 
                            Navy approval chains and workflow
                        </TimelineBody>
                        <TimelineBody>
                            - Utilized SharePoint, Modeling tools, and other Microsoft tools
                        </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                        <TimelineTime>Jul 2025 - Sep 2025</TimelineTime>
                        <a href="https://freightgate.net/" target="_blank" rel="noopener noreferrer">
                            <TimelineTitle className="flex items-center gap-2">
                                Programming Intern • FreightGate
                                <FaExternalLinkAlt className="h-4 w-4" />
                            </TimelineTitle>
                        </a>
                        <TimelineBody>
                            - Integrated a Stripe payment processing into a full-stack web application, developing both
                            frontend and backend features and storing transactional data in MySQL
                        </TimelineBody>
                        <TimelineBody>
                            - Utilized APIs to implement application features and designed database schemas
                        </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </main>
    );
}