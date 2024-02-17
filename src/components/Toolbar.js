import {fetchProductData} from '../api/products'

import { FaCartShopping } from 'react-icons/fa6';

function Toolbar({setProducts, searchTerm, setSearchTerm, cartTotal}) {

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const result = await fetchProductData(1, searchTerm)
        setProducts(result.results)
    }

    return (
        <>
            {/* Heading Secondary (Lower / Fixed to top on scroll) */}
            <div className='toolbar'>
                {/* Searchbar */}
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} />
                    <button>Search</button>
                </form>

                {/* Cart Icon & Total */}
                <div className='cart'>
                    <FaCartShopping />
                    {cartTotal > 0 && <span>{cartTotal}</span>}
                </div>
            </div>
        </>
    )
}

export default Toolbar;