import React, { useState } from 'react'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";


const Navbar = () => {
    const [active, setActive] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const variants = {
        expanded: { width: "20vw" },
        nonexpanded: { width: "5vw" },
    };

    return (
        <div >
            <div onClick={()=>setIsExpanded(!isExpanded)} className={`w-[35px] h-[35px] bg-[#FF8C8C] absolute top-[58px] left-[280px] px-2 py-2 rounded-full flex justify-center items-center ${!isExpanded ? "left-[60px]" : ""}`}><FaArrowRight className='text-white' /></div>
            
            <motion.div 
                animate={isExpanded ? "expanded" : "nonexpanded"}
                variants={variants}
             className="navbar bg-[#FDFDFD]  w-[20vw] h-[100vh] flex flex-col items-center border border-r-1">

                <div className="logo flex items-center mt-12 font-semibold text-2xl"><GiReceiveMoney className='mx-3 text-4xl text-[#FF8C8C]' /><span className={!isExpanded ? "hidden" : "block"}>Money Transfer</span></div>

                <ul className="menu space-y-8 mt-4">
                    <li></li>

                    <li onClick={() => {setActive(0)}} className={`pr-5 cursor-pointer rounded-lg flex items-center font-semibold  ${active === 0 ? 'bg-[#FF8C8C] text-white py-2' : ''}`}
                    ><MdOutlineDashboardCustomize className='text-2xl mx-3' /><span className={!isExpanded ? "hidden" : "block"}>DashBoard</span></li>
                    
                    <li onClick={() => setActive(1)} className={`pr-5 cursor-pointer rounded-lg flex items-center font-semibold ${active === 1 ? 'bg-[#FF8C8C] text-white py-2' : ''}`}><FiActivity className='mx-3 text-2xl' /><span className={!isExpanded ? "hidden" : "block"}>Activity</span></li>

                    <li onClick={() => setActive(2)} className={`pr-5 cursor-pointer rounded-lg flex items-center font-semibold ${active === 2 ? 'bg-[#FF8C8C] text-white py-2' : ''}`}><SiGoogleanalytics className='mx-3 text-2xl' /><span className={!isExpanded ? "hidden" : "block"}>Analytics</span></li>

                    <li onClick={() => setActive(3)} className={`pr-5 cursor-pointer rounded-lg flex items-center font-semibold ${active === 3 ? 'bg-[#FF8C8C] text-white py-2' : ''}`}><GrTransaction className='mx-3 text-2xl' /><span className={!isExpanded ? "hidden" : "block"}>Transaction</span></li>

                    <li onClick={() => setActive(4)} className={`pr-5 cursor-pointer rounded-lg flex items-center font-semibold ${active === 4 ? 'bg-[#FF8C8C] text-white py-2' : ''}`}><IoIosHelpCircleOutline className='mx-3 text-2xl' /><span className={!isExpanded ? "hidden" : "block"}>Help Center</span></li>
                    
                </ul>
            </motion.div>
        </div>
    )
}

export default Navbar