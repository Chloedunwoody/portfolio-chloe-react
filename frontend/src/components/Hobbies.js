import React, { useEffect, useState } from "react";
import axios from 'axios';
import { SunIcon } from "@heroicons/react/solid";

const hobbies = [
    {
      id: 1,
      name: 'Rugby',
      href: 'http://montrealwanderers.ca/womens-rugby/',
      desc: "I have played rugby for 6 years, it is a sport that promotes respect and inclusively, I believe that this sport has shaped me into the person I have become today.",      
      imageSrc: 'wanderers.jpg',
      imageAlt: 'Rugby',
    },
    {
      id: 2,
      name: 'Ethical Hacking',
      href: 'https://www.hackthebox.com',
      desc: "I have always been fascinated body ethical hacking, decoding, encryption, etc. and notably Cicada 3301, if you also have an interest in this topic, I highly recommend watching the YouTube series.",
      imageSrc: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/hackerinside/products/670982/shirt-1531953737-1d976e4024450621d0b5580735f957e3.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dXX0=',
      imageAlt: 'Cicada 3301',
    },
    {
      id: 3,
      name: 'Hiking',
      href: 'https://www.laurentides.com/en/members/parc-regional-val-david-val-morin-hiking',
      desc: "Hiking has become a new passion of mine thanks to my Czech German Shepherd, Nova, who requires at a minimum 2 hours of exercise per day, she knows over 20 tricks including (closing the door, whispering and Buddha) I have worked very hard to ensure we are great ambassadors for her bread as many people often misunderstand the German Shepherd and unfortunately some people do not understand the importance of obedience on these kinds of working breads.",      
      imageSrc: 'hiking.gif',
      imageAlt: 'German Shepherd',
    },
    {
      id: 4,
      name: 'Camping',
      href: 'https://poissonblanc.ca/en/',
      desc: "Finally, Camping, who doesn't love the smell of a campfire... I would love to one day explore the world by means of camping, there is truly something amazing about bringing only the bare necessities and sitting back and appreciating nature.",
      imageSrc: 'https://canada-usa.huttopia.com/uploads/sites/2/2021/12/DSC3339.jpg-1600px.jpg',
      imageAlt: 'Camping',
    },
    // More products...
  ]
  

function Hobbies() {
  // const [hobbies, setHobbies] = useState([]);

  // useEffect(() =>{
  //   (async() =>{
  //     const result = await axios.get('/');
  //     setHobbies(result.data.hobbies);
  //   })()
  // }, []);
  
    return (
        <section id="hobbies" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <SunIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
             Hobbies
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            If you would like to get to know the person behind the code and projects. Here is where you can find some of that information.</p>
        </div>
        <div className="flex flex-wrap -m-4">
        {/* <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {hobbies.map((hobbie) => (
            <a key={hobbie.id} href={hobbie .href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={hobbie.imageSrc}
                  alt={hobbie.imageAlt}
                  className="w-full h-full object-center object-cover grayscale group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{hobbies.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{hobbies.name}</p>
            </a>
          ))}
        </div> */}
        <h2 className="sr-only">Hobbies</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {hobbies.map((hobby) => (
            <a key={hobby.id} href={hobby.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={hobby.imageSrc}
                  alt={hobby.imageAlt}
                  className="w-full h-full object-center object-cover grayscale group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-gray-400 font-bold">{hobby.name}</h3>
              <p className="leading-relaxed text-base">{hobby.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    </section>
        );
}
export default Hobbies;