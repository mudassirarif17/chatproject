import React from 'react'
import mystery from "../img/mystery.png";
import dashboard from "../img/dashboard.png";
import tuitional from "../img/tuitional.png";
import crime from "../img/crime.png";
import figmatocode from "../img/figmatocode.png";
import minti from "../img/minti.png";
import study from "../img/study.png";
import eamb from "../img/eamb.png";

const Projects = () => {
    const projects = [
        {
            name : "Mystery Message",
            desc : "",
            image : mystery,
            skill1 : "Next.Js",
            skill2 : "Shadecn",
            skill3 : "NextAuth.js",
            skill4 : "Zod",
            source : "https://github.com/mudassirarif17/mysterymessages",
             demo : ""
        },
        {
            name : "Good Shop / Dashboard",
            desc : "",
            image : dashboard,
            skill1 : "React.Js",
            skill2 : "Tailwind",
            skill3 : "Express.JS",
            source : "https://github.com/mudassirarif17/ecommerce-react/",
            demo : ""
        },
        {
            name : "Tuitional Education",
            desc : "",
            image : tuitional,
            skill1 : "React.Js",
            skill2 : "Tailwind",
            skill3 : "",
            source : "https://github.com/mudassirarif17/ecommerce-react/",
            demo : "https://onboard-tut.netlify.app/"
        },
        {
            name : "Crime Portal",
            desc : "",
            image : crime,
            skill1 : "React.Js",
            skill2 : "Tailwind",
            skill3 : "",
            source : "",
            demo : "https://poetic-cannoli-738c64.netlify.app/"
        },
        {
            name : "Figma To React",
            desc : "",
            image : figmatocode,
            skill1 : "React.Js",
            skill2 : "Css3",
            skill3 : "",
            source : "",
            demo : "https://figmatoreact-landing-page.netlify.app/"
        },
        {
            name : "Figma To React",
            desc : "",
            image : minti,
            skill1 : "React.Js",
            skill2 : "Css3",
            skill3 : "",
            source : "",
            demo : "https://minti-landing-page.netlify.app/"
        },
        {
            name : "Atrac Consultant",
            desc : "",
            image : study,
            skill1 : "HTML",
            skill2 : "CSS3",
            skill3 : "JS",
            source : "",
            demo : "https://atrac.netlify.app/"
        },
        {
            name : "E Ambulance",
            desc : "",
            image : eamb,
            skill1 : "Laravel",
            skill2 : "MYSQL",
            skill3 : "PHP",
            source : "https://github.com/codewarriorsrapid/code_warriors_techwiz_rapid_rescue",
            demo : ""
        },
    ]
    return (
        <div id='projects' className='projects bg-[#19376D] py-10'>

            <div className="sub-projects w-[80vw] mx-auto py-5">

                <h1 className='text-white text-3xl mb-8'>PROJECTS</h1>

                <div className="cards flex flex-col md:flex-row justify-around">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                        {
                            projects.map((data , index)=>(
                                <div className='card rounded-lg bg-[#576CBC] md:w-[23vw] py-1 '>

                            <div className="img py-3">
                                <img className='md:w-[21vw] w-[90%]  h-100  mx-auto' src={data.image} alt="" />
                            </div>

                            <div className="desc">
                                <h1 className='text-white md:w-[21vw] w-[90%] mx-auto font-bold'>{data.name}</h1>
                                <p className='text-white md:w-[21vw] w-[90%] mx-auto '>This is a project made to learn the latest languages by building an app.</p>
                                <div className="skill md:w-[21vw] w-[90%] mx-auto font-semibold flex justify-between text-white my-3">
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>{data.skill1}</span>
                                    <span className='bg-[#19376D] px-3 rounded-2xl'>{data.skill2}</span>
                                    <span className={`bg-[#19376D] px-3 rounded-2xl ${data.skill3 == "" ? "hidden" : ""}`}>{data.skill3}</span>
                                </div>
                                <div className="code md:w-[19vw] w-[90%] mx-auto font-semibold flex justify-center  text-white my-3 gap-2">
                                    <a href={data.demo} target='_blank' className={`bg-[#19376D] ${data.demo == "" ? "hidden" : ""} px-3 rounded-2xl`}>Demo</a>
                                    <a href={data.source} target='_blank' className={`bg-[#19376D] ${data.source == "" ? "hidden" : ""} px-3 rounded-2xl`}>Source</a>
                                </div>
                            </div>

                        </div>
                            ))
                        }
                        

                        {/* <div className='card rounded-lg bg-[#576CBC] md:w-[21vw] py-1 '>

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

                        </div> */}

                        {/* <div className='card rounded-lg bg-[#576CBC] md:w-[21vw] py-1 '>

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

                        </div> */}

                        

                    </div>




                </div>

            </div>

        </div>
    )
}

export default Projects