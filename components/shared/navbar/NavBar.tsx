"use client";
import React from "react";
import { usePathname } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { NAVITEMS } from "@/constants";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      {NAVITEMS.map((item) => {
        const isActive =
          (pathname.includes(item.link) && item.link.length > 1) ||
          pathname === item.link;

        return (
          <NavbarContent
            key={item.id}
            className="hidden gap-4 sm:flex"
            justify="center"
          >
            {isActive ? (
              <NavbarItem isActive>
                <Link color="foreground" href={item.link}>
                  {item.name}
                </Link>
              </NavbarItem>
            ) : (
              <NavbarItem>
                <Link color="foreground" href={item.link}>
                  {item.name}
                </Link>
              </NavbarItem>
            )}
          </NavbarContent>
        );
      })}

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
