import React from 'react';
import html from "../img/image 5.png";

const Experience = () => {
    let exp = [
        {
            img : html,
            text : "HTML"
        },
        {
            img : html,
            text : "HTML"
        },
        {
            img : html,
            text : "HTML"
        },
        {
            img : html,
            text : "HTML"
        },
        {
            img : html,
            text : "HTML"
        },
        {
            img : html,
            text : "HTML"
        },
        {
            img : html,
            text : "HTML"
        },
        {
            img : html,
            text : "HTML"
        },
]
    return (
        <div className='experience bg-[#19376D]'>

            <div className="sub-exp w-[100vw] md:w-[80vw] mx-auto">

                <div className="exp-left mx-auto w-[90vw] md:mx-0 md:w-[30vw]">

                    <h1 className='text-white text-3xl'>EXPERIENCE</h1>

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

                <div className="exp-right"></div>

            </div>

        </div>
    )
}

export default Experience