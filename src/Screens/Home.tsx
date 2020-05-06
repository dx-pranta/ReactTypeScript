import React, { useState } from 'react'
import { Route } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu'
import CloudSharp from '@material-ui/icons/CloudSharp'
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

import Dhaka from './Dhaka';
import Tangail from './Tangail'
import Chittagong from './Chittagong';
import Comilla from './Comilla';

const Home: React.FC = (props: any) => {
    console.log(props.history);


    const [drawerVisibility, setDrawerVisibility] = useState(false);

    const handleClickMenu = () => {
        setDrawerVisibility(true);

    }
    const closeDrawer = () => {
        setDrawerVisibility(false);
    }


    return (
        <div>
            <div style={Styles.container}>
                <AppBar style={Styles.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClickMenu}>
                            <MenuIcon />
                        </IconButton>

                        <Typography style={Styles.typo}>bsWeather</Typography>
                        <CloudSharp />

                    </Toolbar>
                </AppBar>

                <Drawer
                    anchor="left"
                    variant="persistent"
                    open={drawerVisibility}
                >
                    <div style={Styles.drawerCloseButton}>
                        <IconButton onClick={closeDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>

                    <Divider />

                    <List>
                        {['Dhaka', 'Tangail', 'Chittagong', 'Comilla'].map((text, index) => (
                            <ListItem button key={text} onClick={() => props.history.push(`/${text}`)}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />

                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>

            <Route path='/Dhaka' component={Dhaka} />
            <Route path='/Tangail' component={Tangail} />
            <Route path='/Chittagong' component={Chittagong} />
            <Route path='/Comilla' component={Comilla} />

        </div>


    )
}

const Styles = {
    container: {
        display: "flex"
    },
    appBar: {
        backgroundColor: "#f54242"
    },
    typo: {
        fontWeight: 900,
        fontFamily: "monospace",
        fontSize: 20,
        marginRight: 10,
    },
    drawerCloseButton: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
};

export default Home;
