import React from 'react'
import {color, motion} from 'framer-motion'

function AnimatedText({text}) {
    const words = text.split(" ")
    //console.log(words)

    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({
            opacity: 1, 
            transition: {staggerChildren: 0.03, delayChildren: 0.02 * i }
        })
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }

        }
    }
  return (
    <motion.div class="hero-text-mobile" style={{overflow: "hidden", display: "flex", flexWrap: "wrap"}} variants={container} initial="hidden" animate="visible">
         {words.map((word, index) => {
            if (word === "Discover:") {
                return (
                    <div key={index} class="hero-text-mobile-discover" style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", width: '100%', color: "black"}} >
                        <motion.span 
                            variants={child} 
                            className="hero-text"
                            style={{color: "black"}}
                        >
                            {word}
                        </motion.span>
                    </div>
                );
            } else {
                return (
                    <motion.span 
                        variants={child} 
                        className="hero-text"
                        key={index}
                    >
                        {word + (index !== words.length - 1 ? ' ' : '')}
                    </motion.span>
                );
            }
        })}
    </motion.div>
  )
}

export default AnimatedText