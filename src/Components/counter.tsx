import React from 'react'
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'


import { increment, itemsFetchData, fetchData } from '../store/actions'



interface stateType {
    counterReducer: {
        counter: number
    }
    isLogged: boolean
}


const Counter: React.FC = () => {
    const counterState = useSelector((state: stateType) => state.counterReducer);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(1));
    }

    const handleDecrement = () => {
        dispatch(fetchData('http://dummy.restapiexample.com/api/v1/employees'));
    }

    return (

        <div style={Styles.container}>
            <h1>{counterState.counter}</h1>
            <Button
                style={Styles.button}
                variant="contained"
                onClick={() => handleIncrement()}
            >
                Increment
            </Button>
            <Button
                style={Styles.button}
                variant="contained"
                onClick={() => handleDecrement()}
            >
                Decrement
            </Button>

        </div>
    )
}

const Styles = {
    button: {
        color: 'white',
        backgroundColor: 'blue',
        margin: 10,
    },
    container: {
        marginTop: 100,
    }
}

export default Counter;
