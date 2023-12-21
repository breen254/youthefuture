"use client"

import Link from 'next/link'
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
        <h1>I have never seen anything like Java</h1> 
        <Link href={"/java/java1"}>Go To details</Link>
        
    </motion.div>
  )
}

export default page