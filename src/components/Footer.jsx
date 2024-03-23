import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white footer py-8 mt-20">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 py-7">
        <h1 className="text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-4/5">
          <span className="text-yellow-500 text-5xl">Join</span><span className='font-times text-black'>GUIDANCE</span> <span className='font-perpetua text-black'>educare</span>Today
        </h1>
        <div className="flex pl-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
      <hr className="my-8 border-t-2 border-gray-300" />

      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 px-10 py-8 text-center'>
        <ul>
          <li className='text-xl mb-4'><p>Company</p></li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Updates</li>
        </ul>
        <ul>
          <li><p className='text-xl mb-4'>Our Courses</p></li>
          <li>XYZ</li>
          <li>ABC</li>
          <li>DEF</li>
        </ul>
        <ul>
          <li><p className='text-xl mb-4'>Help & Support</p></li>
          <li>XYZ</li>
          <li>ABC</li>
          <li>DEF</li>
        </ul>
      </div>

      <div className="mx-4 my-4 text-center">
        <p className='my-4'>Connect Us on</p>
        <span>
          <FontAwesomeIcon className='h-6 w-6 px-2' icon={faInstagram} />
        </span>

        <span>
          <FontAwesomeIcon className='h-6 w-6 px-2' icon={faFacebook} />
        </span>
        <span>
          <FontAwesomeIcon className='h-6 w-6 px-2' icon={faYoutube} />
        </span>
        <span>
          <FontAwesomeIcon className='h-6 w-6 px-2' icon={faTwitter} />
        </span>
      </div>

      <hr />

      <div className="container mx-auto text-center py-5">
        <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
