"use client";

import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <Navbar fluid className="mb-8">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Jeffrey Hua</span>
            <NavbarCollapse>
            <NavbarLink href="/" active={pathname === "/"} >Home</NavbarLink>
            <NavbarLink href="/experience" active={pathname === "/experience"}>Experience</NavbarLink>
            <NavbarLink href="/projects" active={pathname === "/projects"}>Projects</NavbarLink>
            <NavbarLink href="/schoolwork" active={pathname === "/schoolwork"}>Schoolwork</NavbarLink>
            </NavbarCollapse>
      </Navbar>
    );
}