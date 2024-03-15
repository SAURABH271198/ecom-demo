const initialState = {
	productList: [],
	draggedItem: null,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_LIST":
			return {
				...state,
				productList: action.payload,
			};
		case "UPDATE_DRAGGED_ITEM":
			return {
				...state,
				draggedItem: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
