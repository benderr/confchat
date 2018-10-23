const initialState = [];

const actionHandlers = {
    ['ADD_TODO']: (draft, payload) => {
        draft.push(payload.text);
    },
};

export default createMutableReducer => createMutableReducer(initialState, actionHandlers);