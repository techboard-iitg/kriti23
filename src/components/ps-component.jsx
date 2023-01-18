import React from "react";

const PSComponent = ({ title, date, link }) => {
  return (
    <div className='bg-white p-6 w-[20rem]'>
      <h1 className='text-xl mb-5'> {title} </h1>
      <div className='flex justify-between items-center'>
        <div>Date: {date}</div>
        <button className='bg-customBlue-300 text-white px-4 py-2 rounded'>
          <a href={link}>View More</a>
        </button>
      </div>
    </div>
  );
};

export default PSComponent;
