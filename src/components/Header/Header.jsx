import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <nav className="py-4">
        <div className="navbar lg:px-0">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to={'/'} className='text-[#131313CC] font-normal text-lg'>Home</NavLink></li>
            <li><NavLink to={'/listedBooks'} className='text-[#131313CC] font-normal text-lg'>Listed Books</NavLink></li>
            <li><NavLink to={'/pagesToRead'} className='text-[#131313CC] font-normal text-lg'>Pages to Read</NavLink></li>
            <li><NavLink to={'/publisher'} className='text-[#131313CC] font-normal text-lg'>Publishers</NavLink></li>
            <li><NavLink to={'/contact'} className='text-[#131313CC] font-normal text-lg'>Contact Us</NavLink></li>
            </ul>
            </div>
            <Link to={'/'} className="text-[#131313] text-xl lg:text-3xl font-bold">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 lg:space-x-4">
            <li><NavLink to={'/'} className='text-[#131313CC] font-normal text-lg'>Home</NavLink></li>
            <li><NavLink to={'/listedBooks'} className='text-[#131313CC] font-normal text-lg'>Listed Books</NavLink></li>
            <li><NavLink to={'/pagesToRead'} className='text-[#131313CC] font-normal text-lg'>Pages to Read</NavLink></li>
            <li><NavLink to={'/publisher'} className='text-[#131313CC] font-normal text-lg'>Publishers</NavLink></li>
            <li><NavLink to={'/contact'} className='text-[#131313CC] font-normal text-lg'>Contact Us</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end space-x-1 lg:space-x-4">
            <a className="py-2 lg:py-4 px-3 lg:px-7 rounded-lg bg-[#23BE0A] text-white text-base lg:text-lg font-semibold">Sign In</a>
            <a className="py-2 lg:py-4 px-3 lg:px-7 rounded-lg bg-[#59C6D2] text-white text-base lg:text-lg font-semibold">Sign Up</a>
        </div>
        </div>
    </nav>
  )
}
