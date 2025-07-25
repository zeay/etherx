import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/Block.png';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="max-w-full mx-auto px-4 sm:px-6 bg-white dark:bg-gray-900 py-12 transition-colors duration-300">
        <div className="grid sm:grid-cols-12 gap-6 py-8 md:py-12 border-t border-gray-200 dark:border-gray-700 ml-3">

          {/* Logo + Address */}
          <div className="col-span-12 lg:col-span-4 mt-8">
            <div className="flex flex-col">
              <div className="flex items-center space-x-0">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 md:h-20"
                />
                <h2 className="text-xl md:text-2xl font-bold text-[#013289] dark:text-blue-300 leading-none ml-2 -mt-1">
                  EtherX Innovations Pvt Ltd
                </h2>
              </div>
              <div className="text-base font-medium text-gray-700 dark:text-gray-300 leading-tight -mt-3">
                <p>Startup Studio, CITNC</p>
                <p>
                  Sy. no 73, Lingadheera Gollahalli, Kundana Hobli, Taluk, Devanahalli, Bengaluru, Karnataka 562110
                </p>
              </div>
            </div>
          </div>

          {/* Services + Products + Contact */}
          <div className="col-span-12 lg:col-span-8 flex justify-center flex-wrap gap-8 mt-8">

            {/* Services */}
            <div>
              <h6 className="text-[#013289] dark:text-blue-300 text-xl font-bold mb-4">OUR SERVICES</h6>
              <ul className="text-md text-gray-700 dark:text-gray-300">
                <li className="mb-2"><HashLink smooth to="/#services">Web Development</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#services">Mobile App Development</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#services">Blockchain Solutions</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#services">AI / ML Solutions</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#services">Cybersecurity</HashLink></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h6 className="text-[#013289] dark:text-blue-300 text-xl font-bold mb-4">OUR PRODUCTS</h6>
              <ul className="text-md text-gray-700 dark:text-gray-300">
                <li className="mb-2"><HashLink smooth to="/#products">Firevest</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#products">CrowdFund</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#products">MindMateAI</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#products">DeepDefender</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#products">MediLedger</HashLink></li>
                <li className="mb-2"><HashLink smooth to="/#products">Smart Land Identity</HashLink></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h6 className="text-[#013289] dark:text-blue-300 text-xl font-bold mb-4">CONTACT US</h6>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <p className="flex items-center space-x-2">
                  <span className="text-lg"><i className="fas fa-phone-alt"></i></span>
                  <a href="tel:+919902896704" className="hover:underline">+91 9902896704</a>
                </p>

                <p className="flex items-center space-x-2">
                  <span className="text-lg"><i className="fas fa-envelope"></i></span>
                  <a href="mailto:etherxinnovationsofficial@gmail.com" className="hover:underline">etherxinnovationsofficial@gmail.com</a>
                </p>

                <p className="flex items-center space-x-2">
                  <span className="text-lg"><i className="fas fa-globe"></i></span>
                  <a href="https://www.etherxinnovations.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.etherxinnovations.com</a>
                </p>

                <p className="flex items-center space-x-2">
                  <span className="text-lg"><i className="fab fa-linkedin"></i></span>
                  <a href="https://www.linkedin.com/in/meghana-c-d-05b7122ba" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                </p>

                <p className="flex items-center space-x-2">
                  <span className="text-lg"><i className="fas fa-file-alt"></i></span>
                  <span>CIN: U63121KA2025PTC200454</span>
                </p>

                <p className="flex items-center space-x-2">
                  <span className="text-lg"><i className="fas fa-file-alt"></i></span>
                  <span>GSTIN: 29AAICE7724L1Z2</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center px-4 py-4 mt-6">
          <div className="text-sm text-gray-800 dark:text-gray-400 font-semibold">
            © {new Date().getFullYear()}{' '}
            <HashLink to="/" className="hover:text-blue-900 dark:hover:text-white">
              EtherX Innovations
            </HashLink>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
