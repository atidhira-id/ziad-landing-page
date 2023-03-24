/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon, HamburgerIcon } from './Icons';
import Button from './Button';

function Navbar() {
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);

  const togglePhoneMenu = () => {
    setIsPhoneMenuOpen(!isPhoneMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 hidden md:flex linear-secondary md:w-full md:px-6 py-5 items-center jusitfy-center z-40">
        {/* logo */}
        <div className="md:block md:grow">
          <h1 className="font-open-sans font-bold text-xl text-white">Ziad</h1>
        </div>
        {/* navbar links */}
        <div className="hidden md:flex md:w-full flex-col md:flex-row items-center justify-center gap-4 font-regular text-sm text-white">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
          <div className="hidden md:block">
            <a href="#demo" className="block">
              <Button variant="fill" color="white">
                Try demo
              </Button>
            </a>
          </div>
        </div>
      </nav>
      {/* hamburger icon */}
      <AnimatePresence>
        <div className="md:hidden sticky w-full bg-brand flex justify-center items-center py-2 px-3">
          <button type="button" className="md:hidden" onClick={togglePhoneMenu}>
            <HamburgerIcon />
          </button>
          <div className="md:block grow text-center">
            <h1 className="font-open-sans font-bold text-xl text-white">Ziad</h1>
          </div>
        </div>
        {isPhoneMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-screen bottom-0 h-screen md:hidden flex flex-col justify-start items-end bg-black bg-opacity-30 z-40"
          >
            {/* phone menu */}
            <div className="grow w-3/4 px-4 bg-brand flex flex-col md:flex-row items-end justify-center font-regular text-sm text-white">
              <button type="button" className="mb-4 mr-4 mt-4" onClick={togglePhoneMenu}>
                <CloseIcon />
              </button>
              <div className="grow flex flex-col gap-4 items-end justify-start mr-4 mt-5">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#product">Product</a>
                <a href="#contact">Contact</a>
                <div className="md:block">
                  <a href="#demo" className="block">
                    <Button variant="fill" color="white">
                      Try demo
                    </Button>
                  </a>
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
