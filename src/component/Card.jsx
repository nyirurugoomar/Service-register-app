import React from 'react';

function Card({person}) {
  return(
    <div className='h-full w-screen'> 
    <div className=''>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-10'>
        <h2 className='rounded-3xl border-[1px] cursor-pointer  border-[#dadada] hover:bg-[#08AEEA] text-center p-2 text-black hover:text-white'>{person.name}</h2>
      </div>
    </div>
    </div>
  );
}

export default Card;