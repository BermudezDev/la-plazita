import { LuFacebook, LuIceCream2, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="w-full">
      <footer className="bg-gradient-to-b from-yellow-50 to-orange-200 p-4 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-3xl text-amber-700">
              <LuIceCream2 />
            La Plazita
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase text-amber-700">
                Locals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/locals#miami"
                    className="text-orange-400 hover:underline"
                  >
                    Miami
                  </Link>
                </li>
                <li>
                  <Link
                    to="/locals#losangeles"
                    rel="nofollow"
                    className="text-orange-400 hover:underline"
                  >
                    Los Angeles
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase text-amber-700">
                Follow us
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    className="text-orange-400 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-orange-400 hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase text-amber-700">
                Legal
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    className="text-orange-400 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-orange-400 hover:underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-amber-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-orange-400 sm:text-center">
            © 2022{" "}
            <Link
              to="/"
              className="hover:underline"
            >
              La Plazita™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 text-3xl sm:mt-0 sm:justify-center">
            <Link
              to="#"
              className="text-orange-400 hover:text-orange-300"
            >
              <LuInstagram />
            </Link>
            <Link
              to="#"
              className="text-orange-400 hover:text-orange-300"
            >
             <LuFacebook />
            </Link>
            <Link
              to="#"
              className="text-orange-400 hover:text-orange-300"
            >
              <LuTwitter />
            </Link>
            <Link
              to="#"
              className="text-orange-400 hover:text-orange-300"
            >
              <LuYoutube />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
