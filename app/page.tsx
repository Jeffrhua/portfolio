"use client";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import PageNavBar from "./components/pageNavbar";
import { Tab } from "./types/types";

export default function Main() {
  const [selected, setSelected] = useState<Tab>("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as Tab;
      setSelected(hash || "home");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSelect = (tab: Tab) => {
    window.location.hash = tab;
  };

  return (
    <div className="relative h-screen overflow-x-hidden">
      <PageNavBar selected={selected} onSelect={handleSelect} />

      <div className="text-white">
        {selected === "home" && <Home />}
        {selected === "experience" && <Experience />}
        {selected === "projects" && <Projects />}
      </div>
    </div>
  );
}
