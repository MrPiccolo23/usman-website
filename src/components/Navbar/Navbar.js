

import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';
import NavBrand from './NavBrand';

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const menu = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Products', to: '/products' },
        { id: 3, text: 'Contact', to: '/contact' },
    ];

    const handleClick = () => {
        setMobileNav(!mobileNav);
    };

    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true);
        } else {
            setChangeHeader(false);
        }
    };

    window.addEventListener('scroll', onChangeHeader);

    return (
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                <div className="flex flex-grow">
                    <NavBrand />
                </div>
                <div className="hidden md:flex lg:flex space-x-8">
                    <ul className="flex items-center space-x-4">
                        {menu.map(item => (
                            <li key={item.id}>
                                <NavLink exact to={item.to} className="text-gray-600 text-lg poppins" activeClassName="border-b-4 border-purple-600 text-purple-700">{item.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-purple-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {mobileNav && (
                <Fade>
                    <nav className="bg-white shadow-lg mx-6 mt-2 p-4 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
                        <ul className="mb-2">
                            {menu.map(item => (
                                <li key={item.id} className="mb-3">
                                    <NavLink exact key={item.id} to={item.to} className="text-gray-600 poppins text-lg text-center py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default block rounded-lg" activeClassName="border-l-4 border-purple-700 bg-gray-200">
                                    {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Fade>
            )}
        </header>
    );
};

export default Navbar;
