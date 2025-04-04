import React from 'react'
import 'remixicon/fonts/remixicon.css';


const ProjectCard = () => {
  return (
    <div className='bg-transparent'>
        <img src="https://i.pinimg.com/736x/a3/7c/ed/a37ced0269841a93275a4435f3433bf3.jpg" alt="" className='h-[50vh] w-[40vh] absolute z-20 right-40' />
        <div>
            <a href=""><i class="ri-github-line" className='text-black text-4xl'></i></a>
            <a href=""><i class="ri-links-fill"></i></a>
        </div>
    </div>
  )
}

export default ProjectCard