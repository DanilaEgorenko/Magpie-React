import React, { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import UserProfile from './components/AccountProfile/AccountProfile'

import ThemeContext from './services/themeContext'

const App: React.FC = () => {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useState(
    isBrowserDefaultDark() || localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  )
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--main-bg-color', '#222226')
      document.documentElement.style.setProperty('--color', '#bbb')
      document.documentElement.style.setProperty('--header-bg-color', 'rgba(0, 0, 0, 0.8)')
      document.documentElement.style.setProperty('--header-color', 'white')
      document.documentElement.style.setProperty('--activity-bg-color', '#081d14')
      document.documentElement.style.setProperty('--user-bg-color', '#251511')
      document.documentElement.style.setProperty('--invert', '60%')
    } else {
      document.documentElement.style.setProperty('--main-bg-color', 'white')
      document.documentElement.style.setProperty('--color', 'black')
      document.documentElement.style.setProperty('--header-bg-color', 'rgba(0, 0, 0, 0.3)')
      document.documentElement.style.setProperty('--header-color', 'black')
      document.documentElement.style.setProperty('--activity-bg-color', 'rgba(0, 255, 0, 0.3)')
      document.documentElement.style.setProperty('--user-bg-color', 'rgba(255, 0, 0, 0.3)')
      document.documentElement.style.setProperty('--invert', '0%')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App'>
        <Header />
        <UserProfile />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
