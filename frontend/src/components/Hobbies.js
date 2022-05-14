import React, { useEffect, useState } from "react";
import axios from 'axios';
import { SunIcon } from "@heroicons/react/solid";

const products = [
    {
      id: 1,
      name: 'Rugby',
      href: 'http://montrealwanderers.ca/womens-rugby/',
      price: '',
      imageSrc: 'https://scontent.fymq2-1.fna.fbcdn.net/v/t1.6435-9/70091166_10157464942582770_7567464842039132160_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=730e14&_nc_ohc=6OGNl8dbJWgAX8Xg9zL&_nc_ht=scontent.fymq2-1.fna&oh=00_AT_RdZhsY752Vu0L_pLMhyND51XGSOQlVSCGl3szNvaAhg&oe=62991468',
      imageAlt: 'Rugby',
    },
    {
      id: 2,
      name: 'Ethical Hacking',
      href: 'https://www.hackthebox.com',
      price: '',
      imageSrc: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/hackerinside/products/670982/shirt-1531953737-1d976e4024450621d0b5580735f957e3.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dXX0=',
      imageAlt: 'Cicada 3301',
    },
    {
      id: 3,
      name: 'Hiking',
      href: 'https://www.laurentides.com/en/members/parc-regional-val-david-val-morin-hiking',
      price: '',
      imageSrc: 'https://scontent.fymq2-1.fna.fbcdn.net/v/t1.6435-9/141708002_5725952397430612_1846778847447942561_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=0debeb&_nc_ohc=F5N3JHS5LNMAX-Kjgq1&_nc_ht=scontent.fymq2-1.fna&oh=00_AT9zpZfV2Z_4pKMqgVJ7Bg21TbH6NlA5AqRtlgmqJ4wJSg&oe=62982AB8',
      imageAlt: 'German Shepherd',
    },
    {
      id: 4,
      name: 'Camping',
      href: 'https://poissonblanc.ca/en/',
      price: '',
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
            Here are some of my highlights and projectd that i am most proud of.
          </p>
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
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover grayscale group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    </section>
        );
}
export default Hobbies;