import { useState, useEffect } from 'react'

import {fetchProductData} from '../api/products'

import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Product from '../components/Product'

function Products() {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [pageNumber, setPageNumber] = useState(1)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        (
            async () => {
                const result = await fetchProductData(pageNumber, searchTerm)
                setProducts(result.results)
            }
        )()
    }, [pageNumber] )

    return (
        <div>
            <Header 
                setProducts={setProducts}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                cartTotal={cartTotal} />

            <Pagination 
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}/>

            <Product 
                products={products}/>

            <Pagination 
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}/>
        </div>
    )
}

export default Products