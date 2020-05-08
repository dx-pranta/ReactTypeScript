interface actionType {
    type: string,
    payload: number
}

export const initialState = 99;

const counterReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer;