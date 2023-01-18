import React from 'react';

const TeamComponent = ({item}) => {
  return (
    <div className='flex flex-col shadow shadow-slate-600 max-w-sm bg-white'>
      <img src={item.image} alt='team' className='h-64 mx-auto' />
      <div className='bg-customBlue-300 text-white px-6 py-8'>
        <h2>{item.first}</h2>
        <h1 className='font-semibold text-xl'>{item.second}</h1>
        <br></br>
        <p className='text-base'>{item.third}</p>
        <p className='text-base mb-2'>{item.forth}</p>
        <p className='text-sm'>{item.fifth}</p>
      </div>
    </div>
  );
}

export default TeamComponent;
