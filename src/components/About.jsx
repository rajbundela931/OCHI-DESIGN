import React from 'react'

function About() {
    return (
        <div className='w-full pt-[5vw] bg-[#CDEA68] text-black text-[4.2vw] leading-none  font-["Founders Grotest"] tracking-tighter'>
            <h1 className='pl-[1vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className="w-full border-t-[1px] mt-20 border-[#a1b562] pt-10 flex gap-5">
                <div className='w-1/2 '>
                <h1>Our approach:</h1>
                <button className='flex gap-10 items-center tracking-normal bg-zinc-900 rounded-full  text-white mt-10 text-[1rem] px-7 py-4 uppercase'>Read more
                    <div className='rounded-full bg-white w-2 h-2'></div>
                </button>
                </div>
                <div className='bg-[#839152] h-[70vh] w-1/2 rounded-3xl mr-5  overflow-hidden'><img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="Network Error" /></div>
            </div>
        </div>
    )
}

export default About
