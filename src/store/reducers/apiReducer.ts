interface actionType {
    type: string,
    payload: number
}

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const apiReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload ? action.payload : [],
                error: ''
            }
        case "FETCH_DATA_FAILURE":
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }

        default: return state
    }
}
export default apiReducer;