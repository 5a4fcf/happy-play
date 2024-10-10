import { useState } from 'react';
import TextInput from "./TextInput";
import "./SignInForm.css";
import AddressInput from "./AddressInput";
import ProvinceInput from './ProvinceInput';
import MunicipalityInput from './MunicipalityInput';
import BarangayInput from './BarangayInput';

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
        <div className="SignInForm">
            Happy Play Registration
            <form onSubmit={handleSubmit}>
                <TextInput label="First Name" name="firstName" handleChange={handleChange}></TextInput>
                <TextInput label="Last Name" name="lasttName" handleChange={handleChange}></TextInput>

                <label for="birthDate">Birthday</label>
                <input type="date" name="birthDate" onChange={handleChange}></input>

                <label for="nationality">Nationality</label>
                <select id="nationality" name="nationality" onChange={handleChange}>
                    <option value="Philippines">Philippines</option>
                </select>

                <AddressInput handleChange={handleChange}></AddressInput>
                <ProvinceInput regionCode={inputs.region} handleChange={handleChange}></ProvinceInput>
                <MunicipalityInput provinceCode={inputs.province} handleChange={handleChange}></MunicipalityInput>
                <BarangayInput municipalityCode={inputs.municipality} handleChange={handleChange}></BarangayInput>
                <TextInput label="Street/Sitio" name="street" handleChange={handleChange}></TextInput>

                {/* <label for="agreeToTerms"></label> */}
                <input name="agreeToTerms" type="checkbox" onChange={handleChange}></input>
                I agree to Happy Play Privacy Policy and Terms of Use

                <button>Register</button>
            </form>
        </div>
    )
}