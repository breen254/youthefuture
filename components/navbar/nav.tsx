import React from 'react'
import EndSideItems from './items/endside'
import { MidsideItems } from './items/midside'
import StartSide from './items/startside'

const TopBar = () => {

  return (

    <div className='fixed top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-row justify-between items-center w-full px-6 h-16 shadow-inset bg-opacity-90 '>
        <div className='flex items-center gap-1'>
            <span>/_\</span>
            <StartSide />
        </div>
        <div className='hidden md:block '>
            <MidsideItems />

        </div>
        <div>
            <EndSideItems />

        </div>

    </div>
  )
}

export default TopBar
