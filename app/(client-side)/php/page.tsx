"use client"

import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <motion.div
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:20}}
    transition={{ duration: 0.9, ease: "easeIn" }}
    
    >
      php for server side development
    
    </motion.div>
  )
}

export default page