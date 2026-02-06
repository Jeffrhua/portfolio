import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <Navbar fluid>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jeffrey Hua</span>
      <NavbarCollapse>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
        <NavbarLink href="#">Schoolwork</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
