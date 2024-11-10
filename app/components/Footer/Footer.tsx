import React from 'react'
import Link from "next/link"
import Image from "next/image";


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center mt-14 p-3'>
      <p className='mb-4'>@siddnom | All rights reserved 2024.</p>
      <div className='flex justify-center'>
        <ul className='flex flex-wrap justify-center gap-4 sm:gap-6'>
          <li>
            <Link href="https://www.facebook.com/sidra.noman.73">
              <Image 
                src="/images/Facebook_Logo_2023.png"
                alt='facebook'
                width={35}
                height={35}       
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/sidra-noman-69813028b">
              <Image 
                src="/images/circle-linkedin.png"
                alt='linkedin'
                width={35}
                height={35}       
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/sidnoms_foodies?igsh=MWh0NnNkN28zdnBsbQ==">
              <Image 
                src="/images/Instagram_icon.png"
                alt='instagram'
                width={35}
                height={35}       
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;