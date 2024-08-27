

import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import NavBrand from '../Navbar/NavBrand';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/database/services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const footerLink = [
        {
            id: 1, 
            text: 'St Helens Pharmacy Group\nSt Helens Pharmacy Ltd\n130 Duke Street, St Helens\nWA10 2JL'
        },
        { id: 9, text: 'info@sthelenspharmacy.co.uk' }
    ];

    return (
        <Fade>
            <footer className="text-gray-600 poppins bg-gray-100">
                <div className="max-w-screen-xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <NavBrand />
                    </div>
                    <div className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Address</h2>
                            <nav className="list-none mb-10 flex flex-col space-y-2">
                                <p className="text-sm whitespace-pre-line">
                                    {footerLink[0].text}
                                </p>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Services</h2>
                            <nav className="list-none mb-10 flex flex-col space-y-2">
                                {services.map(service => (
                                    <Link 
                                        to={`/services/${encodeURIComponent(service.title)}`} 
                                        key={service.id} 
                                        className="text-sm hover:underline"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Contact</h2>
                            <nav className="list-none mb-10 flex flex-col space-y-2">
                                <a 
                                    href="mailto:info@sthelenspharmacy.co.uk" 
                                    className="text-sm hover:underline"
                                >
                                    {footerLink[1].text}
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-purple-700">
                    <div className="max-w-screen-xl mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2024 All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </Fade>
    );
}

export default Footer;
