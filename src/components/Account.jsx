import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, increaseByAmount, initUser } from '../actions';

function Account() {

    const [value, setValue] = useState(0);
    const amount = useSelector(state => state.accounts.amount);
    const accounts = useSelector(state => state.accounts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initUser(2));
    }, [])

    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Account Component</b>
                </h4>
                {accounts.pending ? <h3>Loading . . .</h3> : accounts.error ? <h3 style={{ color: 'red' }} >{accounts.error}</h3> : <h3>Amount:${amount}</h3>}
                <button onClick={() => { dispatch(increase()) }}>Increment +</button>
                <button onClick={() => { dispatch(decrease()) }}>Decrement -</button>
                <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
                <button onClick={() => dispatch(increaseByAmount(value))}>
                    Increment By {value} +
                </button>
            </div>
        </div>
    );
}

export default Account;