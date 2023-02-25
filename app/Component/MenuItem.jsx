import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MenuItem = ({ title, link, Icon }) => {
  return (
    <div>
      <Link href={link} className='mx-4 lg:mx-6 hover:text-amber-600' >
        <Icon className='text-2xl sm:hidden mx-4' />
        <p className='hidden sm:inline my-2 text-sm' > {title} </p>
      </Link>
    </div>
  )
}

export default MenuItem