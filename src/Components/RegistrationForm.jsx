import { useState } from 'react';

// styles and materials
import './RegistrationForm.css';
import {
    styled,
    Card,
    Stack,
    Button,
    Box,
    Divider,
    Checkbox,
    Typography,
    FormControlLabel,
    Link,
    Accordion,
    AccordionDetails,
    AccordionSummary
} from '@mui/material';
 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// assets
import logo from '../esat-mock-logo.png';

// components
import TextInput from "./TextInput";
import Region from "./Region";
import ProvinceInput from './ProvinceInput';
import MunicipalityInput from './MunicipalityInput';
import BarangayInput from './BarangayInput';
import NationalityInput from './NationalityInput';


const RegistrationCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: { width: '516px' }
}));

const SignUpContainer = styled(Stack)(( { theme } ) => ({
    minHeight: '100%',
    padding: theme.spacing(2),
    justifyContent: 'space-between'
}));

const SubmitButton = styled(Button)(({ }) => ({
    backgroundColor: "#4845D2",
    padding: '6px 12px',
    color: "#F4F3FC"
}));

export default function SignInForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    };

    return (
        <SignUpContainer direction="column">
            <RegistrationCard variant="outlined">
                <Box sx={{width: '156px', background: "rgb(75,108,183)", background: "linear-gradient(77deg, rgba(75,108,183,1) 30%, rgba(24,40,72,1) 100%)"}}>
                    <Typography sx={{ color: '#F4F3FC80', fontWeight: 900, fontSize: '32px', transform: 'translate(-40px, 180px) rotate(-90deg)'}}>REGISTRATION</Typography>
                </Box>
                <Box sx={{padding: "30px"}}>
                    <Box component="img" src={ logo }  sx={{ height: "150px", width: "auto" }}></Box>
                    <Divider></Divider>
                    <Typography
                        sx={{ width: '100%', fontSize: '16px', fontWeight: 600, lineHeight: '24px', paddingTop: '16px' }}
                    >
                        Happy Play Registration
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: '16px',
                            paddingTop: '16px',
                            textAlign: 'left'
                        }}
                    >
                        <TextInput label="First Name" name="firstName" handleChange={handleChange}></TextInput>
                        <TextInput label="Last Name" name="lasttName" handleChange={handleChange}></TextInput>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Birthday" name="birthDate" onChange={(value) => setInputs({...inputs, birthDate: value})}></DatePicker>
                        </LocalizationProvider>

                        <NationalityInput onChange={handleChange}></NationalityInput>

                        <Accordion elevation={0}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                type="text"
                            >
                            <Typography >Current Address</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Region handleChange={handleChange}></Region>
                                <ProvinceInput regionCode={inputs.region} handleChange={handleChange}></ProvinceInput>
                                <MunicipalityInput provinceCode={inputs.province} handleChange={handleChange}></MunicipalityInput>
                                <BarangayInput municipalityCode={inputs.municipality} handleChange={handleChange}></BarangayInput>
                                <TextInput label="Street/Sitio" name="street" handleChange={handleChange}></TextInput>
                            </AccordionDetails>
                        </Accordion>
                       
                        <FormControlLabel
                            control={<Checkbox value="agreeToTerms" color="primary" />}
                            label={
                                <Typography sx={{ textAlign: 'center' }}>
                                    I agree to Happy Play {' '}
                                    <span>
                                        <Link>
                                        Privacy Policy
                                        </Link>
                                    </span>
                                    {' '} and {' '}
                                    <span>
                                        <Link>
                                        Terms of Use
                                        </Link>
                                    </span>
                                </Typography>
                            }
                        />
                        <SubmitButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="#4845D2"
                        >
                            Register
                        </SubmitButton>
                    </Box>
                </Box>
            </RegistrationCard>
        </SignUpContainer>
    )
}