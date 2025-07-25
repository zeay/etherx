import React from 'react';
import img from '../images/frontpage.png';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-white dark:bg-gray-900 transition-colors duration-300" id="about">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center transition-colors duration-300">
        {/* 🔹 Image Section */}
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
          <img
            alt="About EtherX Innovations"
            className="rounded-xl w-full object-cover"
            src={img}
          />
        </div>

        {/* 🔹 Text Section */}
        <div className="w-full lg:w-7/12 px-2">
          <h3 className="text-3xl text-blue-900 dark:text-blue-300 font-bold mb-4 text-center lg:text-left">
            Powering India’s Digital Future — Secure, Smart & Sovereign
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-3">
            <strong>EtherX Innovations Pvt Ltd</strong> is a bold, Made-in-India startup building the future of secure and sovereign digital infrastructure. We lead the charge on <strong>data ownership</strong>, <strong>user privacy</strong>, and <strong>national digital autonomy</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            By fusing <strong>Blockchain</strong>, <strong>AI/ML</strong>, and advanced <strong>Cybersecurity</strong> systems, we deliver next-gen platforms that empower individuals and institutions to control and protect their digital presence.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Built on innovation and driven by purpose, EtherX is on a mission to power a digitally resilient, self-reliant India—where technology is secure, ethical, and Indian at heart.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl shadow transition-all duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* 🔹 Vision and Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Vision Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border-t-4 border-blue-700 dark:border-blue-500 transition-colors duration-300">
          <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3"> Our Vision</h4>
          <p className="text-gray-700 dark:text-gray-300">
            To be a leading force in India’s digital sovereignty movement by building cutting-edge, secure, and scalable platforms that give users full control over their digital identity and data.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 border-t-4 border-indigo-700 dark:border-indigo-500 transition-colors duration-300">
          <h4 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-3"> Our Mission</h4>
          <p className="text-gray-700 dark:text-gray-300">
            To create futuristic digital solutions using Blockchain, AI/ML, and Cybersecurity that empower individuals, enterprises, and governments to operate with confidence, transparency, and trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
