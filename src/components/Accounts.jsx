import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, initUser } from '../slices/accountSlice';

function Accounts() {

    const [value, setValue] = useState(0)
    const account = useSelector(state => state.account)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initUser(1));
    }, []);

    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Account Component</b>
                </h4>
                {account.pending ? <h3>Loading . . .</h3> : account.error ? <h3>{account.error}</h3> : <h3>Amount:${account.amount}</h3>}
                <button onClick={() => {
                    dispatch(increment())
                }
                }>Increment +</button>
                <button onClick={() => {
                    dispatch(decrement())
                }
                }>Decrement -</button>
                <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
                <button onClick={() => dispatch(incrementByAmount(value))}>
                    Increment By {value} +
                </button>
            </div>
        </div>
    );
}

export default Accounts;