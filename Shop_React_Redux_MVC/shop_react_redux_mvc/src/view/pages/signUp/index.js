import React, {useEffect} from 'react';
import useStyles from './styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountForm from "./signUpFormSteps/accountForm/AccountForm";
import ContactForm from "./signUpFormSteps/contactForm/ContactForm";
import ReviewForm from "./signUpFormSteps/reviewForm/ReviewForm";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {connect} from 'react-redux';
import {cntrlSignUp} from '../../../state-management/actions/userActions'
import {Link} from "react-router-dom";


function SignUp({signUp, history}) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [isFieldError, setFieldError] = React.useState(true);

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

    const fields = {...stepOneFields, ...stepTwoFields};

    useEffect( () => {
            if(fields.password.length > 0 && fields.password === fields.rePassword) {
                setFieldError(false);
            } else {
                setFieldError(true)
            }
        }, [stepOneFields.password, stepOneFields.rePassword]
    );

    const checkForNextStep = (step) => {
        if(isFieldError) return true;
        if(step === activeStep){
           switch (step) {
               case 0:
                   return !!Object.values(stepOneFields).some(value => value.length === 0);
               case 1:
                   return !!Object.values(stepTwoFields).some(value => value.length === 0);
               case 2:
                   return false;
           }
        }
        return true
    };

    function handleSignUp(){
        const signIpFields = {
            ...stepTwoFields,
            firstName: stepOneFields.firstName,
            lastName: stepOneFields.lastName,
            username: stepOneFields.username,
            password: stepOneFields.password,
        };
        signUp(signIpFields).then(()=> {
            history.push('/')
        })
    }

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <AccountForm fields={stepOneFields} handleFieldChanges={setStepOneFields}/>;
            case 1:
                return <ContactForm fields={stepTwoFields} handleFieldChanges={setStepTwoFields}/>;
            case 2:
                return <ReviewForm fields={fields}/>;
        }
    }

    const steps = ['Personal info', 'Contact info', 'Review'];

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
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
                <Button component={Link} to="/" variant="body2" >
                    {"Back to Login page"}
                </Button>
            </div>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.form}>
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
                                    onClick={activeStep === steps.length - 1 ? handleSignUp : handleNext}
                                    className={classes.button}
                                    disabled={(checkForNextStep(activeStep))}
                                >
                                    {activeStep === steps.length - 1 ? 'Register' : 'Next'}
                                </Button>
                            </div>
                        </>
                    </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUp: signUpFields => dispatch(cntrlSignUp(signUpFields))
});


export default connect(null, mapDispatchToProps)(SignUp)
