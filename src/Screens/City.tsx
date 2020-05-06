import React from 'react'

interface CityProps {
    cityName?: string;
    props?: any;
}

const City: React.FC<CityProps> = (props) => {
    return (
        <div className="App" style={Styles.container}>
            <h1>{props.cityName}</h1>
        </div>
    )
}

const Styles = {
    container: {
        marginTop: 80,
    }
}

export default City;
