import { useState, useEffect } from 'react'

import {fetchProductData} from '../api/products'

import  { BiSearch } from 'react-icons/bi'
import { FaCartShopping } from 'react-icons/fa6';

function Toolbar({setProducts, searchTerm, setSearchTerm, setPageNumber, setLastPage, cartTotal}) {

    const [buttonClick, setButtonClicked] = useState(0)

    const categories = [
        {
            id: 1,
            name: 'tops'
        },
        {
            id: 2,
            name: 'pants'
        },
        {
            id: 3,
            name: 'shoes'
        },
        {
            id: 4,
            name: 'accessories'
        }
    ]

    useEffect(()=> {

        (
            async () => {
                const result = await fetchProductData(1, searchTerm)
                setPageNumber(1)
                setProducts(result.results)
                setLastPage(result.pagination.totalPages)
            }
        )()

    }, [buttonClick])



    function handleCategory(event) {
        setButtonClicked(buttonClick+1)
        setSearchTerm(event.target.innerText)
    }

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const result = await fetchProductData(1, searchTerm)
        setProducts(result.results)
        setLastPage(result.pagination.totalPages)
    }

    return (
            <div className='toolbar'>

                {/* Search Categories */}
                {categories.map((cat) => {
                    return (
                        <div onClick={handleCategory} key={cat.id} value={cat.name} className='toolbar__button'>
                            {cat.name}
                        </div>
                    )
                })}

                {/* Divider */}
                <span className='toolbar__divider'></span>

                {/* Searchbar */}
                <form className='search' onSubmit={handleSubmit}>
                    <input name='search' className='search__input' type='text' onChange={handleChange} placeholder='find your fit &hearts;' />
                    <button className='search__button'>
                        <BiSearch className='search__icon'/>
                    </button>
                </form>

                {/* Cart Icon & Total */}
                <div className='cart'>
                    <FaCartShopping />
                    {cartTotal > 0 && <span>{cartTotal}</span>}
                </div>
            </div>
    )
}

export default Toolbar;