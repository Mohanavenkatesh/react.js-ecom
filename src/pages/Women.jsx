import React from 'react'

export const Women = ({ array, setarray, theme, toggleTheme }) => {
  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>Women</div>
  )
}
