import  { BiSearch } from 'react-icons/bi'
import { FaCartShopping } from 'react-icons/fa6';

function Toolbar({
    searchTerm, setSearchTerm, 
    setPageNumber, 
    cartTotal,
    setSearchQuery}) {

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

    function handleCategory(event) {
        setSearchQuery(event.target.innerText)
        setPageNumber(1)
    }

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setPageNumber(1)
        setSearchQuery(searchTerm)
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