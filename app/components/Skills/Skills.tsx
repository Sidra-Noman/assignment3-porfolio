import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32 w-100% max-w[1200px] m-0 px-4 ' >
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div >
                <h2 className='text-4xl md:text-5xl text-center ' data-aos="zoom-in-up">My Skills</h2>
                <p className='text-gray-950 pt-2 text-center '  >As an SEO expert, I bring a deep understanding of the technical and strategic elements that drive successful search engine optimization. My expertise lies in optimizing websites for better visibility and ranking on search engines, while ensuring exceptional user experience. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I create well-structured, efficient, and SEO-friendly code that enhances both performance and searchability. Specializing in Next.js, I build high-performance, server-rendered web applications that not only load quickly but are also optimized for SEO from the ground up. My skills allow me to bridge the gap between modern web development and effective SEO strategies, ensuring that websites not only look great but also perform excellently in search engine rankings.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-pink-800 text-3xl sm:text-4xl text-center '>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up" >Typescript</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                        <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
                        
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">HTML</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">JAVASCRIPT</h2>
                        
                    </div>
                   
                   
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
