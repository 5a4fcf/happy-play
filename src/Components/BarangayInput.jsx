import { useEffect, useState } from "react";
import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";

export default function BarangayInput({municipalityCode, handleChange, required=true}) {
    const [barangays, setBarangays] = useState([]);

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
        <FormControl fullWidth required>
            <FormLabel for="barangays">Barangay</FormLabel>
            <Select
                labelId="barangays"
                name="barangay"
                label="Barangay"
                sx={{ height: '32px', display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px'}}
                onChange={handleChange}
            >
                { barangaysOptions }
            </Select>
        </FormControl>
    )
}