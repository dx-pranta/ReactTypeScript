import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../store/actions'
import { Viewer, Entity, Camera, PolygonGraphics } from "resium";
import { Cartesian3, createWorldTerrain, Color, } from "cesium";
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

    // const position = Cartesian3.fromDegrees(props.coordinate.longitude, props.coordinate.latitude, 300);
    const position = Cartesian3.fromDegrees(136.86033081664658, 35.001719978413306, 1000);
    const position1 = Cartesian3.fromDegrees(props.coordinate.longitude + .001, props.coordinate.latitude + .001, 300);

    const direction = Cartesian3.fromDegrees(0, 0, 180);

    const pointGraphics = { pixelSize: 10 };

    const positionArray = Cartesian3.fromDegreesArray([
        props.coordinate.longitude, props.coordinate.latitude,
        props.coordinate.longitude + .02, props.coordinate.latitude + .01,
        props.coordinate.longitude + .06, props.coordinate.latitude + .01,
    ]);

    const positionArray1 = Cartesian3.fromDegreesArray([


        136.86033081664658,
        35.001719978413306,

        136.86065941083928,
        35.001714940570146,

        136.86065328782666,
        35.00144456045727,

        136.86032469471377,
        35.00144959825013,


        136.86033081664658,
        35.001719978413306,


    ]);

    const positionArrayTest = [
        [
            136.86033081664658,
            35.001719978413306
        ],
        [
            136.86065941083928,
            35.001714940570146
        ],
        [
            136.86065328782666,
            35.00144456045727
        ],
        [
            136.86032469471377,
            35.00144959825013
        ],
        [
            136.86033081664658,
            35.001719978413306
        ]
    ]






    return (
        <div className="App" style={Styles.container}>
            <Viewer
                style={Styles.map}
                terrainProvider={terrainProvider}
            >

                {/* <Camera position={position} direction={direction} /> */}

                {/* <Entity position={position} point={pointGraphics} name={props.cityName} description="one." />
                <Entity position={position1} point={pointGraphics} name={props.cityName} description="two." /> */}





                {positionArrayTest.map((item, index) => {
                    return <Entity
                        key={index}
                        position={Cartesian3.fromDegrees(item[0], item[1], 50)}
                        point={pointGraphics}
                    >
                    </Entity>

                })}


                <Entity onClick={() => console.log('hello')}>
                    <PolygonGraphics
                        hierarchy={positionArray1}
                        height={50}
                        material={Color.RED.withAlpha(0.5)}
                        outline={true}
                        outlineColor={Color.GREEN}
                        show={true}
                        outlineWidth={100}
                    />
                </Entity>

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
