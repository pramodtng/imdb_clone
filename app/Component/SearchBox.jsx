"use client"
import React, { useState } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const SearchBox = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (!search) {
      return;
    }
    router.push(`/search/${search}`)
  }
  return (
    <form className='max-w-6xl mx-auto flex mt-2' onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder='Search...'
        name=''
        className='w-full mx-auto px-4 py-2 h-14 rounded-lg outline-none bg-transparent'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" disabled={!search} >
        <AiOutlineFileSearch className='text-2xl' />
      </button>
    </form>
  )
}

export default SearchBox