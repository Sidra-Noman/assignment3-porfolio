import React from 'react'
import Image from 'next/image'
import Header from '../Header/Header';
import sidraImage from'../images/profilepic.png'



const Hero = () => {
  return (
   
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/images/profilepic.png)]  bg-cover'
    style={{backgroundSize:"25%",backgroundPosition:"left 100px top 100px"}}>
          <Header/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60)}'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[80px] font-bold leading-tightflex justify-center items-center'>
          <div className='pt-16 text-blue-950'>
            <p data-aos="zoom-in-up"> I am</p>
            <p data-aos="zoom-in-up">Sidra</p>
            <p data-aos="zoom-in-up">Noman</p>
          </div>
        </div>
      </div>
  
     
    </div>
  );
};

export default Hero
