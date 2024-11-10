import React from 'react'
import Image from 'next/image'

import sidraImage from'../images/profilepic.png'



// const Hero = () => {
//   return (
   
//       <div
//   id='hero'
//   className='min-h-screen bg-no-repeat bg-cover bg-[url(/images/profilepic.png)] sm:bg-[length:40%] md:bg-[length:30%] lg:bg-[length:25%] xl:bg-[length:20%]'
//   style={{
//     backgroundPosition: 'left 100px top 150px',
//   }}
// >
//           <Header/>
//      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60)}'>
//          <div className='hidden lg:block'></div>
//        <div className='text-[80px] sm:text-[80px] font-bold leading-tightflex justify-center items-center'>
//          <div className='pt-16 text-blue-950'>
//            <p data-aos="zoom-in-up"> I am</p>
//             <p data-aos="zoom-in-up">Sidra</p>
//             <p data-aos="zoom-in-up">Noman</p>
//           </div>
//        </div>
//      </div>
  
     
//     </div>
//   );
// };
const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover bg-[url(/images/profilepic.png)] sm:bg-[length:45%] md:bg-[length:35%] lg:bg-[length:25%] xl:bg-[length:25%]"
      style={{
        backgroundPosition: "left 100px top 150px",
      }}
    >
  
      <div className="container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-blue-950">
          <div className="pt-16 lg:pt-0">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" data-aos="zoom-in-up">
              I am
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" data-aos="zoom-in-up">
              Sidra
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" data-aos="zoom-in-up">
              Noman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



