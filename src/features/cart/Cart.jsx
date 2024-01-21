import React, { useEffect } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemAsync, fetchItemsAsync, updateItemAsync } from './cartSlice'

const Cart = () => {

    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItemsAsync());
    }, [])

    return (
        <div id='cart'>
            <h1>Cart</h1>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Thumbnail</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Delete</th>
                </tr>
                {items.map(el => (
                    <tr>
                        <td>{el.title}</td>
                        <td>
                            <img src={el.thumbnail} />
                        </td>
                        <td>
                            {el.qty}
                            <button
                                onClick={() => {
                                    dispatch(updateItemAsync({ id: el.id, modified: { qty: el.qty + 1 } }))
                                }}
                            >+</button>
                        </td>
                        <td>{el.qty * el.price}</td>
                        <td>
                            <button onClick={() => {
                                dispatch(deleteItemAsync(el.id))
                            }} >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Cart
