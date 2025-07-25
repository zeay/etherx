import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';

const Contact = () => {
  useDocTitle('Contact | EtherX Innovations - Send us a message');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const clearInput = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerHTML = 'Loading...';

    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/en985u08xm3cf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        Notiflix.Report.success(
          'Success',
          'Your message has been sent.',
          'Okay'
        );
        clearInput();
      } else {
        Notiflix.Report.failure(
          'Failed',
          'Could not send your message. Please try again.',
          'Okay'
        );
      }
    } catch (error) {
      console.error(error);
      Notiflix.Report.failure(
        'Error',
        'Something went wrong. Please try again later.',
        'Okay'
      );
    }

    btn.disabled = false;
    btn.innerHTML = 'Send Message';
  };

  return (
    <>
      <NavBar />
      <div
        id='contact'
        className="flex justify-center items-center mt-8 w-full bg-white dark:bg-gray-900 py-12 lg:py-24 transition-colors"
      >
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <form onSubmit={sendEmail}>
            <div className="w-full bg-white dark:bg-gray-800 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 dark:text-blue-300 uppercase text-4xl">Send us a message</h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  name="first_name"
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  name="last_name"
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  name="email"
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="phone"
                  className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="tel"
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>

          <div className="w-full lg:-mt-96 lg:w-2/5 px-8 py-6 ml-auto bg-blue-900 dark:bg-gray-800 rounded-2xl">
            <div className="flex flex-col text-white dark:text-gray-300">
              <div className="flex my-4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Office Address</h2>
                  <p className="text-gray-200 text-sm">
                    EtherX Innovations Pvt Ltd, Startup Studio, CITNC, Sy. no 73, Lingadheera Gollahalli, Kundana Hobli, Taluk, Devanahalli, Bengaluru, Karnataka 562110
                  </p>
                </div>
              </div>

              <div className="flex my-4">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-200">
                    <a href="tel:+919902896704" className="hover:underline">+91 9902896704</a>
                  </p>
                </div>
              </div>

              <div className="flex my-4">
                <div className="flex flex-col">
                  <i className="fas fa-envelope pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Send an E-mail</h2>
                  <p className="text-gray-200">
                    <a href="mailto:etherxinnovationsofficial@gmail.com" className="hover:underline">
                      etherxinnovationsofficial@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center my-4">
                <a
                  href="https://www.linkedin.com/in/meghana-c-d-05b7122ba"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118
                      2.262-3.118 1.937 0 1.961 1.811
                      1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835
                      0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142
                      0H6.87v12.139H3.095z">
                    </path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/meghana-c-d-05b7122ba"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;