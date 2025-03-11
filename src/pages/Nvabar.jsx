const Navbar = () => {
  return (
    <header className="bg-white  fixed w-full z-10">
      {/* Header & Navigation */}
      <div className="navbar bg-white text-black shadow-amber-50 fixed w-full z-10">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-red-600 font-bold">
            Pizza Express
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/" className="hover:text-red-600 font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-red-600 font-bold">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-600 font-bold">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-600 font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="/login"
            className="btn btn-ghost rounded-lg border-none bg-red-600 text-white hover:font-bold"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
