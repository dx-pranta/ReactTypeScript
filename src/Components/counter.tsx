import React, { useState, useReducer } from 'react'
import Button from '@material-ui/core/Button';
import CounterReducer from '../store/reducers/counterReducer';


import { increment, decrement } from '../store/actions'



interface stateType {
    counter: Function,
    isLogged: Function,
}

interface ReducerType {
    counter: number,
    isLogged: boolean
}

const Counter: React.FC = () => {

    const [state, dispatch] = useReducer(CounterReducer, 0);

    // const counter = useSelector((state: stateType) => state.counter);
    // const dispatch = useDispatch();

    const handleIncrement = () => {
        console.log(state);
        dispatch(increment(1));
    }

    const handleDecrement = () => {
        dispatch(decrement(1));
    }

    return (

        <div style={Styles.container}>
            <h1>{state}</h1>
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
