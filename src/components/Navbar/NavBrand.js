import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const NavBrand = () => {
    return (
        <NavLink to="/" className="flex items-center space-x-4">
            <img className="w-12 select-none" src="../../assets/favicon-2.png" alt="logo" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-purple-600 brand-font select-none">
                ST HELENS PHARMACY GROUP
            </h1>
        </NavLink>
    );
}

export default NavBrand;

