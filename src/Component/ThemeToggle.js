import React, { useContext } from 'react';
import {HiSun, HiMoon} from 'react-icons/hi';
import { ThemeContext } from '../Context/TheamContext';

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className='p-2'>
      {theme === 'dark' ? (
        <div className='flex items-center cursor-pointer text-base' onClick={()=> setTheme(theme === 'dark' ? 'light':'dark')}>
            <HiSun/> Light Mode
        </div>
      ):(
        <div className='flex items-center cursor-pointer text-base' onClick={()=> setTheme(theme === 'dark' ? 'light':'dark')}>
            <HiMoon/> Dark Mode
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
