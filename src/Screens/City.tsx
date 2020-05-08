import React from 'react'
import {useSelector} from 'react-redux'

interface stateType {
    counterReducer: {
        counter: number
    }
    isLogged: boolean
}

interface CityProps {
    cityName?: string;
    props?: any;
}

const City: React.FC<CityProps> = (props) => {
    // const [state, dispatch] = useReducer(CounterReducer, initialState);
    const counterState = useSelector((state: stateType) => state.counterReducer);
    
    // const dispatch = useDispatch();

    return (
        <div className="App" style={Styles.container}>
            <h1>{props.cityName}</h1>
            <h1>{counterState.counter}</h1>
        </div>
    )
}

const Styles = {
    container: {
        marginTop: 80,
    }
}

export default City;
