import { Link } from 'react-router-dom'

function Header({setPageNumber, setSearchTerm}) {

    function handleReset() {
        setPageNumber(1)
        setSearchTerm('')
    }

    return(
        <div onClick={handleReset} className='header'>
            {/* Left */}
            <div className='header__main'>
                {/* Logo */}
                <img src='https://i.imgur.com/ajDgUOr.png' alt='logo' />

                {/* Brand Name */}
                <span className='header__name'>otterly unique</span>
            </div>
            {/* Right */}
            <div className='header__links'>
                <a 
                    className='header__links--about' 
                    href='https://github.com/SleazyCook/'
                    target='_blank'>
                        about</a>
            </div>

        </div>
    )
}

export default Header;