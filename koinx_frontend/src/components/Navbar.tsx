import { useState } from 'react';
import koinx from "../assets/koinx.svg";
import Hamburger from 'hamburger-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:h-20 h-16 flex items-center justify-between shadow-md bg-[#FFFFFF]  w-screen">
      <div>
        <img src={koinx} alt="Logo" className="w-28 h-6 lg:ml-8 ml-3"></img>
      </div>
            {/* large screen */}
      <div className="hidden lg:flex items-center">
        <div className="text-lg font-semibold  text-[#0F1629] mr-6">
          Crypto Taxes
        </div>
        <div className="text-lg font-semibold text-[#0F1629] mr-6">
          Free Tools
        </div>
        <div className="text-lg font-semibold text-[#0F1629] mr-6">
          Resource Center
        </div>
        <div>
            <button className="px-8 py-2 mx-3 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white rounded-lg transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Get Started
            </button>
        </div>
      </div>
      {/* small screen */}
      <div className="lg:hidden mr-4">
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>
      {/* dropdown menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 right-0 mt-2 mr-2 bg-white rounded-md shadow-md py-5">
          <div className="text-lg font-semibold text-[#0F1629] px-4 py-2">
            <div className="mb-2 cursor-pointer ">Crypto Taxes</div>
            <div className="mb-2 cursor-pointer ">Free Tools</div>
            <div className="mb-2 cursor-pointer">Resource Center</div>
            <div>
          <button className="px-8 py-2 mx-4 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white rounded-lg transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Get Started
          </button>
        </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
