"use client"

import { motion } from "framer-motion"
import React from 'react'

const page = () => {
  return (
   <div
  //  initial={{opacity:0, x:20}}
  //  animate={{opacity:1, x:0}}
  //  exit={{opacity:0, x:20}}
  //  transition={{ duration: 0.9, ease: "easeIn" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -800, rotate:90 }}
        animate={{ opacity: 1, x: 0, rotate:0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
         className="flex items-center justify-center m-10"
      
      >
        <h1 className="text-nowrap font-extrabold md:text-9xl capitalize">Why python?</h1>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 800 }}
        animate={{ opacity: 1, x: 0, rotateY: 360 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
         className="p-10 rounded-md m-10 shadow-xl bg-slate-500 "
      
      >
        <p>Python an interpreted, object-oriented, high-level programming language used to build websites using web frameworks; flask, django and fastapi</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5 w-full mx-auto overflow-y-scroll ">
        <section className="bg-slate-300 border p-10 max-h-fit rounded-lg hover:translate-x-2 duration-500"></section>
        <section className="bg-slate-300 border p-10 max-h-fit rounded-lg hover:translate-x-2 duration-500">2</section>
        <section className="bg-slate-300 border p-10 max-h-fit rounded-lg hover:translate-x-2 duration-500">3</section>
        <section className="bg-slate-300 border p-10 max-h-fit rounded-lg hover:translate-x-2 duration-500">4</section>
        <section className="bg-slate-300 border p-10 max-h-fit rounded-lg hover:translate-x-2 duration-500">1</section>
        
        <section className="bg-slate-300 border p-10 max-h-fit rounded-lg hover:translate-x-2 duration-500">2</section>
        <section className="bg-slate-300 border p-10 max-h-fit rounded-lg hover:translate-x-2 duration-500">3</section>
        <section className="bg-slate-300 border p-10 max-h-fit rounded-lg hover:translate-x-2 duration-500">4</section>

      </div>




    </div>
  )
}

export default page