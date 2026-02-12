"use client";
import { Navbar, NavbarCollapse, NavbarLink, NavbarBrand, NavbarToggle } from "flowbite-react";

type Tab = "home" | "experience" | "projects" | "schoolwork";
interface NavBarProps {
  selected: Tab;
  onSelect: (tab: Tab) => void;
}

export default function PageNavBar({ selected, onSelect }: NavBarProps) {
    return (
        <Navbar fluid>
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Jeffrey Hua</span>
            <NavbarCollapse>
            <NavbarLink as="button" onClick={() => onSelect("home")} active={selected === "home"} className="cursor-pointer">
                Home
            </NavbarLink>
            <NavbarLink as="button" onClick={() => onSelect("experience")} active={selected === "experience"} className="cursor-pointer">
                Experience
            </NavbarLink>
            <NavbarLink as="button" onClick={() => onSelect("projects")} active={selected === "projects"} className="cursor-pointer">
                Projects
            </NavbarLink>
            <NavbarLink as="button" onClick={() => onSelect("schoolwork")} active={selected === "schoolwork"} className="cursor-pointer">
                Schoolwork
            </NavbarLink>
            </NavbarCollapse>
      </Navbar>
    );
}