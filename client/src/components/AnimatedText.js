import React from 'react'
import {motion} from 'framer-motion'

function AnimatedText({text}) {
    const words = text.split(" ")
    //console.log(words)

    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({
            opacity: 1, 
            transition: {staggerChildren: 0.05, delayChildren: 0.02 * i }
        })
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
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
    <motion.div style={{overflow: "hidden", display: "flex", flexWrap: "wrap"}} variants={container} initial="hidden" animate="visible">
        {words.map((word, index) => (
        <motion.span  style={word === "Discover" ? { flex: '1 100%' } : {}} variants={child}  key={index} className="hero-text">{word}</motion.span>
        ))}
    </motion.div>
  )
}

export default AnimatedText