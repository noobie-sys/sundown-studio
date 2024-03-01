import Navbar from '@/components/Navbar'
import React from 'react'

const RootLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='h-full bg-cream '>
      <main>
      <Navbar />
        {children}
      </main>
    </div>
  )
}

export default RootLayout