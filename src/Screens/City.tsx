import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../store/actions'
import { Viewer, Entity, Camera } from "resium";
import { Cartesian3, createWorldTerrain } from "cesium";
const terrainProvider = createWorldTerrain();


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

    //const counterState = useSelector((state: stateType) => state.counterReducer);
    //const weatherState = useSelector((state: stateType) => state.apiReducer);
    const position = Cartesian3.fromDegrees(props.coordinate.longitude, props.coordinate.latitude, 300);
    const direction = Cartesian3.fromDegrees(90, 180, 180);
    const pointGraphics = { pixelSize: 10 };


    return (
        <div className="App" style={Styles.container}>
            <Viewer
                style={Styles.map}
                terrainProvider={terrainProvider}
            >

                <Camera position={position} direction={direction} />
                <Entity position={position} point={pointGraphics} name={props.cityName} description="Hello, world." />
            </Viewer>
        </div>
    )
}

const Styles = {
    container: {
        marginTop: 80,
    },
    paperContainer: {
        display: "flex",
        justifyContent: "space-around"
    },
    paper: {
        height: 300, width: 300, margin: 10
    },
    map: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
}



export default City;
