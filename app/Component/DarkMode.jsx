"use client"
import React, { useState, useEffect } from 'react'
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [mounted, setmounted] = useState(false)
  useEffect(() => {
    setmounted(true)
  }, [])
  return (
    <>
      {
        mounted && (currentTheme === "dark" ?
          <MdLightMode onClick={() => setTheme('light')} className='cursor-pointer text-xl hover:text-amber-500' />
          :
          <BsFillMoonFill onClick={() => setTheme('dark')} className='cursor-pointer text-xl hover:text-amber-500' />
        )}
    </>
  )
}

export default DarkMode