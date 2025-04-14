/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, HamburgerIcon, ArrowRightIcon } from "./Icons";
import { IoLogoYoutube, IoLogoInstagram } from "react-icons/io";
import Button from "./Button";

function Navbar() {
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);

  const links = [
    { link: "home", name: "Home" },
    { link: "features", name: "Fitur Unggulan" },
    { link: "product", name: "Produk Kami" },
    { link: "contact", name: "Kontak" },
  ];

  const togglePhoneMenu = () => {
    setIsPhoneMenuOpen(!isPhoneMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="linear-secondary hidden w-full md:flex md:fixed z-40">
        <nav className="w-full h-16 max-w-screen-xl mx-auto px-6 md:flex items-center justify-between">
          {/* logo */}
          <div className="block">
            <h1 className="font-open-sans font-bold text-2xl text-white">
              ZIAD
            </h1>
          </div>
          {/* navbar links */}
          <div className="grow flex flex-row items-center justify-center gap-8 lg:gap-10">
            {links.map((link, key) => {
              return (
                <a
                  href={`#${link.link}`}
                  key={key}
                  className="font-regular text-base lg:text-lg text-white tracking-wider opacity-80 hover:opacity-100"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="block">
            <a href="#demo" className="block">
              <Button variant="fill" color="white">
                Coba Aplikasi
              </Button>
            </a>
          </div>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 w-full bg-brand flex justify-between items-center py-4 px-10 z-40">
        <div className="md:block">
          <h1 className="font-open-sans font-bold text-xl text-white">ZIAD</h1>
        </div>
        <button
          type="button"
          className="md:hidden -scale-x-100"
          onClick={togglePhoneMenu}
        >
          <HamburgerIcon />
        </button>
      </nav>

      {/* Side Navigation */}
      <AnimatePresence>
        {isPhoneMenuOpen && (
          <motion.nav
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: "0.233" }}
            className="fixed top-0 left-0 w-screen bottom-0 h-screen md:hidden z-40 origin-top-right overflow-hidden"
          >
            {/* Mobile menu */}
            <div className="grow w-full h-screen px-10 pt-4 pb-10 bg-brand flex flex-col md:flex-row items-end justify-center font-regular text-sm text-white">
              {/* Close button */}
              <button type="button" onClick={togglePhoneMenu}>
                <CloseIcon />
              </button>
              {/* Main Links */}
              <div className="grow w-full flex flex-col mt-8 gap-4">
                {links.map((link, key) => {
                  return (
                    <a
                      key={key}
                      className="flex justify-between items-center py-3 text-2xl uppercase tracking-wide border-b-2"
                      href={`#${link.link}`}
                      onClick={togglePhoneMenu}
                    >
                      <p>{link.name}</p>
                      <ArrowRightIcon />
                    </a>
                  );
                })}
              </div>
              {/* Bottom links */}
              <div className="flex flex-col w-full gap-12">
                <div className="flex justify-between items-center gap-1">
                  <a href="#demo" className="block" onClick={togglePhoneMenu}>
                    <Button variant="fill" color="white">
                      <p className="text-xs uppercase font-semibold">
                        Coba Aplikasi
                      </p>
                    </Button>
                  </a>
                  <p className="text-sm">Tap. Download. Enjoy!</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg tracking-wider font-bold">
                    ZIAD SYSTEM
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/@ptmitracerdasnusantara"
                      target="_blank"
                    >
                      <IoLogoYoutube size={36} />
                    </a>
                    <a
                      href="https://www.instagram.com/ziadsistem/"
                      target="_blank"
                    >
                      <IoLogoInstagram size={36} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
