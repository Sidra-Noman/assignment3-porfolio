import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai";


const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold italic">Siddnom</h1>
        
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-16 mt-4 md:mt-0">
            <li className="menuLink"><Link href="#hero" className="hover:text-red-500">Home</Link></li>
            <li className="menuLink"><Link href="#about" className="hover:text-red-500">About</Link></li>
            <li className="menuLink"><Link href="#project" className="hover:text-red-500">Project</Link></li>
            <li className="menuLink"><Link href="#skills" className="hover:text-red-500">Skills</Link></li>
            <li className="menuLink"><Link href="#contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
