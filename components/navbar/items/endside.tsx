import React from 'react';
import { ModeThemeToggle } from '../nav-elements/darkLight';
import { MenubarDrop } from '../nav-elements/menudrop';

const EndSideItems = () => {
  return (
    <div className='flex items-center gap-3'>
      <ModeThemeToggle />

      <MenubarDrop />

      



    </div>
  )
}

export default EndSideItems
