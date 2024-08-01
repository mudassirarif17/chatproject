import React from 'react';
import { FaEnvelope } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import '../App.css';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer shadow-top  bg-[#19376D]'>
        <div className="footer-sub md:w-[80vw] mx-auto flex md:flex-row flex-col">

            <div className="footer-left md:w-[40vw] flex justify-center items-center">
                <div className="desc">
                    <h1 className='text-white text-4xl font-semibold text-center'>Contact</h1>
                    <p className='text-white'>Feel free to reach out!</p>
                </div>
            </div>

            <div className="footer-right md:w-[40vw] flex justify-center">
                <div className="contact">

                    <a target='_blank' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwdQRGVnKqPBgWrvnzSLBZjsRpqvlmSkSWkvLLxwPPjsCVhpgjmvnMHBsgxNWNNtFgmdV' className='flex items-center gap-5 my-5'>
                        <div><FaEnvelope className='text-white text-3xl'/></div>
                        <p className='text-white font-semibold'>mudassirinoxent@gmail.com</p>
                    </a>

                    <a target='_blank' href='https://www.linkedin.com/in/mudassir-arif-42a918242/' className='flex items-center gap-5 my-5'>
                        <div><GrLinkedin className='text-white text-3xl'/></div>
                        <p className='text-white font-semibold text-sm'>www.linkedin.com/in/mudassir-arif-42a918242/</p>
                    </a>

                    <a target='_blank' href='https://github.com/mudassirarif17' className='flex items-center gap-5 my-5'>
                        <div><FaGithub className='text-white text-3xl'/></div>
                        <p className='text-white font-semibold'>github.com/mudassirarif17</p>
                    </a>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer