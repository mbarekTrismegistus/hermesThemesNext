"use client"

import React, { useState } from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { useTheme } from "next-themes"
import 'bootstrap/dist/css/bootstrap.css'

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className='light' onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarBrand className='grow-0 me-5'>
        <p className="font-bold text-2xl">LOGO</p>
      </NavbarBrand>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className='mx-3' color="foreground" href="#">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className='mx-3' href="#" aria-current="page">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className='mx-3' color="foreground" href="#">
              Portfolio
            </Link>
          </NavbarItem>
        </NavbarContent>
      <NavbarMenu justify="start">
        <NavbarMenuItem>
          <Link className='mx-3' color="foreground" href="#">
            About Us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='mx-3' href="#">
            Services
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='mx-3' color="foreground" href="#">
            Portfolio
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarContent className="gap-4" justify="end">
        <NavbarContent justify='end'>
          <Button color='primary' variant='shadow'>
            Contact Me
          </Button>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  )
}
