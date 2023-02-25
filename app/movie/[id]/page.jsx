import Image from 'next/image';
import React from 'react'

async function getMovieId(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
  return await res.json();
}


const page = async ({ params }) => {
  const movieId = params.id
  const movie = await getMovieId(movieId)
  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6' >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          alt="image not available"
          width={600}
          height={300}
          className='rounded-lg'
          blurDataURL='loading.svg'
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'> {movie.title || movie.name} </h2>
          <p> {movie.overview} </p>
        </div>
      </div>
    </div>
  )
}

export default page