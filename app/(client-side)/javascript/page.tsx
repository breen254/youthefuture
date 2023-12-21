"use client"

import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <motion.div
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:20}}
    transition={{ duration: 0.9, ease: "easeIn" }}
    
    >
      Javascript is way big important
      
    </motion.div>
  )
}

export default page