import { motion } from 'framer-motion'
import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

function Marquee() {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div data-scroll data-scroll-section data-scroll-speed='.022' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#044D43] mt-10'>
            <div  className='border-y-[1px] border-zinc-300 flex whitespace-nowrap  overflow-hidden tracking-tighter'>
                <motion.h1 
                initial ={{x:"0"}}
                animate ={{x:"-100%"}}
                transition={{repeat: Infinity, ease:"linear", duration: 5}} 
                className='text-[20vw]  uppercase font-bold leading-none font-["Neue_Montreal"]'>we are ochi</motion.h1>
                <motion.h1  
                 initial ={{x:"0"}}
                 animate ={{x:"-100%"}}
                 transition={{repeat: Infinity, ease:"linear", duration: 5}} 
                className='text-[20vw] uppercase font-bold leading-none font-["Neue_Montreal"]'>we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee
