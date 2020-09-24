// how state initally looks like
export const initialState = {
    user: null,
}

// list of action
export const actionTypes = {
    SET_USER: "SET_USER",
}

// take the above action to initially defined state
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }

        default:
            return state
    }
}

export default reducer