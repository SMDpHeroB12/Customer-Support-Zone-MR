import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const handleReload = () => {
    window.location.reload(); // Reloads the current page
  };
  return (
    <nav className="border-b-gray-200 border-b sticky top-0 bg-white z-10">
      <div className="navbar bg-base-100 lg:w-11/12 mx-auto">
        <div className="navbar-start w-full lg:w-[30%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <TiThMenu size={24} color="#6200dd" />
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
            Customer Support - Tickets System
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
