const initialState = 0;

const actionHandlers = {
    ['INCREMENT']: (draft, payload) => {
        return draft + 1;
    },
    ['DECREMENT']: (draft, payload) => {
        return draft - 1;
    }
};

export default createMutableReducer => createMutableReducer(initialState, actionHandlers);