const RequestReducer = (state, action) => {
	switch (action.type) {
		case 'HANDLE INPUT TEXT':
			return {
				...state,
				[action.field]: action.payload,
			};
	}
};

export default RequestReducer;
