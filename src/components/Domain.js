import React from 'react';

// Import all logos at the top
import mongodb from '../images/mongodb.png';
import nodejs from '../images/nodejs.png';
import github from '../images/github.png';
import reactnative from '../images/reactnative.png';
import reactjs from '../images/reactjs.png';
import expo from '../images/expo.png';
import ai from '../images/ai.png';
import blocck from '../images/blocck.png';
import firebase from '../images/firebase.png';
import expressjs from '../images/expressjs.png';
import js from '../images/js.png';
import ts from '../images/ts.png';
import figma from '../images/figma.png';
import redux from '../images/redux.png';

const Domain = () => {
    return (
        <div id="domain" className="bg-white dark:bg-gray-900 py-12 transition-colors duration-300">
            {/* Section Header */}
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 dark:text-blue-300 uppercase font-bold">
                    Domain Expertise
                </h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 dark:border-blue-300 mb-6'></div>
                </div>
                <p className="text-center text-md font-normal text-gray-600 dark:text-gray-300 mx-4 md:mx-32">
                    At EtherX Innovations, we combine deep technical expertise with bold vision — designing mission-critical digital solutions that strengthen India’s digital sovereignty, intelligence, and cybersecurity landscape.
                </p>
            </div>

            {/* Domain Cards */}
            <div className="px-6 mt-8" data-aos="fade-up" data-aos-delay="400">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domains.map(({ title, description }, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl shadow-md p-6 transform transition duration-300 hover:scale-105 cursor-pointer"
                        >
                            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                                {title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tech Stacks */}
            <div className="mt-20">
                <h2 className="my-2 text-center text-3xl text-blue-900 dark:text-blue-300 uppercase font-bold">
                    Tools and Technologies We Use
                </h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 dark:border-blue-300 mb-6'></div>
                </div>

                <div className="overflow-hidden relative mt-8">
                    <div className="marquee-inner">
                        {[...techStacks, ...techStacks].map((stack, idx) => (
                            <div key={idx} className="flex flex-col items-center min-w-[100px] mx-4">
                                <img
                                    src={stack.img}
                                    alt={stack.name}
                                    className="h-20 w-20 object-contain mb-4 dark:invert"
                                />
                                <span className="text-xs text-gray-700 dark:text-gray-300 text-center">
                                    {stack.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .marquee-inner {
                    display: flex;
                    width: max-content;
                    animation: marquee 20s linear infinite;
                }
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

const domains = [
    { title: 'Blockchain & Web3', description: 'Decentralized apps (dApps), token economies, NFT platforms, and transparent supply chain systems using Ethereum, Hyperledger, and other protocols.' },
    { title: 'Artificial Intelligence / Machine Learning', description: 'Predictive analytics, AI-powered assistants, deep learning models, computer vision, and intelligent automation for transformative solutions.' },
    { title: 'Cybersecurity & Privacy Engineering', description: 'Encryption, threat detection, secure access control, compliance-first design, and zero-trust systems to safeguard critical data and infrastructure.' },
    { title: 'Healthcare Technology', description: 'Secure electronic health records, AI tools for diagnosis, interoperability solutions, and digital platforms driving healthcare innovation.' },
    { title: 'FinTech & Investment Tech', description: 'Digital wallets, lending solutions, retirement planners, and blockchain-powered infrastructure supporting inclusive economic growth.' },
    { title: 'Social Impact Tech', description: 'Mental wellness tools, digital identity systems, e-governance platforms, and ethical AI applications for a fair and connected society.' }
];

const techStacks = [
    { name: 'MongoDB', img: mongodb },
    { name: 'Node.js', img: nodejs },
    { name: 'GitHub', img: github },
    { name: 'React Native', img: reactnative },
    { name: 'Expo', img: expo },
    { name: 'AI/ML', img: ai },
    { name: 'Blockchain', img: blocck },
    { name: 'Firebase', img: firebase },
    { name: 'Express.js', img: expressjs },
    { name: 'JavaScript', img: js },
    { name: 'TypeScript', img: ts },
    { name: 'React.js', img: reactjs },
    { name: 'Figma', img: figma },
    { name: 'Redux', img: redux },
];

export default Domain;
