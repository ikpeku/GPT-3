import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-inherit text-white">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="flex justify-center text-center md:text-left flex-col sm:justify-start">
              <h2 className="font-bold text-2xl">GPT-3</h2>
              <p className="text-sm text-white lg:w-1/2 py-5">
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </p>
            </div>

            <div className="hidden md:block mt-12  pt-6">
              <div className="text-center sm:flex sm:justify-between sm:text-left">
                <p className="mt-4 text-sm sm:order-first sm:mt-0">
                  &copy; 2022 Metabnb
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Community</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      NFT
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Tokens
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Landlords
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Places</p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Castle
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Farms
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Beach
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Learn more
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">About us</p>

              <nav aria-label="Footer Helpful Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Road map
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Creators
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="block md:hidden  pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="mt-4 text-sm sm:order-first sm:mt-0">
              &copy; 2022 Metabnb
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
