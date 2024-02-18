function Footer() {

    const linksData = [
        {
            id: 1,
            label: 'Portfolio',
            href: 'https://drewford.dev',
            img: 'https://i.imgur.com/Kbzj1SL.png'
        },
        {
            id: 2,
            label: 'LinkedIn',
            href: '',
            img: 'https://i.imgur.com/7dukWV3.png'
        },
        {
            id: 3,
            label: 'GitHub',
            href: '',
            img: 'https://i.imgur.com/GjYUQiB.png'
        },
        {
            id: 4,
            label: 'Code Wars',
            href: '',
            img: 'https://i.imgur.com/GsN6Ucg.png'
        }
    ]

    return (
        <div className='footer'>
            <a className='author' href='https://drewford.dev' target='_blank'>
                Developed by <span>Drewford</span></a>

            {/* <div className='footer__flex'> */}
                <div className='footer__links'>
                    {linksData.map((link) => {
                        return(
                            <a 
                                className='footer__link'
                                key={link.id} 
                                value={link.label}
                                href={link.href}
                                target='_blank'>
                                    <img src={link.img} alt={link.label}/>
                                </a>
                        )
                    })}
                </div>

                <div className='footer__details'>
                    Built by <a href='https://drewford.dev' target='_blank'>Andrew Cook</a> for a front end challenge from <a href='https://searchspring.com' target='_blank'>SearchSpring.</a> This website is intended for the application process at Searchspring. Backend data hosted and owned by SearchSpring.
                </div>
            {/* </div> */}

        </div>
    )
}

export default Footer;