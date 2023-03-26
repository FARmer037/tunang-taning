export const initialState = {
    user: null
}

export const actionType = {
    SET_USER: 'SET_USER'
}

const userReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}

export default userReducer
