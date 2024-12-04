import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function Eyes() {
  const locomotiveScroll = new LocomotiveScroll();

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2; // Use window.innerWidth directly
      const deltaY = mouseY - window.innerHeight / 2; // Use window.innerHeight directly

      const angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the listener on component unmount
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed='-.7' className='relative w-full h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] '>
        <div className=' w-1/2 h-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] top-1/2 absolute flex justify-between'>
          <div className="justify-center items-center flex relative w-[13vw] h-[13vw] rounded-full bg-white ml-[9vw]">
            <div className="relative w-2/3 h-2/3 justify-center items-center rounded-full bg-zinc-900">
              <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 rotate-85">
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center flex relative w-[13vw] h-[13vw] rounded-full bg-white mr-[9vw]">
            <div className="relative w-2/3 h-2/3 justify-center items-center rounded-full bg-zinc-900">
              <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 rotate-85">
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;