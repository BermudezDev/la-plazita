import { useState } from "react";
import { Reviews } from "../components";
import HashLink from "../hooks/scrollToHash";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function Products() {
  const iceCream = [
    { img: "/Cream/ice-cream-4.jpg", name: "Strawberry cone- 2$" },
    { img: "/Cream/ice-cream-8.jpg", name: "Chocolate cone - 2$" },
    { img: "/Cream/ice-cream-6.jpg", name: "Cone Deluxe- 2.50$" },
    { img: "/Cream/ice-cream-7.jpg", name: "Mixed double- 2.50$" },
  ];
  const bakery = [
    { img: "/bakery/cake.jpg", name: "Oreo cheesecake - 12$" },
    { img: "/bakery/waffle-2.jpg", name: "Waffle breakfast - 10$" },
    { img: "/bakery/dessert-3.jpg", name: "Berries dessert - 10$" },
  ];
  const coffee = [
    { img: "/coffee/iced-coffee-1.jpg", name: "Vanilla expresso - 6$" },
    { img: "/coffee/iced-coffee-2.jpg", name: "Iced Capuccino - 7.50$" },
    { img: "/coffee/iced-coffee-3.jpg", name: "Special Frapuccino- 7$" },
    { img: "/coffee/iced-coffee-4.jpg", name: "Capuccino classic- 6$" },
  ];
  //icecream
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? iceCream.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === iceCream.length - 1 ? 0 : curr + 1));

  //bakery
  const [curr2, setCurr2] = useState(0);

  const prev2 = () =>
    setCurr2((curr2) => (curr2 === 0 ? bakery.length - 1 : curr2 - 1));
  const next2 = () =>
    setCurr2((curr2) => (curr2 === bakery.length - 1 ? 0 : curr2 + 1));
    
    //coffee
    const [curr3, setCurr3] = useState(0);

  const prev3 = () =>
    setCurr3((curr3) => (curr3 === 0 ? iceCream.length - 1 : curr3 - 1));
  const next3 = () =>
    setCurr3((curr3) => (curr3 === iceCream.length - 1 ? 0 : curr3 + 1));

  return (
    <>
      <HashLink />
      <header className="flex h-[30vh] grow overflow-x-hidden bg-[url('/sweets.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex w-full overflow-x-hidden">
          <div className="my-auto flex w-full flex-col items-center justify-center bg-transparent">
            <h1 className="animate-fade p-4 text-center font-sans text-2xl font-bold text-orange-200 animate-delay-200 animate-duration-1000 animate-once lg:text-6xl">
              Products
            </h1>
          </div>
        </div>
      </header>
      <section
        id="ice-cream"
        className="relative flex flex-col overflow-x-hidden bg-gradient-to-b from-orange-300 to-amber-700 sm:h-screen md:max-h-[512px] lg:h-screen lg:max-h-screen"
      >
        <div className="absolute top-2 z-10 flex w-full justify-center py-2">
          <h1 className="block  bg-gradient-to-b from-yellow-100/90 to-orange-400/90 px-1  text-3xl font-bold text-amber-700">Ice Cream</h1>
        </div>
        <div
          className={`flex min-h-screen sm:h-screen sm:w-full sm:translate-x-0  md:h-[50vh] lg:h-screen`}
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {iceCream.map((item, index) => (
            <div key={index} className="h-screen sm:flex sm:w-[25%]">
              <div className="relative flex h-full w-screen overflow-hidden">
                <img src={item.img} className="h-full w-full object-cover" />
                <div className="absolute bottom-2 mx-2 bg-gradient-to-b from-yellow-100/90 to-orange-400/90 py-2">
                  <h1 className="px-1 text-xl font-bold text-amber-700">
                    {item.name}
                  </h1>
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
      <section
        id="bakery"
        className="relative flex flex-col overflow-x-hidden bg-gradient-to-b from-orange-300 to-amber-700 sm:h-screen md:max-h-[512px] lg:h-screen lg:max-h-screen"
      >
        <div className="absolute top-2 z-10 flex w-full justify-center py-2">
          <h1 className="block  bg-gradient-to-b from-yellow-100/90 to-orange-400/90 px-1  text-3xl font-bold text-amber-700">Bakery</h1>
        </div>
        <div
          className={`flex min-h-screen sm:h-screen sm:w-auto sm:translate-x-0 sm:justify-evenly sm:p-6  md:h-[50vh] lg:h-screen`}
          style={{ transform: `translateX(-${curr2 * 100}%)` }}
        >
          {bakery.map((item, index) => (
            <div key={index} className="h-screen sm:flex sm:h-auto sm:w-[30%]">
              <div className="relative flex h-full w-screen overflow-hidden">
                <img src={item.img} className="h-full w-full object-cover" />
                <div className="absolute bottom-2 mx-2 bg-gradient-to-b from-yellow-100/90 to-orange-400/90 py-2">
                  <h1 className="px-1 text-xl font-bold text-amber-700">
                    {item.name}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prev2}
          className="focus: absolute inset-y-0 left-0 px-4 font-bold text-white focus:outline-none sm:hidden"
        >
          <BsChevronLeft className="text-lg" />
        </button>
        <button
          onClick={next2}
          className="absolute inset-y-0 right-0 px-4 font-bold text-white focus:outline-none sm:hidden"
        >
          <BsChevronRight className="text-lg" />
        </button>
      </section>
      <section
        id="coffee"
        className="relative flex flex-col overflow-x-hidden bg-gradient-to-b from-orange-300 to-amber-700 sm:h-screen md:max-h-[512px] lg:h-screen lg:max-h-screen"
      >
        <div className="absolute top-2 z-10 flex w-full justify-center py-2">
          <h1 className="block  bg-gradient-to-b from-yellow-100/90 to-orange-400/90 px-1  text-3xl font-bold text-amber-700">Coffee</h1>
        </div>
        <div
          className={`flex min-h-screen sm:h-screen sm:w-full sm:translate-x-0  md:h-[50vh] lg:h-screen`}
          style={{ transform: `translateX(-${curr3 * 100}%)` }}
        >
          {coffee.map((item, index) => (
            <div key={index} className="h-screen sm:flex sm:w-[25%]">
              <div className="relative flex h-full w-screen overflow-hidden">
                <img src={item.img} className="h-full w-full object-cover" />
                <div className="absolute bottom-2 mx-2 bg-gradient-to-b from-yellow-100/90 to-orange-400/90 py-2">
                  <h1 className="px-1 text-xl font-bold text-amber-700">
                    {item.name}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prev3}
          className="focus: absolute inset-y-0 left-0 px-4 font-bold text-white focus:outline-none sm:hidden"
        >
          <BsChevronLeft className="text-lg" />
        </button>
        <button
          onClick={next3}
          className="absolute inset-y-0 right-0 px-4 font-bold text-white focus:outline-none sm:hidden"
        >
          <BsChevronRight className="text-lg" />
        </button>
      </section>
      <Reviews />
    </>
  );
}

export default Products;
