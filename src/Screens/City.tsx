import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../store/actions'

interface stateType {
    counterReducer: {
        counter: number
    }
    isLogged: boolean,
    apiReducer: object,
}

interface CityProps {
    cityName?: string;
    history?: object;
    props?: any;
    coordinate: {
        latitude: number,
        longitude: number
    }
}

const City: React.FC<CityProps> = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(`https://api.openweathermap.org/data/2.5/weather?lat=${props.coordinate.latitude}&lon=${props.coordinate.longitude}&appid=98581d3025d63d9283f91a59e3334439`));

    }, [props.props.location, props.coordinate, dispatch]);

    const counterState = useSelector((state: stateType) => state.counterReducer);
    //const weatherState = useSelector((state: stateType) => state.apiReducer);


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
