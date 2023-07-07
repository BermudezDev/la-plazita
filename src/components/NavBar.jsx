import { useState, useEffect } from "react";
import useScrollListener from "../hooks/useScroll";
import { VscThreeBars } from "react-icons/vsc";
import { LuIceCream2 } from "react-icons/lu";
import { Link } from "react-router-dom";
export function NavBar() {
  const [open, setOpen] = useState(false);
  const [navShow, setNavShow] = useState("visible");
  const scroll = useScrollListener();
  useEffect(() => {
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0){
      setNavShow("hidden");
    } else{
      setNavShow("visible")
    }

  }, [scroll.y, scroll.lastY, open]);

  const handleClick = ()=> {
    setOpen(false)
  }
  return (
    <nav
      className={`fixed left-0 top-0 z-20 w-full transition-colors duration-1000 
      ${open && scroll.y < 150 ? "bg-orange-200" : " "}
      ${navShow}
      ${scroll.y > 150 ? "bg-gradient-to-b from-yellow-50 to-orange-200 drop-shadow-lg" : " bg-none"}
      `}
    >
      <div className="z-20 flex h-[10vh] items-center justify-between">
        <div className="z-20 ml-2 hover:animate-wiggle hover:animate-delay-200 hover:animate-duration-[4000ms] hover:animate-infinite">
          <Link
            to="/"
            onClick={handleClick}
            className="flex flex-row items-center px-4 py-2 font-bold text-orange-600 transition-colors duration-300 hover:text-orange-400  md:text-xl"
          >
            <LuIceCream2 className="mr-2" /> LA PLAZITA
          </Link>
        </div>
        <div>
          <button
            className="px-3 py-2 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <VscThreeBars className="z-10 text-orange-700" />
          </button>
          <ul
            className={` absolute w-full bg-orange-200 pb-2 font-bold text-orange-600 md:static md:mr-10 md:flex md:bg-transparent md:pb-0 [&_li]:mx-4 [&_li]:p-2 ${
              open ? "left-0 opacity-100" : "left-[100vw]"
            } top-[10vh] transition-all duration-700 md:top-0 md:[&_li]:py-1`}
          >
            <li className="border-b-2 border-transparent transition-colors duration-300 hover:border-amber-700 hover:text-orange-400 md:text-xl">
              <Link to="/about" onClick={handleClick}>About Us</Link> 
            </li>
            <li className="border-amber-700 transition-colors duration-300 hover:border-b-2 hover:text-orange-400 md:text-xl">
              <Link to="/products" onClick={handleClick}>Products</Link>
            </li>
            <li className="border-amber-700 transition-colors duration-300 hover:border-b-2 hover:text-orange-400 md:text-xl">
              <Link to="/locals" onClick={handleClick}>Locals</Link>
            </li>
            <li className="text-orange-200 " >
              <Link
                to="/#contact"
                onClick={handleClick}
                className="bg-amber-700 px-2 py-1 font-bold transition-colors duration-500 hover:bg-orange-200 hover:text-amber-700 md:text-xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
