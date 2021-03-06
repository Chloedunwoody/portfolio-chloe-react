import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-scroll";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div class="flex space-x-2">
  <div class="relative w-20 h-20">
    <img class="rounded-full border border-gray-100 shadow-sm" src="me.jpg" alt="user image" />
</div>
</div>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="ml-3 text-xl title-font font-medium text-[#564D52] mb-4 md:mb-0">Chloe Dunwoody</Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-[#564D52]">
<Link to="skills" spy={true} smooth={true} offset={50} duration={500} className="mr-5 hover:text-emerald-200">Skills</Link>
<Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="mr-5 hover:text-emerald-200">Projects</Link>
          <Link to="journey" spy={true} smooth={true} offset={50} duration={500} className="mr-5 hover:text-emerald-200">My Journey</Link>
          <Link to="hobbies" spy={true} smooth={true} offset={50} duration={500} className="mr-5 hover:text-emerald-200">Hobbies</Link>
        </nav>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}  className="inline-flex items-center bg-[#D4EDDF] border-0 py-1 px-3 focus:outline-none hover:bg-[#C5E7D4] rounded text-base mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
      </div>
    </header>
  );
}