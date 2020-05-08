import React, { useReducer } from 'react'
import CounterReducer from '../store/reducers/counterReducer';
import {initialState} from '../store/reducers/counterReducer'
import {useSelector, useDispatch} from 'react-redux'

interface stateType {
    counter: Function,
    isLogged: Function,
}

interface CityProps {
    cityName?: string;
    props?: any;
}

const City: React.FC<CityProps> = (props) => {
    // const [state, dispatch] = useReducer(CounterReducer, initialState);
    const counter = useSelector((state: stateType) => state.counter);
    // const dispatch = useDispatch();

    return (
        <div className="App" style={Styles.container}>
            <h1>{props.cityName}</h1>
            <h1>{counter}</h1>
        </div>
    )
}

const Styles = {
    container: {
        marginTop: 80,
    }
}

export default City;
