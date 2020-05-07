import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../store/actions'



const Counter: React.FC = () => {

    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(1));
    }

    const handleDecrement = () => {
        dispatch(decrement(1));
    }

    return (

        <div style={Styles.container}>
            <h1>{counter}</h1>
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
