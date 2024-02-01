import React from 'react';
import CountDown from '../Components/CountDown';

const Home = () => {
  return (
    <div className='bg-purple-900 w-screen h-screen text-yellow-300 text-center pt-8 pb-24 font-extrabold flex flex-col justify-center items-center'>
      <h1 className='text-6xl size-big'>IEEE Triverse</h1>
      <h3 className='mb-8 text-xl'>Universe of Tech</h3>
      <h6 className='mb-8 font-medium' >Join us for an amazing 3 day event at Bennett University ,Greater Noida</h6>
      <div className='mt-12 mb-8'>
        <CountDown />
      </div>
      <button className='bg-yellow-500 border-black py-2 px-8 rounded-xl text-black'>Register Now</button>

      



    </div>
  );
};

export default Home;

