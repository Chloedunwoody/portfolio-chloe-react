import React, { useEffect, useState } from "react";
import axios from 'axios';

const products = [
    {
      id: 1,
      name: 'Rugby',
      href: 'http://montrealwanderers.ca/womens-rugby/',
      price: '',
      imageSrc: 'https://scontent.fyhu2-1.fna.fbcdn.net/v/t1.6435-9/69839024_10157464628877770_6188872733359603712_n.png?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=wRPH5SDk72gAX9qNCfy&_nc_ht=scontent.fyhu2-1.fna&oh=00_AT_iT_Dv92H9n987gaemnXeyPHXO6yGzvPF9EKN0LVNYHQ&oe=6230806F',
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
      imageSrc: 'https://scontent.fyhu2-1.fna.fbcdn.net/v/t1.6435-9/142101005_5725950367430815_4110687625219517861_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=9BMG1on5rY8AX8Mm69O&_nc_ht=scontent.fyhu2-1.fna&oh=00_AT8SkBlBxax3V0xi6tq6K1kwmXCaeqUKOvOyiwm6vmPH7Q&oe=6231000F',
      imageAlt: 'German Shepherd',
    },
    {
      id: 4,
      name: 'Camping',
      href: 'https://instagram.com/stitchingsabbatical?utm_medium=copy_link',
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
        <div id="hobbies" className="bg-white">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Database Hobbies
        </h1>
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

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
        );
}
export default Hobbies;