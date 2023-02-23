import React from "react";
import { Link } from "react-router-dom";

const PSResultComponent = ({ title, result_link, link, winner}) => {
  return (
    <div className='bg-white p-6 md:w-[20rem] w-[16rem] md:min-h-[10.3rem] min-h-[9rem] flex justify-between flex-col shadow-sm shadow-gray-400 drop-shadow m-1'>
      <h1 className='md:text-xl text-lg mb-5'> {title} </h1>
      <p>🏆 {winner}</p>
      <div className='flex justify-between items-center md:text-base text-xs'>
        <Link to={`/points-table/${result_link}`}><p className="text-blue-500 underline">Check Result</p></Link>
        <button className='bg-customBlue-300 text-white px-4 py-2'>
          <a href={link} target="_blank">View More</a>
        </button>
      </div>
    </div>
  );
};

export default PSResultComponent;
