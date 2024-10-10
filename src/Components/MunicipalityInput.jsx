import { useEffect, useState } from "react";
import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";

export default function MunicipalityInput({provinceCode, handleChange, required=true}) {
    const [municipalities, setMunicipalities] = useState([]);

    useEffect(() => {
        fetch(`https://psgc.gitlab.io/api/provinces/${provinceCode}/cities-municipalities`).then(async(response) => {
            const municipalitiesList = await response.json();
            setMunicipalities(municipalitiesList);
        });
    }, [provinceCode]);

    const municipalitiesOptions = municipalities.map((municipality) => {
        return (
            <MenuItem value={municipality.code}>{ municipality.name }</MenuItem>
        )
    });

    return (
        <FormControl fullWidth required>
            <FormLabel for="municipalities">Municipality</FormLabel>
            <Select
                labelId="municipalities"
                name="municipality"
                // value={region}
                label="Municipality"
                onChange={handleChange}
            >
                { municipalitiesOptions }
            </Select>
        </FormControl>
    )
}