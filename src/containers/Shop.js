import { useState, useEffect } from 'react'

import {fetchProductData} from '../api/products'

import Header from '../layout/Header'
import Toolbar from '../layout/Toolbar'
import Pagination from '../components/Pagination'
import ProductCard from '../components/ProductCard'
import NoResults from '../components/NoResults'
import Footer from '../layout/Footer'

function Shop() {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [pageNumber, setPageNumber] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        (
            async () => {
                const result = await fetchProductData(pageNumber, searchQuery)
                setProducts(result.results)
                setLastPage(result.pagination.totalPages)
            }
        )()
    }, [pageNumber, searchQuery] )

    return (
        <div>
            <Header 
                setPageNumber={setPageNumber}
                setSearchQuery={setSearchQuery}/>

            <Toolbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setSearchQuery={setSearchQuery}
                setPageNumber={setPageNumber}
                cartTotal={cartTotal} />

            {products.length ?
                <>
                    <Pagination 
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber}
                        lastPage={lastPage}/>

                    <ProductCard
                        products={products}
                        cartTotal={cartTotal}
                        setCartTotal={setCartTotal}/>

                    <Pagination 
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    lastPage={lastPage}/>
                </>
                :
                <NoResults 
                    searchQuery={searchQuery}/>
            }   

            <Footer />
        </div>
    )
}

export default Shop