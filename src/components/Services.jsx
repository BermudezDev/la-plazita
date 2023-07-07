import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Services() {
  const service = [
    {
      img: "/walk.jpg",
      to:"/products#ice-cream",
      title: "Ice Cream",
      desc: "We made the best Ice cream of the country, visit us to prove it by yourself!",
    },
    {
      img: "/sweets-2.jpg",
      to: "/products#bakery",
      title: "Bakery",
      desc: "We have a great variety of desserts, they all are so tasty, we are waiting you!",
    },
    {
      img: "/sweets-3.jpg",
      to: "/products#coffee",
      title: "Coffee",
      desc: "Do you want something to drink? we also have delicious coffee for you!",
    },
  ];
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? service.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === service.length - 1 ? 0 : curr + 1));

  return (
    <>
      <section className="relative flex flex-col overflow-x-hidden bg-gradient-to-b from-orange-300 to-amber-700 sm:h-screen md:max-h-[512px] lg:h-screen lg:max-h-screen">
        <div className={`flex min-h-screen sm:h-screen sm:translate-x-0 sm:justify-evenly md:h-[50vh] md:p-6 lg:h-screen`}
        style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {service.map((item, index) => (
            <div
              key={index}
              className="h-screen sm:flex sm:h-full sm:w-[30%]"
            >
              <div className="relative flex h-full w-screen overflow-hidden">
                <Link to={item.to}>
                  <img
                    src={item.img}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in hover:scale-110"
                  />
                </Link>
                <div className="absolute bottom-2 mx-2 bg-gradient-to-b from-yellow-100/90 to-orange-400/90 py-2">
                  <h1 className="px-1 text-xl font-bold text-amber-700">
                    {item.title}
                  </h1>
                  <p className="px-1 font-bold text-orange-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <button
          onClick={prev}
          className="focus: absolute inset-y-0 left-0 px-4 font-bold text-white focus:outline-none sm:hidden"
        >
          <BsChevronLeft className="text-lg" />
        </button>
        <button
          onClick={next}
          className="absolute inset-y-0 right-0 px-4 font-bold text-white focus:outline-none sm:hidden"
        >
          <BsChevronRight className="text-lg" />
        </button>
      </section>
    </>
  );
}
