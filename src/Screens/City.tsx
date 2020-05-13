import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../store/actions'
import { Viewer, Entity, Camera, PolygonGraphics, Billboard, BillboardCollection } from "resium";
import { Cartesian3, createWorldTerrain, Color, Transforms, PerspectiveOffCenterFrustum } from "cesium";
import icon from '../assets/icon.png'
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

    const position1 = Cartesian3.fromDegrees(props.coordinate.longitude + .001, props.coordinate.latitude + .001, 300);
    const direction = Cartesian3.fromDegrees(90, 180, 180);
    const center = Cartesian3.fromDegrees(props.coordinate.longitude, props.coordinate.latitude);
    const pointGraphics = { pixelSize: 10 };
    const positionArray = Cartesian3.fromDegreesArray([
        props.coordinate.longitude + .0001, props.coordinate.latitude + .0001,
        props.coordinate.longitude + .0002, props.coordinate.latitude + .0002,
        props.coordinate.longitude + .0003, props.coordinate.latitude + .0003,
        props.coordinate.longitude + .0004, props.coordinate.latitude + .0004,

    ]);


    return (
        <div className="App" style={Styles.container}>
            <Viewer
                style={Styles.map}
                terrainProvider={terrainProvider}
            >

                <Camera position={position} direction={direction} />
                <Entity position={position} point={pointGraphics} name={props.cityName} description="one." />
                <Entity position={position1} point={pointGraphics} name={props.cityName} description="two." />
                {/* 
                <Entity>
                    <PolygonGraphics
                        hierarchy={positionArray}
                        height={1}
                        material={Color.RED.withAlpha(0.5)}
                        outline={true}
                        outlineColor={Color.BLACK}
                        show={true}
                        outlineWidth={2}
                    />
                </Entity> */}
                <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
                    <Billboard
                        color={Color.RED}
                        position={new Cartesian3(0.0, 1000000.0, 0.0)}
                        image={icon}
                        scale={0.1}
                    />
                </BillboardCollection>


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
