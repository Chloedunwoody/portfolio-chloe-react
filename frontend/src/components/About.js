import React from 'react';

export default function About() {
  return (
    <section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Hi, I'm Chloe.
          <br className="hidden lg:inline-block" /> I'm the one you've been looking for.
        </h1>
        <p className="mb-8 leading-relaxed">
         Welcome to my portfolio. Here is where you can find out all of the cool and intresting things about me. But most importantly what im sure you have come to see... What i've been working On
          and how i can bring value to your team. I hope that this portfolio will help answer some of the questions that you might have. 
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-[#C5E7D4]  border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            See What I've Been Working On
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded grayscale "
          alt="starwars"
          href="https://pixeljeff.tumblr.com/image/615186226772869120"
          src="https://64.media.tumblr.com/3114eb49200ee4e6894bab5dd567116d/2b1b497d83a88681-87/s2048x3072/cab366dd257a4e653d7653b9f383444cf606b71d.gif"
        />
      </div>
    </div>
  </section>
  );
}
// }
//   <div id="about">
//       <h1>About Me</h1>
//       <div className="row mt--30">
//           <div>
//               <div className="tabs-area">
//                   <div className="container">
//                       <div className="row">
//                           <div className="col-lg-12">
//                               <div className="react-tabs" data-rttabs="true">
//                                   <ul className="tab-style--1" role="tablist">
//                                       <li className="react-tabs__tab" role="tab" id="react-tabs-0" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-1" data-rttab="true">Main skills</li>
//                                       <li className="react-tabs__tab" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3" data-rttab="true">Awards</li>
//                                       <li className="react-tabs__tab" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-5" data-rttab="true">Experience</li>
//                                       <li className="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-6" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-7" data-rttab="true" tabindex="0">Education &amp; Certification</li>
//                                       </ul>
//                                       <div className="react-tabs__tab-panel" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0"></div>
//                                       <div className="react-tabs__tab-panel" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2"></div>
//                                       <div className="react-tabs__tab-panel" role="tabpanel" id="react-tabs-5" aria-labelledby="react-tabs-4"></div>
//                                       <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-7" aria-labelledby="react-tabs-6">
//                                           <div className="single-tab-content">
//                                               <ul>
//                                                   <li><a href="/service">Champlain College SaintLambert - Social Sciences - Criminology</a> 2018</li>
//                                                   <li><a href="/service">Champlain College SaintLambert - Computer Science Technology</a> 2022</li>
//                                                   </ul>
//                                                   </div>
//                                                   </div>
//                                                   </div>
//                                                   </div>
//                                                   </div>
//                                                   </div>
//                                                   </div>
//                                                   </div>
//                                                   </div>
//   </div>
//   );
// }
