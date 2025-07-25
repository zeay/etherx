import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <div className="w-full flex items-center justify-center text-white cta dark:bg-gray-900">
            <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-around">
                    <div className="mb-4">
                        <p className="text-2xl md:text-4xl font-bold mb-4 text-white dark:text-white">
                            Ready to build India’s Next-Gen digital infrastructure?
                        </p>
                        <p className="text-lg md:text-2xl text-gray-200 dark:text-gray-300">
                            Partner with <span className="font-black text-white dark:text-white">EtherX Innovations</span> to create secure, sovereign, and scalable tech solutions.
                        </p>
                    </div>

                    <div className="w-full lg:w-72 pt-6 lg:mx-12">
                        <Link
                            to="/contact"
                            className="bg-transparent border border-white dark:border-gray-300 hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group"
                        >
                            Let’s Talk
                            <svg
                                className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;
