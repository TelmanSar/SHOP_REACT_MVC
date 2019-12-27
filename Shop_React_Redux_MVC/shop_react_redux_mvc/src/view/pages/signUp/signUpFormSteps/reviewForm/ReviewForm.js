import React from "react";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

function ReviewForm({fields}) {

    const classes = useStyles();
    const listLabels = {
        firstName: "Name",
        lastName: "Last Name",
        username: "Username",
        email: "Email",
        phone: "Phone number",
        address: "Address",
        postalCode: "Postal code",
        city: "City",
        state: "State",
        country: "Country"
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Please review all the below information before registering
            </Typography>
            <List>
                {Object.entries(listLabels).map(entry => (
                    <ListItem className={classes.listItem} key={entry[0]}>
                        <ListItemText primary={entry[1]} />
                        <Typography variant="body2">{fields[entry[0]]}</Typography>
                    </ListItem>
                ))}

            </List>


        </React.Fragment>
    )

}

export default ReviewForm