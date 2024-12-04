import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "motion/react"
import LocomotiveScroll from 'locomotive-scroll';
function LandingPage() {
    const locomotiveScroll = new LocomotiveScroll();

    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.6' className='w-full h-screen text-white bg-zinc-900 pt-1'>
            <div className='TextStructure mt-40 '>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return <div className='masker px-20'>
                        <div className='w-fit flex'>
                            {index === 1 && (
                                <motion.div initial={{width:0}} 
                                animate={{width: "9vw"}} 
                                transition={{ease:[0.25, 0.5, 0.5, 1], duration: 1}} 
                                className='mr-1 rounded-lg w-[9vw] h-[5vw] relative mt-4'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                </motion.div>)}
                            <h1 className='text-[7vw] uppercase leading-[6.5vw] tracking-tighter font-bold font-["Founders_Grotest"]'>{item}</h1>
                        </div>
                    </div>
                })}
                <div className='border-t-[1px]  border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
                    <div className="start flex justify-center items-center gap-1">
                        <div className="uppercase px-4 py-1 text-sm font-light border-zinc-800 border-[2px] rounded-full">Start the project</div>
                        <div className="rotate-[45deg] border-[1px] justify-center items-center flex border-zinc-600  rounded-full w-10 h-10 "><FaArrowUpLong /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
