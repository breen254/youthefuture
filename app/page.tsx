"use client"

import { UserRequestForm } from '@/tools/diaglog'
import { motion } from 'framer-motion'


export default function Home() {

  

  return (
    <motion.div
    initial={{opacity:0, x:20}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:20}}
    transition={{ duration: 0.9, ease: "easeIn" }}
    className='flex flex-col rounded-md'
    >
      <div className='flex flex-col items-center justify-center h-[calc(100vh-64px)]'>

        <h1 className='text-center font-extrabold text-7xl font-serif '>YOU FOUND US</h1>
        <p className='opacity-50'>We do Differently, Simple and Easy</p>
      <div className='mt-10'>

          <UserRequestForm/>

      </div>
      </div>

  
    </motion.div>
    
    
  )
}
