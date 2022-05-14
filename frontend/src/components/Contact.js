import Avatar from '@mui/material/Avatar';
import React, { useState } from "react";
import axios from 'axios';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async event =>{
    event.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);
    const result = await axios.post('/contactMe', data);
    console.log(result);
  }

    return (
        <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://maps.google.com/maps?q=brossard,QC&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
          <div className="bg-gray-700 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-200">
                Brossard, QC
                J4Z 1C2
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-[#C5E7D4] leading-relaxed text-xs">
                chloe.dunwoody@hotmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-200">514-458-9882</p>
            </div>
          </div>
        </div>

{/* netlify */}
        <form
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          onSubmit={submit}>
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
           Contact Me
          </h2>
          <div>
          <Avatar alt="Chloe Dunwoody" src=".\chloe.png" />
          <p className="leading-relaxed mb-5">
            If you have any further questions or would just like to chat about some of my projects, Don't hesitate.
          </p>
          </div>
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              onChange={e=>setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 rounded border border-gray-700 focus:border-[#C5E7D4] focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
            onChange={e=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 rounded border border-gray-700 focus:border-[#C5E7D4] focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
            
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              onChange={e=>setMessage(e.target.value)}
              id="message"
              name="message"
              className="w-full bg-gray-100 rounded border border-gray-700 focus:border-[#C5E7D4] focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#C5E7D4] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
        );
}
export default Contact;
