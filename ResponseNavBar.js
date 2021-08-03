import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import clsx from 'clsx';

import adminDashboardScreen from './Dashbord'
//import NavBar from '../Helpers/components/Navigation'

import {
    CssBaseline,
    makeStyles,
    AppBar,
    Toolbar,
    Drawer,
    useTheme,
    MenuList,
    MenuItem,

} from '@material-ui/core'

import {
    GiHamburgerMenu,
} from 'react-icons/gi'

import {
    CgCloseO
} from 'react-icons/cg'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menu: {
        flexGrow: 1,
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),

        marginLeft: drawerWidth,
    },
}));



function Index() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <MenuList className={classes.menu}>
                        <GiHamburgerMenu size='2em'
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        />
                        <MenuItem>New Requests</MenuItem>
                        <MenuItem>Customers</MenuItem>
                        <MenuItem>Managers</MenuItem>
                        <MenuItem>Employees</MenuItem>
                    </MenuList>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div>

                    <div className={classes.drawerHeader} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <CgCloseO size='2em' /> : <CgCloseO size='2em' />}
                    </div>
                </div>
                <MenuItem>New Requests</MenuItem>
                <MenuItem>Customers</MenuItem>
                <MenuItem>Managers</MenuItem>
                <MenuItem>Employees</MenuItem>


            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route path='/' exact component={adminDashboardScreen} />


                </Switch>

            </main>
        </div>
    )
}

export default Index
