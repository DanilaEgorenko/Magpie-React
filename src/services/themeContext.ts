import { createContext } from 'react'

const ThemeContext = createContext({
    theme: '',
    setTheme: (theme: string) => { },
})

export default ThemeContext