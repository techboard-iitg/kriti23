import React from 'react';
import { Link } from "react-router-dom";

const PSHomeComponent = ({item}) => {
  return (
    <div className='flex justify-between flex-col w-[30rem] min-h-[10.3rem] bg-white border-2 border-customBlue-300' >
      <div className='relative border-b-2 border-customBlue-300 z-0'>
        <h1 className='absolute bottom-0 left-0 text-5xl p-4 text-white z-10'>{item.title}</h1>
        <div className='absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-[30rem] h-20 z-0'></div>
        <img src={item.image} alt={item.alt} className='h-64 mx-auto z-0' style={{position: "initial", width:'100%'}} />
      </div>
      <div className='text-black px-6 py-8'>
        <p className='text-base'>{item.desc}</p>
        <Link to="/problem-statement" className='text-sm text-blue-500 underline cursor-pointer'>Learn More</Link>
      </div>
    </div>
  );
}

export default PSHomeComponent;
