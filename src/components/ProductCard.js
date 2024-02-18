import { FaCartShopping } from 'react-icons/fa6';

function ProductCard({products, cartTotal, setCartTotal}) {

    function truncateString(str, num) {
        if (str.length > num) {
            return str.slice(0, num) + '...'
        } else {
            return str
        }
    }

    function handleCart() {
        setCartTotal(cartTotal+1)
    }

    return (
        <>
        
            {products.length ? <div className='products__container'>

                {products.map((product)=>{
                    return (
                        <div key={product.uid} className='product'>
                            
                            {/* Image */}
                            <div className='product__image--container'>
                                <img 
                                    className='product__image'
                                    src={product.thumbnailImageUrl} />
                            </div>

                            {/* Name */}
                            <div className='product__name'>
                                {truncateString(product.name, 40)}</div>

                            {/* Divider Line */}
                            <span className='product__divider'></span>

                            {/* On Sale Condition */}
                            {Number(product.price) < Number(product.msrp) ? 
                                <>
                                {/* Sale Price */}
                                <span className='product__price'>
                                    ${product.price}</span>
                                {/* Original Price */}
                                <span className='product__msrp'>
                                    ${product.msrp}</span></>
                                :
                                <>
                                {/* Original Price ONLY */}
                                <span className='product__msrp--only'>
                                    ${product.msrp}</span>
                                </> 
                                }

                            {/* 'Add to Cart' Button */}
                            <button onClick={handleCart} className='product__button'> 
                                <span className='product__button--text'>
                                    Add to Cart </span>
                                &nbsp;
                                <span><FaCartShopping /></span>    
                            </button>

                        </div>
                    )
                })}
                
            </div> :
            <>No products to dispklay</>}
        </>
    )
}

export default ProductCard;