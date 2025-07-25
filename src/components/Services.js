import React from 'react';
import img from '../images/web.png';
import img2 from '../images/aiml.png';
import img3 from '../images/blockchain.png';
import img4 from '../images/cyber.png';

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 dark:bg-gray-900 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 dark:text-blue-300 uppercase font-bold">
            services
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900 dark:border-blue-300"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900 dark:text-blue-300">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img,
                alt: 'web dev',
                title: 'Web & App Development',
                desc:
                  'We craft modern, scalable websites and cross‑platform apps that combine sleek design with secure, high‑performance code.',
              },
              {
                img: img3,
                alt: 'blockchain',
                title: 'Blockchain Solutions',
                desc:
                  'Build trust and transparency with smart contracts, tokenized systems, and secure blockchain networks tailored to your needs.',
              },
              {
                img: img2,
                alt: 'ai ml',
                title: 'AI / ML Solutions',
                desc:
                  'Leverage AI to automate tasks, gain predictive insights, and deliver personalized user experiences with cutting‑edge models.',
              },
              {
                img: img4,
                alt: 'cybersecurity',
                title: 'Cybersecurity',
                desc:
                  'Protect your data and apps with robust encryption, access controls, and compliance‑ready security strategies.',
              },
            ].map(({ img, alt, title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl shadow-2xl p-6 group transform transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 active:scale-105 active:bg-gray-300 dark:active:bg-gray-600"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <img
                    alt={alt}
                    src={img}
                    className="rounded-t filter grayscale-[70%] transition duration-500 ease-in-out group-hover:grayscale-0 h-28 w-auto"
                  />
                  <h2 className="font-semibold text-2xl">{title}</h2>
                  <p className="text-base font-medium">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EtherX Full-Service Overview */}
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            {/* Left Box */}
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 dark:text-blue-300 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="74"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z" />
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z" />
                </svg>
              </div>
              <h3 className="text-2xl text-blue-900 dark:text-blue-300 font-bold mb-2">
                End-to-End Custom Development
              </h3>
              <p className="text-md text-gray-600 dark:text-gray-300 font-medium">
                At EtherX Innovations, we deliver secure, scalable digital solutions by integrating <strong>Blockchain</strong>, <strong>AI/ML</strong>, and <strong>Cybersecurity</strong>.
              </p>
              <p className="text-md text-gray-600 dark:text-gray-300 font-medium mt-3">
                From full-stack apps to tokenized platforms and smart contracts, we use tech like <strong>React, Node.js, Solidity, Flutter, Next.js, Python</strong>, and more.
              </p>
            </div>

            {/* Right Box */}
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 dark:text-blue-300 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" />
                </svg>
              </div>
              <h3 className="text-2xl text-blue-900 dark:text-blue-300 font-bold mb-2">
                Data Sovereignty & Compliance
              </h3>
              <p className="text-md text-gray-600 dark:text-gray-300 font-medium">
                We ensure privacy-first development. Our AI/ML includes NLP, automation & analytics — deployed with nation-first compliance in mind.
              </p>
              <p className="text-md text-gray-600 dark:text-gray-300 font-medium mt-3">
                Built for India. Trusted by teams who care about digital sovereignty, security, and sustainable infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
