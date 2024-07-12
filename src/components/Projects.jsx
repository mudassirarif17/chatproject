import React from 'react'
import project from "../img/image 1.png";

const Projects = () => {
    return (
        <div className='projects bg-[#19376D]'>

            <div className="sub-projects w-[80vw] mx-auto py-5">

                <h1 className='text-white text-3xl mb-8'>PROJECTS</h1>

                <div className="cards flex flex-col md:flex-row justify-around">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">

                        <div className='card rounded-lg bg-[#576CBC] md:w-[21vw] py-1 '>

                            <div className="img py-3">
                                <img className='md:w-[19vw]  h-100  mx-auto' src={project} alt="" />
                            </div>

                            <div className="desc">
                                <h1 className='text-white md:w-[19vw] w-[90%] mx-auto font-bold'>Project A</h1>
                                <p className='text-white md:w-[19vw] w-[90%] mx-auto '>This is a project made to learn the latest languages by building an app.</p>
                                <div className="skill md:w-[19vw] w-[90%] mx-auto font-semibold flex justify-between text-white my-3">
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                </div>
                                <div className="code md:w-[19vw] w-[90%] mx-auto font-semibold flex justify-center  text-white my-3 gap-2">
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>Demo</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>Source</span>
                                </div>
                            </div>

                        </div>

                        <div className='card rounded-lg bg-[#576CBC] md:w-[21vw] py-1 '>

                            <div className="img py-3">
                                <img className='md:w-[19vw]  h-100  mx-auto' src={project} alt="" />
                            </div>

                            <div className="desc">
                                <h1 className='text-white md:w-[19vw] w-[90%] mx-auto font-bold'>Project A</h1>
                                <p className='text-white md:w-[19vw] w-[90%] mx-auto '>This is a project made to learn the latest languages by building an app.</p>
                                <div className="skill md:w-[19vw] w-[90%] mx-auto font-semibold flex justify-between text-white my-3">
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                </div>
                                <div className="code md:w-[19vw] w-[90%] mx-auto font-semibold flex justify-center  text-white my-3 gap-2">
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>Demo</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>Source</span>
                                </div>
                            </div>

                        </div>

                        <div className='card rounded-lg bg-[#576CBC] md:w-[21vw] py-1 '>

                            <div className="img py-3">
                                <img className='md:w-[19vw]  h-100  mx-auto' src={project} alt="" />
                            </div>

                            <div className="desc">
                                <h1 className='text-white md:w-[19vw] w-[90%] mx-auto font-bold'>Project A</h1>
                                <p className='text-white md:w-[19vw] w-[90%] mx-auto '>This is a project made to learn the latest languages by building an app.</p>
                                <div className="skill md:w-[19vw] w-[90%] mx-auto font-semibold flex justify-between text-white my-3">
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>React</span>
                                </div>
                                <div className="code md:w-[19vw] w-[90%] mx-auto font-semibold flex justify-center  text-white my-3 gap-2">
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>Demo</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>Source</span>
                                </div>
                            </div>

                        </div>

                        

                    </div>




                </div>

            </div>

        </div>
    )
}

export default Projects