import React, { useEffect } from 'react'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from './productsSlice'
import { addItemAsync } from '../cart/cartSlice'

const Products = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [])
    return (

        <div>
            <h1>Products</h1>
            <div className='products-wrap'>
                {products && products.map(el =>
                    <div className="card">
                        <img src={el.thumbnail} alt="Denim Jeans" style={{ width: '100%' }} />
                        <h1>{el.title}</h1>
                        <p className="price">${el.price}</p>
                        <p>{el.description}</p>
                        <p><button onClick={() => dispatch(addItemAsync(el))} >Add to Cart</button></p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products
