import React from 'react';
import useStyles from './styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountForm from "../../components/signUpFormSteps/accountForm/AccountForm";
import ContactForm from "../../components/signUpFormSteps/contactForm/ContactForm";
import ReviewForm from "../../components/signUpFormSteps/reviewForm/ReviewForm";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function getSteps() {
    return ['Personal info', 'Contact info', 'Review'];
}

function MultiStepSignUp() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const [stepOneFields, setStepOneFields] = React.useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        rePassword: '',
    });
    const [stepTwoFields, setStepTwoFields] = React.useState({
        phone: '',
        address: '',
        postalCode: '',
        city: '',
        state: '',
        country: '',
    });

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <AccountForm fields={stepOneFields} handleFieldChanges={setStepOneFields}/>;
            case 1:
                return <ContactForm fields={stepTwoFields} handleFieldChanges={setStepTwoFields}/>;
            case 2:
                return <ReviewForm fields={{...setStepOneFields, ...setStepTwoFields}}/>;
            default:
                return 'Unknown stepIndex';
        }
    }

    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <div className={classes.avatarContainer}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </div>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.form}>
                {activeStep === steps.length ? (
                    <div>
                        <Typography>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                    disabled={
                                        (activeStep === 0 && Object.values(stepOneFields).some(input => input.length === 0)) || (activeStep === 1 && Object.values(stepOneFields).some(input => input.length === 0))
                                    }
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MultiStepSignUp;

//Object.values(stepOneFields).every(input => input.length < 0 )

// const [firstName, setFirstName] = React.useState('');
// const [lastName, setLastName] = React.useState('');
// const [username, setUsername] = React.useState('');
// const [email, setEmail] = React.useState('');
// const [password, setPassword] = React.useState('');
// const [rePassword, setRePassword] = React.useState('');
// const [phone, setPhone] = React.useState('');
// const [address, setAddress] = React.useState('');
// const [postalCode, setPostalCode] = React.useState('');
// const [city, setCity] = React.useState('');
// const [state, setState] = React.useState('');
// const [country, setCountry] = React.useState('');
