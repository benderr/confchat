import {getProfile, joinToChat} from "../../api";

export function loginRequest({login}) {
    return {type: 'LOGIN_REQUEST', payload: {login}};
}

export function loginSuccess({login, token}) {
    return {type: 'LOGIN_SUCCESS', payload: {login, token}};
}

export function loginError({login, error}) {
    return {type: 'LOGIN_ERROR', payload: {login, error}};
}

export function loginUser({login}) {
    return async function (dispatch) {
        dispatch(loginRequest({login}));

        try {
            const {login, token} = await joinToChat({login});
            localStorage.setItem('TOKEN', token);
            dispatch(loginSuccess({login, token}));
        }
        catch (error) {
            dispatch(loginError({login, error}));
        }
    };
}


export function initProfileRequest({token}) {
    return {type: 'INIT_PROFILE_REQUEST', payload: {token}};
}

export function initProfileSuccess({login, token}) {
    return {type: 'INIT_PROFILE_SUCCESS', payload: {login, token}};
}

export function initProfileCanceled({token}) {
    return {type: 'INIT_PROFILE_CANCELED', payload: {token}};
}

export function initProfile() {
    return async function (dispatch) {
        const token = localStorage.getItem('TOKEN');
        if (token) {
            dispatch(initProfileRequest({token}));
            try {
                const {login, token} = await getProfile(token);
                dispatch(initProfileSuccess({login, token}));
            }
            catch (error) {
                dispatch(initProfileCanceled({token}));
            }
        } else {
            dispatch(initProfileCanceled({token}));
        }
    };
}
