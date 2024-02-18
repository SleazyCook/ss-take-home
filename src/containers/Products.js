import { useState, useEffect } from 'react'

import {fetchProductData} from '../api/products'

import Header from '../layout/Header'
import Toolbar from '../layout/Toolbar'
import Pagination from '../components/Pagination'
import ProductCard from '../components/ProductCard'
import Footer from '../layout/Footer'

function Products() {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [pageNumber, setPageNumber] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        (
            async () => {
                const result = await fetchProductData(pageNumber, searchTerm)
                setProducts(result.results)
                setLastPage(result.pagination.totalPages)

                console.log(result)
            }
        )()
    }, [pageNumber] )

    return (
        <div>
            <Header 
                setPageNumber={setPageNumber}
                setSearchTerm={setSearchTerm}/>

            <Toolbar
                setProducts={setProducts}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setPageNumber={setPageNumber}
                setLastPage={setLastPage}
                cartTotal={cartTotal} />

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

            <Footer />
        </div>
    )
}

export default Products