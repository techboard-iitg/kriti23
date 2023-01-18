import React from 'react';

const TeamComponent = ({item}) => {
  return (
    <div className='flex flex-col shadow shadow-slate-600 max-w-sm bg-white'>
      <img src={item.img_url} alt= {item.alt} className='h-64 mx-auto' />
      <div className='bg-customBlue-300 text-white px-6 py-8'>
        <h2>{item.post}</h2>
        <h1 className='font-semibold text-xl'>Technical Board</h1>
        <br></br>
        <p className='text-base'>{item.name}</p>
        <p className='text-base mb-2'>{item.phone_number}</p>
        <p className='text-sm'>{item.email}</p>
      </div>
    </div>
  );
}

export default TeamComponent;
