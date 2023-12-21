"use client"

import { motion } from "framer-motion"
import React from 'react'

const page = () => {
  return (
   <motion.div
   initial={{opacity:0, x:20}}
   animate={{opacity:1, x:0}}
   exit={{opacity:0, x:20}}
   transition={{ duration: 0.9, ease: "easeIn" }}
    >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, laboriosam? Delectus voluptatum ab maxime nam quis veniam magni at omnis nesciunt rem blanditiis, sunt officia suscipit culpa ad! Explicabo, quidem.</p>
    </motion.div>
  )
}

export default page