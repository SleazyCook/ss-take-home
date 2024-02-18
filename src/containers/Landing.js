import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className='landing'> 
            <h1 className='landing__text'>
                <span className='landing__primary'>
                    otterly unique</span>
                <span className='landing__secondary'>
                    express yourself through fashion</span>
            </h1>
            <Link className='landing__button' to='shop'>Shop Now</Link>
        </div>
    )
}

export default Landing;