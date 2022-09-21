import './Header.css'

function Header(): JSX.Element {
    return (
        <header>
            <h1>Magpie</h1>
            <div className='menu-icon-wrapper'>
                <div className='menu-icon'></div>
            </div>
        </header>
    )
}

export default Header