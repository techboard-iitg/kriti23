import React from 'react';

const PSHomeComponent = ({item}) => {
  return (
    <div className='flex flex-col w-2/6 bg-white border-2 border-customBlue-300'>
      <div className='relative border-b-2 border-customBlue-300 z-0'>
        <h1 className='absolute bottom-0 left-0 text-5xl p-4 text-white'>{item.title}</h1>
        <img src={item.image} alt={item.alt} className='h-64 mx-auto z-0' style={{position: "initial"}} />
      </div>
      <div className='text-black px-6 py-8'>
        <p className='text-base'>{item.desc}</p>
        <a href={item.link} className='text-sm text-blue-500 underline cursor-pointer'>Learn More</a>
      </div>
    </div>
  );
}

export default PSHomeComponent;
