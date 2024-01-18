import axios from 'axios'

// action name constants
export const increment = 'accounts/increment';
export const decrement = 'accounts/decrement';
export const incrementByAmount = 'accounts/incrementByAmount';
export const decrementByAmount = 'accounts/decrementByAmount';
export const incrementInBonus = 'bonus/incrementInBonus';
export const getUserPending = 'getUserPending';
export const getUserSuccess = 'getUserSuccess';
export const getUserFailed = 'getUserFailed';


// Action Creators
export function decrease() { return { type: decrement } }
export function increase() { return { type: increment } }
export function increaseByAmount(payload) { return { type: incrementByAmount, payload: payload } }
export function decreaseByAmount(payload) { return { type: decrementByAmount, payload: payload } }
export function increaseBonus() { return { type: incrementInBonus } }
export function gettingUserPending() { return { type: getUserPending } }
export function gettingUserSuccess(payload) { return { type: getUserSuccess, payload: payload } }
export function gettingUserFailed(error) { return { type: getUserFailed, error: error } }
export function initUser(id) {
    return async (dispatch, getState) => {
        const url = `http://localhost:3000/account/${id}`;
        try {
            dispatch(gettingUserPending());
            const { data } = await axios.get(url);
            dispatch(gettingUserSuccess(data.amount))
        } catch (error) {
            dispatch(gettingUserFailed(error.message))
        }
    }
}