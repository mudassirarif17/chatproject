import React from 'react';
import hero from "../img/hero.png";


const HeroSection = () => {
    return (
        <>
            <div className="hero bg-[#19376D] flex flex-col md:flex-row justify-center items-center">
                <img className='h-[300px] w-[300px] md:h-[500px] md:w-[500px]' src={hero} alt="" />
                <div className="desc md:w-[50vw] flex flex-col justify-center items-center md:justify-start md:items-start">
                    <h1 className='text-white text-4xl font-semibold px-5'>Hi, I’m Mudassir</h1>
                    <p className='text-white text-xl  px-5 py-6 text-center md:text-left'>
                        I’m a full-stack developer with 5 years
                        of experience using React and NodeJS.
                        Reach out if you’d like to learn more!
                    </p>
                    <button className='bg-[#576CBC] mb-10 text-white px-4 py-2 mx-5 font-semibold rounded-full'>Contact Me</button>
                </div>
            </div>
        </>
    )
}

export default HeroSection