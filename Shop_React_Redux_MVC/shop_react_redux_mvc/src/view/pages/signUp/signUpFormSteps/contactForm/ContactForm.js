import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function ContactForm({fields, handleFieldChanges}) {

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
                        value={fields.phone}
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.address}
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.postalCode}
                        id="postalCode"
                        name="postalCode"
                        label="Postal Code"
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.city}
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.state}
                        id="state"
                        name="state"
                        label="State"
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(e)=>handleChange(e)}
                        value={fields.country}
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}