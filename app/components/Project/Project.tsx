import React from 'react'
import Heading from '../Heading/Heading';
import Cards from '../Cards/Cards';
const data = [
    {
    id: 0,
    title: "Countdown Timer",
    desc :"A Next.js and Typescript powered wedsite to track time with an interactive countdown feature.",
    tags :["Next.js","Node", "CSS","Typescript"], 

    },
    {
        id: 1,
        title: "Weather Widget",
        desc :"A Next.js and Typescript based tool for fetching and displaying real-time weather data.",
        tags :["Next.js","Node", "CSS","Typescript"], 
    
        },
        {
            id: 2,
            title: "Static and Dynamic resume",
            desc :"A Typescript based interactive resume based with HTML,CSS,Typescript,alloeing users to showcase their skills dynamically.",
            tags :["Next.js","Node", "CSS","Typescript"], 
        
            },
            

];


const Project = () => {
  return (
    <div id='project' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
        {data.map((el) =>(<Cards
        key={el.id}
        title={el.title}
        desc={el.desc}
        tags={el.tags}

        
        />))}
      </div>
    </div>
  )
}

export default Project
