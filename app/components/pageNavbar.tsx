"use client";
import { Navbar, NavbarCollapse, NavbarLink, NavbarBrand, NavbarToggle } from "flowbite-react";
import { Tab } from "../types/types";

interface NavBarProps {
  selected: Tab;
  onSelect: (tab: Tab) => void;
}

export default function PageNavBar({ selected, onSelect }: NavBarProps) {
    return (
        <Navbar fluid className="sticky top-0 z-50 w-full">
            <NavbarBrand as="div">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Jeffrey Hua</span>
            </NavbarBrand>
            <NavbarToggle className="md:hidden"/>
            <NavbarCollapse>
                <NavbarLink as="button" onClick={() => onSelect("home")} active={selected === "home"} className="cursor-pointer w-full">
                    Home
                </NavbarLink>
                <NavbarLink as="button" onClick={() => onSelect("experience")} active={selected === "experience"} className="cursor-pointer w-full">
                    Experience
                </NavbarLink>
                <NavbarLink as="button" onClick={() => onSelect("projects")} active={selected === "projects"} className="cursor-pointer w-full">
                    Projects
                </NavbarLink>
            </NavbarCollapse>
      </Navbar>
    );
}