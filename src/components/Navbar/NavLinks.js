import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            {/* About */}
            <HashLink
                className="px-4 font-extrabold text-gray-600 dark:text-white hover:text-blue-900 dark:hover:text-blue-400"
                smooth
                to="/#about"
            >
                About
            </HashLink>

            {/* Products */}
            <HashLink
                className="px-4 font-extrabold text-gray-600 dark:text-white hover:text-blue-900 dark:hover:text-blue-400"
                smooth
                to="/#products"
            >
                Products
            </HashLink>

            {/* Services */}
            <HashLink
                className="px-4 font-extrabold text-gray-600 dark:text-white hover:text-blue-900 dark:hover:text-blue-400"
                smooth
                to="/#services"
            >
                Services
            </HashLink>

            {/* Domain */}
            <HashLink
                className="px-4 font-extrabold text-gray-600 dark:text-white hover:text-blue-900 dark:hover:text-blue-400"
                smooth
                to="/#domain"
            >
                Domains
            </HashLink>

            {/* Team */}
            <HashLink
                className="px-4 font-extrabold text-gray-600 dark:text-white hover:text-blue-900 dark:hover:text-blue-400"
                smooth
                to="/#team"
            >
                CoreX
            </HashLink>

            {/* Contact */}
            <HashLink
                className="px-4 font-extrabold text-gray-600 dark:text-white hover:text-blue-900 dark:hover:text-blue-400"
                smooth
                to="/#footer"
            >
                Contact Us
            </HashLink>
        </>
    );
};

export default NavLinks;
