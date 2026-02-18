"use client";
import { Navbar, NavbarCollapse, NavbarLink, NavbarBrand, NavbarToggle } from "flowbite-react";
import { Tab } from "../types/types";

interface NavBarProps {
  selected: Tab;
  onSelect: (tab: Tab) => void;
}

export default function PageNavBar({ selected, onSelect }: NavBarProps) {
    return (
        <Navbar fluid>
            <NavbarBrand as="div">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Jeffrey Hua</span>
            </NavbarBrand>
            <NavbarToggle className="md:hidden"/>
            <NavbarCollapse className="w-full pb-4 md:px-0 md:pb-0">
                <NavbarLink as="button" onClick={() => onSelect("home")} active={selected === "home"} className="cursor-pointer">
                    Home
                </NavbarLink>
                <NavbarLink as="button" onClick={() => onSelect("experience")} active={selected === "experience"} className="cursor-pointer">
                    Experience
                </NavbarLink>
                <NavbarLink as="button" onClick={() => onSelect("projects")} active={selected === "projects"} className="cursor-pointer">
                    Projects
                </NavbarLink>
            </NavbarCollapse>
      </Navbar>
    );
}