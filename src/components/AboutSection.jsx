import React from 'react';
import image2 from "../img/image 2.png"
import image3 from "../img/image 3.png"
import image4 from "../img/image 4.png"
import avatar from '../img/maddyavtar.png'

const AboutSection = () => {
    return (
        <>
            <div className="about bg-[#19376D]">

                <div className="sub-about w-[80vw] mx-auto md:bg-[#0C0C0C] flex rounded-lg">

                    <div className="sub-about-left w-[40vw] hidden md:block">
                        <h1 className='text-white text-3xl mx-10 py-5'>ABOUT</h1>
                        <img className='w-[400px]' src={avatar} alt="" />
                    </div>

                    <div className="sub-about-right w-[90vw] md:w-[40vw] my-auto">

                        <div className="card flex items-center md:w-[90%] w-[90vw] my-4 md:my-0 cursor-pointer hover:bg-gray-500 md:p-5 rounded-xl">
                            <img className='w-[50px] h-[50px]' src={image2} alt="" />
                            <div className='desc'>
                                <h1 className='text-white text-xl font-semibold'>Frontend Developer</h1>
                                <p className='text-white'>I’m a front-end developer with experience
                                in building responsive and optimized sites</p>
                            </div>
                        </div>

                        <div className="card flex items-center md:w-[90%] w-[90vw] my-4 md:my-0 cursor-pointer hover:bg-gray-500 md:p-5 rounded-xl">
                            <img className='w-[50px] h-[50px]' src={image3} alt="" />
                            <div className='desc'>
                                <h1 className='text-white text-xl font-semibold'>Backend Developer</h1>
                                <p className='text-white'>I have experience developing fast and
                                optimised back-end systems and APIs</p>
                            </div>
                        </div>

                        <div className="card flex items-center md:w-[90%] w-[90vw] my-4 md:my-0 cursor-pointer hover:bg-gray-500 md:p-5 rounded-xl">
                            <img className='w-[50px] h-[50px]' src={image4} alt="" />
                            <div className='desc'>
                                <h1 className='text-white text-xl font-semibold'>UI Designer</h1>
                                <p className='text-white'>I have designed multiple landing pages and
                                have created design systems as well</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection