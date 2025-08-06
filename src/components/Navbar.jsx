/* eslint-disable react/no-unescaped-entities */

import Button from "./Button";

const Navbar = () => {
  const items = (
    <>
      <li>
        <a href="#banner" className="hover:text-[#E80F88] transition-colors duration-300">Home</a>
      </li>
      <li>
        <a href="#about" className="hover:text-[#E80F88] transition-colors duration-300">About</a>
      </li>
      <li>
        <a href="#skill" className="hover:text-[#E80F88] transition-colors duration-300">Skill</a>
      </li>
      <li>
        <a href="#projects" className="hover:text-[#E80F88] transition-colors duration-300">Projects</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-[#E80F88] transition-colors duration-300">Contact</a>
      </li>
    </>
  );

  return (
    <div className="shadow-lg shadow-[#8338EC]/20 fixed top-0 left-0 right-0 py-4 z-50 bg-[#121212]/90 backdrop-blur-xl border-b border-[#333333] ">
      <div className="navbar mx-auto md:max-w-[85%] md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1E1E1E]  rounded-md z-[1] mt-3 w-52 p-4 shadow-xl border border-[#333333]"
            >
              {items}
            </ul>
          </div>
          <a className=" text-3xl font-bold  animate__fadeInTopLeft animate__animated animate__delay-2s animate__slow hidden md:flex">
            <span className="mr-2">Rafi's</span > Portfolio
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-medium  px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
        <Button text={'Download Resume'}></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;