import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-gray-500 text-white p-4">
    <div className='container rx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold italic'>Siddnom</h1>       
      <nav>
              
<ul className="flex gap-10 lg;gap-16  md:flex">

<li className='menuLink'><a href="#hero" className=' hover:text-red-500'>Home</a></li>
<li className='menuLink'><a href="#about" className=' hover:text-red-500'>About </a></li>
<li className='menuLink'><a href="#project" className=' hover:text-red-500'>Project</a></li>
<li className='menuLink'><a href="#skills" className=' hover:text-red-500'>Skills</a></li>
<li className='menuLink'><a href="#contact" className=' hover:text-red-500'>Contact</a></li>

</ul>

            </nav>
            </div>
        </header>
      
   

  );
};

export default Header;