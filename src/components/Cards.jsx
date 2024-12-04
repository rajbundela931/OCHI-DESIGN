import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center gap-5 bg-zinc-900 mt-20 px-10'>
        <div className="cardContainer w-1/2 h-[50vh]">
            <div className="card justify-center items-center flex relative w-full h-full bg-[#004d43] rounded-xl">
                <img className='w-32 absolute' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='bottom-0 absolute left-0 border-[1px] border-[#CDEA68] text-[#CDEA68] text-[1vw] rounded-full m-6 p-1'>&#169; 2019-2022</button>
            </div>
        </div>
        <div className="cardContainer flex items-center gap-5 w-1/2 h-[50vh]">
            <div className="card w-1/2 justify-center flex items-center relative h-full bg-[#212121] rounded-xl">
            <img className='w-32 absolute' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='bottom-0 absolute left-0 border-[1px] border-white text-white rounded-full m-6 p-1 uppercase text-[1vw]'>rating 5.0 on clutch</button>
            </div>
            <div className="card w-1/2 justify-center flex items-center relative h-full bg-[#212121] rounded-xl">
            <img className='w-32 absolute' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='bottom-0 absolute left-0 border-[1px] border-white text-white rounded-full m-6 p-1 uppercase text-[1vw]'>business bootcamp alumni</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
