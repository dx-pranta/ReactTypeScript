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
        // console.log(props.coordinate);
        dispatch(fetchData(`https://api.darksky.net/forecast/ed06e25eb482c6745afa284e59a0e814/${props.coordinate.latitude},${props.coordinate.longitude}`));

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
