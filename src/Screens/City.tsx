import React, { useReducer } from 'react'
import CounterReducer from '../store/reducers/counterReducer';


interface CityProps {
    cityName?: string;
    props?: any;
}

const City: React.FC<CityProps> = (props) => {
    const [state, dispatch] = useReducer(CounterReducer, 0);

    return (
        <div className="App" style={Styles.container}>
            <h1>{props.cityName}</h1>
            <h1>{state}</h1>
        </div>
    )
}

const Styles = {
    container: {
        marginTop: 80,
    }
}

export default City;
