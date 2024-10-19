import React from 'react';
import html from "../img/image 5.png";
import css from "../img/image 6.png";
import react from "../img/image 7.png";
import node from "../img/image 8.png";
import graph from "../img/image 9.png";
import mongo from "../img/image 10.png";
import figma from "../img/image 11.png";
import Aptechlogo from "../img/alogo.png";
import tailwind from "../img/tailwind.png";
import mysql from "../img/mysql.png";
import git from "../img/git.png";
import php from "../img/php.png";
import laravel from "../img/laravel.png";
import next from "../img/next.png";

const Experience = () => {
    let exp = [
        {
            img: html,
            text: "HTML"
        },
        {
            img: css,
            text: "CSS"
        },
        {
            img: react,
            text: "React JS"
        },
        {
            img: node,
            text: "Node JS"
        },
        {
            img: graph,
            text: "Graph QL"
        },
        {
            img: mongo,
            text: "MONGO DB"
        },
        {
            img: figma,
            text: "FIGMA"
        },
        {
            img: tailwind,
            text: "Tailwind"
        },
        {
            img: mysql,
            text: "MySQL"
        },
        {
            img: git,
            text: "GIT"
        },
        {
            img: php,
            text: "PHP"
        },
        {
            img: next,
            text: "Next.JS"
        },
    ]

    let exp_place = [
        {
            title: "IT Instructor, Aptech Pakistan",
            date: "June, 2023 - Present",
            work1: "Worked on Frontend Technologies (HTML, CSS, JS, React.JS, Next.JS, Tailwind Css, Material UI)",
            work2: "Worked on Backend Technologies (PHP, Laravel, Express.JS, Next.JS )",
            work3: "Worked on Database (MYSQL, Mongo db, SQl Server)",
            image: Aptechlogo
        }
    ];


    return (
        <div id='experience' className='experience bg-[#19376D] py-10'>

            <div className="sub-exp flex-col flex md:flex-row justify-between w-[100vw] md:w-[80vw] mx-auto">

                <div className="exp-left ">

                    <h1 className='text-white text-3xl px-5 md:px-0'>EXPERIENCE</h1>

                    <div className="grid grid-cols-3 gap-4 p-4">
                        {
                            exp.map((data, index) => (
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
                    {
                        exp_place.map((data, index) => (
                            <div className="card my-5 flex flex-col justify-center items-center w-[90%] mx-auto md:w-[32vw] md:mx-0 bg-[#19376D] shadow-2xl shadow-black rounded-xl py-6 px-8">
                                <div className="img mr-8">
                                    <img className='w-[100px] pb-5' src={data.image} alt="" />
                                </div>
                                <div className="desc text-white">
                                    <h1 className='text-2xl'>{data.title}</h1>
                                    <p className='text-sm text-gray-300'>{data.date}</p>
                                    <ul className='text-sm px-8 list-disc'>
                                        <li>{data.work1}</li>
                                        <li>{data.work2}</li>
                                        <li>{data.work3}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }

                    {/* <div className="card my-5 flex justify-center items-center w-[90vw] mx-auto md:w-[32vw] md:mx-0 bg-[#19376D] shadow-2xl shadow-black rounded-xl py-2">
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
                    </div> */}



                </div>

            </div>

        </div>
    )
}

export default Experience