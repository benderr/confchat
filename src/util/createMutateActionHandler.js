import produce from "immer";

export const createMutateActionHandler = draftFunction => (state, payload) => {
	return produce(state, draft => draftFunction(draft, payload, state));
};