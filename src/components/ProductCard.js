import { FaCartShopping } from 'react-icons/fa6';

function ProductCard({products, cartTotal, setCartTotal}) {

    function handleCart() {
        console.log('added to cart')
        console.log(cartTotal)
        setCartTotal(cartTotal+1)
    }

    return (
        <div className='products__container'>

            {products.map((product)=>{
                return (
                    <div 
                        key={product.uid}
                        className='product'>
                        
                        {/* Image */}
                        <img 
                            className='product__image'
                            src={product.thumbnailImageUrl} />

                        {/* Name */}
                        <div className='product__name'>
                            {product.name}</div>

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
            
        </div>
    )
}

export default ProductCard;