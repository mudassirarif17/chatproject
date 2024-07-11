import React from 'react'
import project from "../img/image 1.png";

const Projects = () => {
  return (
    <div className='projects bg-[#19376D]'>

        <div className="sub-projects w-[80vw] mx-auto">

            <h1 className='text-white text-3xl mb-8'>PROJECTS</h1>

            <div className="cards">

                <div className='card rounded-lg bg-[#576CBC] w-[22vw] h-[50vh]'>

                    <div className="img py-3">
                        <img className='w-[20vw] h-100  mx-auto' src={project} alt="" />
                    </div>

                    <div className="desc">
                        <h1 className='text-white w-[20vw] mx-auto font-bold'>Project A</h1>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Projects