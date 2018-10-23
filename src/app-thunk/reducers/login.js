const initialState = {
    user: null,
    loading: false,
    error: null,
    fetchingProfile: false,
};

const actionHandlers = {
    ['LOGIN_REQUEST']: (draft) => {
        draft.loading = true;
    },
    ['LOGIN_SUCCESS']: (draft, {login, token}) => {
        draft.user = {
            login: login,
            token: token
        };
        draft.loading = false;
    },
    ['LOGIN_ERROR']: (draft, {error}) => {
        draft.error = error;
        draft.loading = false;
    },
    ['INIT_PROFILE_REQUEST']: (draft) => {
        draft.fetchingProfile = true;
    },
    ['INIT_PROFILE_SUCCESS']: (draft, {login, token}) => {
        draft.user = {
            login: login,
            token: token
        };
        draft.fetchingProfile = false;
    },
    ['INIT_PROFILE_CANCELED']: (draft) => {
        draft.fetchingProfile = false;
    },
};

export default createMutableReducer => createMutableReducer(initialState, actionHandlers);