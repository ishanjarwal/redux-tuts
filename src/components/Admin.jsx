import { useAddAccountMutation, useDelAccountMutation, useGetAccountsQuery, useUpdateAccountMutation } from "../api/adminSlice";

function Admin() {

    const { data, isLoading, error } = useGetAccountsQuery()
    const [callAddAccount, addresponse] = useAddAccountMutation();
    const [deleteAccount, delresponse] = useDelAccountMutation();
    const [updateAccount] = useUpdateAccountMutation();
    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>Admin Component</b>
                </h4>
                {isLoading && (
                    <p>Loading . . .</p>
                )}
                {data && data.map(el => {
                    return (
                        <div>
                            <p>
                                id : {el.id}&nbsp;
                                amount : {el.amount}
                            </p>
                            <button onClick={() => deleteAccount(el.id)} >Delete</button>
                            <button onClick={() => { updateAccount({ id: el.id, amount: 777 }) }} >Update</button>
                        </div>
                    )
                })}
                {error && (
                    <p>{error.error}</p>
                )}
                <button onClick={() => callAddAccount(101, data.length + 1)}>Add New Account +</button>
                <button onClick={() => deleteAccount(data.length)}>Delete Last</button>
            </div>
        </div>
    );
}

export default Admin;