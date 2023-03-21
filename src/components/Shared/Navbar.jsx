import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-2 lg:py-5 px-2 lg:px-5'>
            <div className='w-[50px] lg:[80px]'>
                <Link to={"/"}>
                    <img src={"/assets/img/blogger.png"} alt="logo" />
                </Link>
            </div>
            <div className='px-0 lg:px-8'>
                <Link to={"/create"} className="mr-9 hover:text-sky-600">Create post</Link>
                <Link to={"/login"}>
                    <button className='mr-9 hover:text-sky-600'>Login</button>
                </Link>
                <Link to={"/signup"}>
                    <button className='mr-9 hover:text-sky-600'>Signup</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
