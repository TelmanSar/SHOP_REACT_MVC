import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import StoreIcon from '@material-ui/icons/Store';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LocalStorageHelper from "../../../core/helpers/LocalStorageHelper";
import { ACCESS, USER_CREDENTIALS } from '../../../core/constants/util';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = ({history, }) => {
    const classes = useStyles();
    const user = LocalStorageHelper.getItem(USER_CREDENTIALS);
    const handleLogOut = () => {
        LocalStorageHelper.deleteItem(ACCESS);
        history.push('/')
    };

    const handleHomeRedirect = () => {
        history.push('/home')
    };

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton style={{color: 'white'}} onClick={handleHomeRedirect}>
                    <StoreIcon className={classes.icon} style={{fontSize: 35}}/>
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                    Online Shop
                </Typography>
                <Typography variant="h6" color="inherit" noWrap>
                     {`Welcome ${user.firstName} ${user.lastName}`}
                </Typography>
                <Button onClick={handleLogOut} color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    )
};

export default Header;