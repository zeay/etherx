import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import dpiitImg from '../images/dpiit.png';
import msmeImg from '../images/msme.png';
import citncImg from '../images/citnc.png';
import chossImg from '../images/choss.png';
import bgVideo from '../images/bgvideo.mp4';

const Hero = () => {
  return (
    <section className="relative flex flex-col overflow-hidden h-screen">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content container */}
      <div className="relative flex flex-col justify-center items-center text-center p-6 mt-20 md:mt-32 z-10 space-y-6 h-full">
        <NavBar />

        {/* Headline */}
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg mt-8">
          Empowering India’s Digital Future with Secure, Sovereign, and Smart Technologies.
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-base text-white max-w-2xl mb-14 leading-relaxed drop-shadow-md">
          We build resilient solutions for a fast-changing world empowering India to lead with data independence and restoring digital ownership back where it belongs with the user.
        </p>

        {/* Recognized and Supported */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 px-4 mt-6">
          {/* Recognized */}
          <div className="flex flex-col items-center">
            <h2 className="text-base md:text-xl font-semibold text-white mb-2 drop-shadow">
              Recognized By
            </h2>
            <div className="flex justify-center gap-4">
              <img
                src={dpiitImg}
                alt="DPIIT"
                className="h-12 md:h-14 object-contain invert brightness-200"
              />
              <img
                src={msmeImg}
                alt="MSME"
                className="h-12 md:h-14 object-contain invert brightness-200"
              />
            </div>
          </div>

          {/* Supported */}
          <div className="flex flex-col items-center">
            <h2 className="text-base md:text-xl font-semibold text-white mb-2 drop-shadow">
              Supported By
            </h2>
            <div className="flex justify-center gap-4 -mt-6 md:-mt-3">
              <img
                src={citncImg}
                alt="CITNC"
                className="h-14 md:h-20 object-contain invert brightness-200"
              />
              <img
                src={chossImg}
                alt="CHOSS"
                className="h-14 md:h-20 object-contain invert brightness-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
