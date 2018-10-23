import {createMutateActionHandler} from "./createMutateActionHandler";

function defaultHandler(state, action) {
    return state;
}

export function createMutableReducer(initialState, actionHandlers) {
    return function reducer(state = initialState, action) {
        const handler = actionHandlers[action.type] || actionHandlers.default || defaultHandler;
        return createMutateActionHandler(handler)(state, action.payload);
    }
}
