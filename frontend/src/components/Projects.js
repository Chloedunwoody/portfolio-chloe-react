import React, { useEffect, useState } from "react";
import axios from 'axios';
import { skills } from '../data/data';
import { ChipIcon,BadgeCheckIcon } from "@heroicons/react/solid";

function Projects() {
  // const [skills, setSkills] = useState([]);

  // useEffect(() =>{
  //   (async() =>{
  //     const result = await axios.get('/');
  //     setSkills(result.data.skills);
  //   })()
  // }, []);

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
              As a new developer we are often asked what we already know and what we have accomplished. Granted this may make the process of onboarding easier,
              but what if you took a chance on someone who is wiling to learn and has the drive to succeed. What possibilities could arise 
              though we may be new to the industry we have passion and drive to hit the ground running and I hope you take that chance with me.
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
export default Projects;
