import React from 'react';
import html from "../img/image 5.png";
import css from "../img/image 6.png";
import react from "../img/image 7.png";
import node from "../img/image 8.png";
import graph from "../img/image 9.png";
import mongo from "../img/image 10.png";
import figma from "../img/image 11.png";
import google from "../img/image 15.png";

const Experience = () => {
    let exp = [
        {
            img : html,
            text : "HTML"
        },
        {
            img : css,
            text : "CSS"
        },
        {
            img : react,
            text : "React JS"
        },
        {
            img : node,
            text : "Node JS"
        },
        {
            img : graph,
            text : "Graph QL"
        },
        {
            img : mongo,
            text : "MONGO DB"
        },
        {
            img : figma,
            text : "FIGMA"
        },
]
    return (
        <div className='experience bg-[#19376D] py-10'>

            <div className="sub-exp flex-col flex md:flex-row justify-between w-[100vw] md:w-[80vw] mx-auto">

                <div className="exp-left ">

                    <h1 className='text-white text-3xl px-5 md:px-0'>EXPERIENCE</h1>

                    <div className="grid grid-cols-3 gap-4 p-4">
                    {
                        exp.map((data , index)=>(
                            <div className='flex flex-col items-center'>
                            <div className='bg-[#3e6cc0] w-[90px] h-[90px] rounded-full flex justify-center items-center'>
                                <img className='w-[60px]' src={data.img} alt="" />
                            </div>
                            <p className='text-white'>{data.text}</p>
                        </div>
                        ))
                    }
                    </div>

                </div>

                <div className="exp-right">

                    <div className="card my-5 flex justify-center items-center w-[90vw] mx-auto md:w-[32vw] md:mx-0 bg-[#19376D] shadow-2xl shadow-black rounded-xl py-2">
                        <div className="img mr-8">
                            <img src={google} alt="" />
                        </div>
                        <div className="desc text-white">
                            <h1 className='text-2xl'>Software Engineer, Google</h1>
                            <p className='text-sm text-gray-300'>Sept, 2022 - Present</p>
                            <ul className='text-sm px-8 list-disc'>
                                <li>Worked on Google Maps</li>
                                <li>Worked on Google Maps</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card my-5 flex justify-center items-center w-[90vw] mx-auto md:w-[32vw] md:mx-0 bg-[#19376D] shadow-2xl shadow-black rounded-xl py-2">
                        <div className="img mr-8">
                            <img src={google} alt="" />
                        </div>
                        <div className="desc text-white">
                            <h1 className='text-2xl'>Software Engineer, Google</h1>
                            <p className='text-sm text-gray-300'>Sept, 2022 - Present</p>
                            <ul className='text-sm px-8 list-disc'>
                                <li>Worked on Google Maps</li>
                                <li>Worked on Google Maps</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card my-5 flex justify-center items-center w-[90vw] mx-auto md:w-[32vw] md:mx-0 bg-[#19376D] shadow-2xl shadow-black rounded-xl py-2">
                        <div className="img mr-8">
                            <img src={google} alt="" />
                        </div>
                        <div className="desc text-white">
                            <h1 className='text-2xl'>Software Engineer, Google</h1>
                            <p className='text-sm text-gray-300'>Sept, 2022 - Present</p>
                            <ul className='text-sm px-8 list-disc'>
                                <li>Worked on Google Maps</li>
                                <li>Worked on Google Maps</li>
                            </ul>
                        </div>
                    </div>

                   

                </div>

            </div>

        </div>
    )
}

export default Experience