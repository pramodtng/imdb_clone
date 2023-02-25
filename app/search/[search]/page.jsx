import Results from '@/app/Component/Results'
import React from 'react'

const SearchResults = async ({ params }) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.search}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error('Error fetching movie')
  }
  const data = await res.json()
  const movies = data.results
  return (
    <div>
      {
        movies && movies.length === 0 && (
          <h1 className='text-center'>
            No Results found...
          </h1>
        )
      }
      {
        movies && <Results datas={movies} />
      }
    </div>
  )
}

export default SearchResults