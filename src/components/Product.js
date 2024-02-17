import { FaCartShopping } from 'react-icons/fa6';

function Product(products) {
    return (
        <div className='products__container'>

            {products.products.map((product)=>{
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

                        {/* Sale Price */}
                        <span className='product__price'>
                            ${product.price}</span>

                        {/* MSRP */}
                        <span className='product__msrp'>
                            <span className='product__msrp--linethrough'> 
                            ${product.msrp}</span></span>

                        {/* 'Add to Cart' Button */}
                        <button className='product__button'> 
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

export default Product;