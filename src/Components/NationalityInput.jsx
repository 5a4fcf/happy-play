import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function NationalityInput({handleChange}) {
    const [nationalities, setNationalities] = useState([{
        code: 1,
        name: "Philippines"
    }]);

    const nationalityOptions = nationalities.map((nationality) => {
        return (
            <MenuItem value={nationality.code}>{ nationality.name }</MenuItem>
        )
    });

    return (
        <FormControl fullWidth>
            <InputLabel id="nationality">Nationality</InputLabel>
            <Select
                labelId="nationality"
                name="nationality"
                label="Nationality"
                onChange={handleChange}
            >
                {nationalityOptions}
            </Select>
        </FormControl>
    )
}