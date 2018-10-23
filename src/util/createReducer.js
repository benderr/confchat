export function createReducer(initialState, actionHandlers) {
    return function reducer(state = initialState, action) {
        const handler = actionHandlers[action.type] || actionHandlers.default || defaultHandler;
        return handler(state, action.payload);
    }
}