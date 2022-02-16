import React from 'react';
import { skills } from '../data/data';
import { ChipIcon,BadgeCheckIcon } from "@heroicons/react/solid";

export default function Projects() {
    return (
        <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Skills
          </h1>
            <ChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              When speaking with a developper we often ask what they already know and granted it can make the process easier for onboarding, but What if you took on someone
              who is new to the field and gave them a chance. I hope you take taht chance with me.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-[#C5E7D4] w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        );
}
