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


export function itemsFetchData(url : string) {
    return (dispatch: any) => {

        fetch(url)
            .then((response) => {
                console.log('Got Response');
                console.log(response,'Response Log');                
            })

            .then(() => {
                setTimeout(
                    function() {
                        dispatch(decrement(1))
                    },
                    3000
                );
            })
            .then((items) => dispatch(decrement(1)))
            .catch(() => console.log('error'));
    };
}