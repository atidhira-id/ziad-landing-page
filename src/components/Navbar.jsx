import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, HamburgerIcon, ArrowRightIcon } from "./Icons";
import { IoLogoYoutube, IoLogoInstagram } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { Button } from "@/components/Button";

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
      <div className="hidden bg-white w-full max-w-screen-2xl md:flex md:fixed border-b border-gray-300 border-dashed z-40 box-content">
        <nav className="bg-white w-full h-16 max-w-screen-xl mx-auto px-6 md:flex items-center justify-between">
          <a href="#home" className="block">
            <img
              src="./images/logo-ziad.png"
              className="w-12 h-12 object-contain"
            />
          </a>
          <div className="grow flex flex-row items-center justify-center gap-4">
            {links.map((link, key) => {
              return (
                <a
                  href={`#${link.link}`}
                  key={key}
                  className="text-sm px-2 py-1 rounded-sm hover:bg-gray-100 duration-200"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <a
            href="#demo"
            className="py-2 px-3 text-sm rounded-full border border-dashed border-gray-400 hover:bg-gray-100 duration-200"
          >
            Coba Aplikasi
          </a>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white fixed top-0 w-full flex justify-between items-center py-4 px-10 border-b border-dashed z-40">
        <a href="#home" className="md:block">
          <img
            src="./images/logo-ziad.png"
            className="w-12 h-12 object-contain"
          />
        </a>
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
            <div className="grow w-full h-screen px-10 pt-4 pb-10 bg-blue-700 flex flex-col md:flex-row items-end justify-center font-regular text-sm text-white">
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
                    <Button theme="white" className="px-4">
                      <p className="text-xs uppercase font-semibold">
                        Coba Aplikasi
                      </p>
                    </Button>
                  </a>
                  <p className="text-sm">Nikmati Fiturnya!</p>
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
                      <IoLogoYoutube size={30} />
                    </a>
                    <a
                      href="https://www.instagram.com/ziadsistem/"
                      target="_blank"
                    >
                      <IoLogoInstagram size={30} />
                    </a>
                    <a
                      href="https://www.instagram.com/ziadsistem/"
                      target="_blank"
                    >
                      <AiFillTikTok size={30} />
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
