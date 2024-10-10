import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function BarangayInput({municipalityCode, handleChange}) {
    const [barangays, setBarangays] = useState([]);

    https://psgc.gitlab.io/api//cities-municipalities/$municipalityCode/barangays

    useEffect(() => {
        fetch(`https://psgc.gitlab.io/api//cities-municipalities/${municipalityCode}/barangays`).then(async(response) => {
            const barangaysList = await response.json();
            setBarangays(barangaysList);
        });
    }, [municipalityCode]);

    const barangaysOptions = barangays.map((barangay) => {
        return (
            <MenuItem value={barangay.code}>{ barangay.name }</MenuItem>
        )
    });

    return (
        <FormControl fullWidth>
            <InputLabel id="barangays">Barangay</InputLabel>
            <Select
                labelId="barangays"
                name="barangay"
                // value={region}
                label="Barangay"
                onChange={handleChange}
            >
                { barangaysOptions }
            </Select>
        </FormControl>
    )
}