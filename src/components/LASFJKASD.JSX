import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Features() {
    // Initialize animation controls for each card
    const cardAnimations = [useAnimation(), useAnimation()];

    // Handle hover start
    const handleHover = (index) => {
        cardAnimations[index].start({ y: "0%", opacity: 1 });
    };

    // Handle hover end
    const handleHoverEnd = (index) => {
        cardAnimations[index].start({ y: "100%", opacity: 0 });
    };

    return (
        <div className="w-full py-20">
            {/* Section Title */}
            <div className="w-full bg-zinc-920 text-[4vw] border-b-[1px] border-zinc-700 px-10 pb-5">
                <h1 className='font-["Neue_Montreal"] tracking-tighter'>Featured Projects</h1>
            </div>

            {/* Cards Container */}
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    {/* Card 1 */}
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="relative cardContainer w-1/2 h-[70vh]"
                    >
                        {/* Animated Text */}
                        <h1 className="uppercase absolute text-[4vw] font-bold z-[9] tracking-tighter leading-none w-1/2 left-1/2 bottom-1/3 translate-x-[30%] -translate-y-1/2 whitespace-nowrap text-[#CDEA68]">
                            {"cardboard spaceship".split('').map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={cardAnimations[0]}
                                    transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.01 }}
                                    className="inline-block"
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img
                                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                                alt="Cardboard Spaceship"
                            />
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="relative cardContainer w-1/2 h-[70vh]"
                    >
                        {/* Animated Text */}
                        <h1 className="uppercase absolute text-[4vw] font-bold z-[9] tracking-tighter leading-none w-1/2 right-1/2 bottom-1/2 -translate-x-[50%] translate-y-[30%] whitespace-nowrap text-[#CDEA68]">
                            {"ah2 $ att horn".split('').map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={cardAnimations[1]}
                                    transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.01 }}
                                    className="inline-block"
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img
                                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                                alt="Second Project"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Features;
