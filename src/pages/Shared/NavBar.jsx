import { FaLanguage } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const navOptions = (
    <>
      <li className='text-xl font-nunito font-extrabold mr-7 hover:text-orange-500'>
        <Link to='/'>Home</Link>
      </li>
      <li className='text-xl font-nunito font-extrabold mr-7 hover:text-orange-500'>
        <Link to='/'>Instructors</Link>
      </li>
      <li className='text-xl font-nunito font-extrabold mr-7 hover:text-orange-500'>
        <Link to='/'>Classes</Link>
      </li>
      <li className='text-xl font-nunito font-extrabold mr-7 hover:text-orange-500'>
        <Link to='/'>Dashboard</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-white to-yellow-400 lg:px-10 py-3 ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to='/' className="font-nunito font-black text-4xl flex items-center gap-2">
            Lingo
            <FaLanguage className='text-6xl text-orange-400'></FaLanguage>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            { navOptions }
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login'>
            <button className='font-nunito text-xl font-extrabold rounded-full px-12 py-3 bg-gradient-to-b from-orange-500 to-yellow-500 text-white tracking-wide hover:from-orange-600 hover:to-yellow-600'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
