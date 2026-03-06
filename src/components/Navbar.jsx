const Navbar = () => {
  const handleReload = () => {
    window.location.reload(); // Reloads the current page
  };
  return (
    <nav className="border-b-gray-200 border-b">
      <div className="navbar bg-base-100 lg:w-11/12 mx-auto">
        <div className="navbar-start w-full lg:w-[30%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                className="h-5 w-5 -gray-400"
                fill="#6200dd"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24.75 24.75"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
		c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
		c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
                  />
                </g>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-2.5 shadow"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#service">Download</a>
              </li>
              <li>
                <a href="#socials">Contact</a>
              </li>
              <li>
                <a className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white font-bold">
                  <span
                    onClick={handleReload}
                    className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tl from-[#ffffff04] via-[#fff] via-40% to-[#fff]"
                  >
                    + New Ticket
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-semibold">
            Customer Support - Tickets Zone
          </a>
        </div>

        <div className="navbar-end hidden lg:flex lg:w-[70%] ">
          <ul className="hidden lg:flex menu menu-horizontal px-1 mr-4 gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#service">Download</a>
            </li>
            <li>
              <a href="#socials">Contact</a>
            </li>
          </ul>
          <a className="btn hidden lg:flex bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white font-bold">
            <span
              onClick={handleReload}
              className="hover:bg-clip-text hover:text-transparent  hover:bg-gradient-to-tl from-[#ffffff04] via-[#fff] via-40% to-[#fff]"
            >
              + New Ticket
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
