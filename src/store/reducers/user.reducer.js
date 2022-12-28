const INITIAL_STATE = {
    users: null,
    loggedInUser: null,
};

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users,
            };
        case 'SET_LOGGED_IN_USER':
            return {
                ...state,
                loggedInUser: action.loggedInUser,
            };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.user],
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter((user) => user._id !== action.userId),
            };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user._id === action.user._id ? action.user : user
                ),
            };
        case 'SPEND_COINS':
            const { loggedInUser } = state;
            return {
                ...state,
                loggedInUser: {
                    ...loggedInUser,
                    coins: loggedInUser.coins - action.amount,
                },
            };
        default:
            return state;
    }
}
