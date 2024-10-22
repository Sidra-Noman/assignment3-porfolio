import React from 'react'

const Footer = () => {
  return (
    
       <footer className='bg-gray-900 text-white text-center mt-16 py-6'>
                    @siddnom | All rights reserved 2024.
        <div className=" ">
          <ul className='flex gap-6 '>
     <li> <a href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" className='w-9 h-9 ' />
      </a></li>
     <li> <a href="#">
        <img src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" alt="Twitter" className='w-9 h-9 '/>
      </a></li>
     <li> <a href="#">
        <img src="https://png.pngtree.com/element_our/sm/20180506/sm_5aeee1ca3107b.jpg" alt="Instagram" className='w-9 h-9 '/>
      </a></li>
      </ul>
      </div>
       </footer>
  
  );
};

export default Footer;
