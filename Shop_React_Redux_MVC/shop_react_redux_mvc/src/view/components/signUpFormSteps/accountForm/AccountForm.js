import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AccountForm({fields, handleFieldChanges}) {

    function handleChange(e) {
        handleFieldChanges({...fields, [e.target.name]:  e.target.value})
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Fill in all required fields (*)
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.firstName}
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.lastName}
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.username}
                        id="username"
                        name="username"
                        label="Username"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.email}
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.password}
                        id="password"
                        type="password"
                        name="password"
                        label="Password"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.rePassword}
                        id="rePassword"
                        type="password"
                        name="rePassword"
                        label="Repeat password"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}