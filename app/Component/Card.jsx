import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({res}) => {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'> 
      <Link href = {`/movie/${res.id}`} >
        <Image 
            src = {`https://image.tmdb.org/t/p/original/${res.backdrop_path || res.poster_path}`} 
            alt = "image not available"
            width={600}
            height = {300}
            className = 'sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
            blurDataURL='loading.svg'
            style = {{
              maxWidth: "100%",
              height: "auto",
            }}
           />
           <div className='p-2'>
            {/* <p className='line-clamp-2'> {res.overview} </p> */}
            <h2 className='text-center'> {res.title || res.name} </h2>
           </div>
      </Link> 
    </div>
  )
}

export default Card