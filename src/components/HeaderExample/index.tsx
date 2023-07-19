import React from 'react'
import MenuSocialMedia from '../MenuSocialMedia'

export default function HeaderExample() {
  return (
    <main className='absolute w-full h-full'>
      {/* <header>
        Header example
      </header> */}
      <div className='flex h-full items-center justify-end'>

      <MenuSocialMedia />
      </div>
    </main>
  )
}