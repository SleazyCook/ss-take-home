import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div>
            <h1 className='landing'>
                <span className='landing__primary'>
                    otterly unique</span>
                <span className='landing__secondary'>
                    express yourself through fashion</span>
            </h1>
            <Link to='shop'>Shop Now</Link>
        </div>
    )
}

export default Landing;