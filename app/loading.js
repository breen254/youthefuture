"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
  return (
    <div class="flex items-center h-[6px] justify-center font-oblique text-transparent bg-gradient-conic bg-clip-text rounded-full">
    </div>
    
    )

  }