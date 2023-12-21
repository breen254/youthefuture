import React from 'react'
import { RightToggle } from '../nav-elements/rightToggle'
import { ModeThemeToggle } from '../nav-elements/darkLight'
import { AvatarPic } from '../nav-elements/avatar'
import { MenubarDrop } from '../nav-elements/menudrop'

const EndSideItems = () => {
  return (
    <div className='flex items-center gap-3'>
      <ModeThemeToggle />

      <MenubarDrop />

      
      <RightToggle />



    </div>
  )
}

export default EndSideItems
