import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-[#564D52] mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
           Chloe Dunwoody
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-[#564D52]">
          <a href="#projects" className="mr-5 hover:text-emerald-200">
            Projects
          </a>
          <a href="#journey" className="mr-5 hover:text-emerald-200">
            My Journey
          </a>
          <a href="#hobbies" className="mr-5 hover:text-emerald-200">
            Hobbies
          </a>
          <a href="#skills" className="mr-5 hover:text-emerald-200">
            Skills
          </a>
        </nav>
        
        <a
          href="#contact"
          className="inline-flex items-center bg-[#D4EDDF] border-0 py-1 px-3 focus:outline-none hover:bg-[#C5E7D4] rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}