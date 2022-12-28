import { userService } from '../../services/user.service';

export function spendCoins(amount) {
    return async (dispatch, getState) => {
        dispatch({ type: 'SPEND_COINS', amount });
        userService.saveLocalUser(getState().loggedInUser);
    };
}

export function signup(userCred) {
    return async (dispatch) => {
        await userService.signup(userCred);
        dispatch({ type: 'SIGNUP', userCred });
    };
}

export function setLoggedInUser() {
    return async (dispatch) => {
        const user = await userService.getLoggedinUser();
        if (user) dispatch({ type: 'SET_LOGGED_IN_USER', loggedInUser: user });
    };
}

export function login(userCred) {
    return async (dispatch) => {
        await userService.login(userCred);
        dispatch({ type: 'SIGNUP', userCred });
    };
}
