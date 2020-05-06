import React, { useState, useRef } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
interface Person {
    firstName: string;
    lastNmae: string;
}
interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    //handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Counter: React.FC<Props> = () => {
    const [count, setCount] = useState<any>(1);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLInputElement>(null);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (

        <div>
            <h1>{count}</h1>
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
            <div ref={divRef}>
                <TextField
                    ref={inputRef}
                />
            </div>
        </div>
    )
}

const Styles = {
    button: {
        color: 'white',
        backgroundColor: 'blue',
        margin: 10,
    }
}

export default Counter;
