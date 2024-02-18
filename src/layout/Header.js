function Header({setPageNumber, setSearchTerm}) {

    function handleReset() {
        setSearchTerm("")
        setPageNumber(1)
    }

    return(
        <div onClick={handleReset} className='header'>
            {/* Main */}
            <div className='header__main'>
                {/* Logo */}
                <img src='https://i.imgur.com/ajDgUOr.png' alt='logo' />
                {/* Brand Name */}
                <span className='header__name'>otterly unique</span>
            </div>
            {/* Links */}
            <div className='header__links'>
                <a 
                    className='header__links--about' 
                    href='https://drewford.dev'
                    target='_blank'>
                        about</a>
            </div>
        </div>
    )
}

export default Header;