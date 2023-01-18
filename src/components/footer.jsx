import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import FacebookIcon from "../assets/facebook-logo.svg";
import InstagramIcon from "../assets/instagram-logo.svg";

const Footer = () => {
  return (
    <div className='grid place-content-center justify-items-center gap-4 py-4 px-4 bg-customBlue-300 text-white text-center'>
      <div className='text-2xl font-light pb-6'>
        "<span className='font-semibold'>Competition</span>
        <span className='italic'> makes us Faster. </span>{" "}
        <span className='font-semibold'>Collaboration</span>{" "}
        <span> makes us Better.</span>"
      </div>
      {/* Social Links */}

      <div className='flex justify-center gap-8 border-t-2 px-8 pt-6 border-customOrange-100 w-fit'>
        <a href='tel:8003825647' target='_blank' rel='noreferrer'>
          <PhoneIcon className='h-4' />
        </a>
        <a
          href='https://www.facebook.com/techboard.iitg/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={FacebookIcon} alt='facebook' className='h-4' />
        </a>
        <a
          href='https://www.instagram.com/techboard.iitg/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={InstagramIcon} alt='instagram' className='h-4' />
        </a>
        <a href='mail:techsec@iitg.ac.in' target='_blank' rel='noreferrer'>
          <EnvelopeIcon className='h-4' />
        </a>
      </div>
      <div className="mb-[-0.5rem]">
        <span className='text-sm'>©</span> Tech Board, IIT Guwahati.
      </div>
      <div>
        <span className='text-sm'>
          For any queries regarding website contact Prakhar Rajpali
        </span>
      </div>
    </div>
  );
};

export default Footer;
