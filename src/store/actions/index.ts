import axios from 'axios';

export const increment = (number: number) => {
    return ({
        type: 'INCREMENT',
        payload: number
    });
}

export const decrement = (number: number) => {
    return ({
        type: 'DECREMENT',
        payload: number
    });
}

export const fetchDataRequest = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    }
}

export const fetchDataSuccess = (data: any) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: data
    }
}

export const fetchDataFailure = (error: any) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload: error
    }
}

export const fetchData = (url: string) => {
    
    return async function (dispatch: any) {
        dispatch(fetchDataRequest());
        try {            
            const response = await axios.get(url);
            const data = response.data;
            console.log("response: ", response)
            dispatch(fetchDataSuccess(data.data));
            dispatch(decrement(1));
        }
        catch (e) {
            console.log("error: ", e)
            dispatch(fetchDataFailure(e.message));
        }
    }
}


export function itemsFetchData(url: string) {
    return (dispatch: any) => {

        fetch(url)
            .then((response) => {
                console.log('Got Response');
                console.log(response, 'Response Log');
            })

            .then(() => {
                setTimeout(
                    function () {
                        dispatch(decrement(1))
                    },
                    3000
                );
            })
            .then((items) => dispatch(decrement(1)))
            .catch(() => console.log('error'));
    };
}