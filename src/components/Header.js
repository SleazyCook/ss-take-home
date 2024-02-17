import {fetchProductData} from '../api/products'

function Header({setProducts, searchTerm, setSearchTerm}) {

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const result = await fetchProductData(1, searchTerm)
        setProducts(result.results)
    }

    return(
        <div>
            Header.

            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} />
                <button>Search</button>
            </form>




            Cart Icon & Total.
            (Fixed, but simpler on scroll?)
        </div>
    )
}

export default Header;