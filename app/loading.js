/* eslint-disable @next/next/no-img-element */
import React from 'react'

const loading = () => {
  return (
    <div className = 'flex justify-center'>
      <img className='h-96' src='loading.svg' alt="loader" />
    </div>
  )
}

export default loading