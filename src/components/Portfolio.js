import React from 'react';
import firevestImg from '../images/Firevest.png';
import crowdfundingImg from '../images/Crowdfunding.png';
import mindmateImg from '../images/MindMate AI.png';
import deepfakeImg from '../images/Deepfake.png';
import mediledgerImg from '../images/MediLedger.png';
import smartLandImg from '../images/smart land.png';

const Portfolio = () => {
  return (
    <div id="products" className="py-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Heading */}
      <h2 className="text-center text-3xl text-blue-900 dark:text-blue-300 uppercase font-bold">
        Products
      </h2>
      <div className="flex justify-center">
        <div className="w-24 border-b-4 border-blue-900 dark:border-blue-300 my-4"></div>
      </div>
      <h2 className="mx-6 text-center text-xl lg:text-2xl font-semibold text-blue-900 dark:text-blue-300">
        Each product is built to redefine digital trust, transparency, and innovation for India’s future.
      </h2>

      {/* Product Grid */}
      <div className="px-4 mt-6" data-aos="fade-down" data-aos-delay="600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Product Cards */}
          {[
            {
              id: 'firevest',
              img: firevestImg,
              title: 'FireVest',
              desc1:
                'An intelligent financial planner helping users achieve early retirement by combining real-time data, investment simulations, and predictive AI-driven insights.',
              desc2:
                'Designed for anyone looking to secure financial freedom with data-backed strategies.'
            },
            {
              id: 'crowdfund',
              img: crowdfundingImg,
              title: 'BlockFund',
              desc1:
                'A decentralized blockchain-based crowdfunding platform offering transparency, trustless transactions, and immutable smart contracts to protect backers and creators.',
              desc2:
                'Empowering startups, NGOs, and creative projects to raise funds globally with confidence.'
            },
            {
              id: 'mindmateai',
              img: mindmateImg,
              title: 'MindMate AI',
              desc1:
                'Your AI-powered mental wellness companion, providing daily emotional check-ins, mood tracking, and personalized self-care prompts.',
              desc2:
                'Supports holistic mental health with data-driven insights and friendly guidance.'
            },
            {
              id: 'deepdefender',
              img: deepfakeImg,
              title: 'DeepDefender',
              desc1:
                'Advanced deepfake detection and monitoring platform built to combat synthetic media threats, fake news, and online misinformation.',
              desc2:
                'Uses AI to safeguard reputations and verify authenticity in media content.'
            },
            {
              id: 'mediledger',
              img: mediledgerImg,
              title: 'MediLedger',
              desc1:
                'A secure, interoperable health data exchange built on Hyperledger Fabric, empowering patients to manage and share medical records seamlessly.',
              desc2:
                'Enables clinics, hospitals, and users to collaborate while ensuring data privacy.'
            },
            {
              id: 'smart-land-identity',
              img: smartLandImg,
              title: 'Smart Land Identity',
              desc1:
                'A blockchain-powered land ownership and verification system that digitizes property records, prevents fraud, and simplifies title transfers.',
              desc2:
                'Bringing transparency and security to real estate processes nationwide.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              id={item.id} // ⭐ add id here
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition transform hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.02] hover:shadow-lg overflow-hidden text-gray-800 dark:text-gray-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 max-h-32 object-contain"
              />
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4">
                  {item.title}
                </h4>
                <p className="text-md font-medium leading-5">{item.desc1}</p>
                <p className="text-md font-medium leading-5 mt-2">{item.desc2}</p>
              </div>
            </div>
          ))}

        </div>

        <p className="text-center text-gray-700 dark:text-gray-300 text-md font-medium mt-8 max-w-4xl mx-auto">
          Each product combines cutting-edge technologies with a commitment to privacy, trust, and national digital empowerment.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
