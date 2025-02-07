/* eslint-disable react/no-unescaped-entities */

const Navbar = () => {
  const items = (
    <>
      <li>
        <a href="#banner">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skill">Skill</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="bg-[#E8F5E9]/30 text-[#02995d] fixed top-0 left-0 right-0 py-5 z-50 shadow-md backdrop-blur-2xl">
      <div className="navbar xl:w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-white text-[#02995d] rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {items}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-bold text-[#02995d] animate__fadeInTopLeft animate__animated animate__delay-2s  animate__slow hidden md:flex">
           
            Rafi's Portfolio
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl font-medium text-[#02995d] px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            download={true}
            href="Resume_Of_Rafi_Ahmed.pdf"
            className="text-[#02995d] 
             border-[#02995d] md:text-xl font-semibold px-1 md:px-5 py-2 rounded-lg hover:bg-[#02995d] border-l-[#02995d] border-l-[5px] hover:text-white transition duration-200 shadow shadow-[#02995d] animate__fadeInUp animate__animated animate__delay-2s  animate__slower "
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
