import { useState } from "react";
import { FormControl, MenuItem, Select, FormLabel } from "@mui/material";

export default function NationalityInput({handleChange, required}) {
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
        <FormControl fullWidth required>
<           FormLabel htmlFor="nationality">Nationality</FormLabel>
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