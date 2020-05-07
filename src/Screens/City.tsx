import React from 'react'
import { useSelector } from 'react-redux'
interface CityProps {
    cityName?: string;
    props?: any;
}

const City: React.FC<CityProps> = (props) => {

    const counter = useSelector((state: any) => state.counter)
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
