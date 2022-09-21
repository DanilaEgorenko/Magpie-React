import { useContext } from 'react'
import ThemeContext from '../../services/themeContext'
import './AccountTheme.css'

const AccountTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const handleThemeChange = () => {
        const color = theme === 'dark' ? 'light' : 'dark'
        setTheme(color)
        localStorage.setItem('theme', color)
    }

    return (
        <label className='user__theme'>
            <div className='user__theme-text'>Тёмная тема</div>
            <input
                type='checkbox'
                id='box'
                defaultChecked={theme === 'dark'}
                onClick={handleThemeChange} />
            <span className='check'></span>
        </label>
    )
}

export default AccountTheme