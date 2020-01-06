const DONE = 'DONE';
const PENDING = 'PENDING';

const createAsyncReducer = (prefix, initialState) => (state = {isLoading: true, data: initialState}, action) => {
    const {type} = action;
    switch (type) {
        case `${prefix}_${PENDING}`:
            return {
                data: initialState,
                isLoading: true,
                // error: null
            };
        case `${prefix}_${DONE}`:
            return {
                ...state,
                data: action.payload || initialState,
                isLoading: false,
                // error: null
            };
        default:
            return state
    }
};

export default createAsyncReducer;