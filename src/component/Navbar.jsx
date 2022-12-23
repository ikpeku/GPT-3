import React from "react";
import { Link, Outlet } from "react-router-dom";
import { signout } from "../utils/firebse";
import { useUserAuth } from "../hooks/useUserAuth";

export const Navbar = () => {
  const {user} = useUserAuth()

  return (
    <div className="">
      <header aria-label="Site Header" className="">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-12 px-4 sm:px-6 lg:px-8">
          <Link className="block text-white" to="/">
            <span className="sr-only">Home</span>
            <h1 className="text-xl">GPT-3</h1>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-xs lg:text-lg">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-500/75"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-gray-500/75"
                    to="/"
                  >
                    What is GPT?
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-gray-500/75"
                    to="/"
                  >
                    Open AI
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-gray-500/75"
                    to="/"
                  >
                    Case Studies
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-gray-500/75"
                    to="/"
                  >
                    Library
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {user && <button
                onClick={signout}
                  type="button"
                  className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition bg-[#FF4820]"
                >
                  Logout
                </button>}
                {!user && (
                  <>
                  <Link
                  className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#FF4820]"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="hidden rounded-md bg-[#FF4820] hover:bg-transparent  px-5 py-2.5 text-sm font-medium text-white transition sm:block"
                  to="/signup"
                >
                  Register
                </Link>
                  </>
                )}
              </div>

              {/* <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
