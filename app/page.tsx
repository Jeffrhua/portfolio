"use client";
import { useState } from "react";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Schoolwork from "./pages/schoolwork";
import PageNavBar from "./components/pageNavbar";
import { Tab } from "./types/types";

export default function Main() {
  const [selected, setSelected] = useState<Tab>("home");

  // Disable scroll state on certain pgs
  const disableScroll = selected === "home";

  return (
    <div className={`relative h-screen ${disableScroll ? "overflow-hidden" : "overflow-x-hidden"}`}>
      <PageNavBar selected={selected} onSelect={setSelected} />

      <div className="text-white">
        {selected === "home" && <Home />}
        {selected === "experience" && <Experience />}
        {selected === "projects" && <Projects />}
        {selected === "schoolwork" && <Schoolwork />}
      </div>
    </div>
  );
}
