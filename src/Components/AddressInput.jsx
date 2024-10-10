import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function AddressInput({handleChange}) {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        fetch("https://psgc.gitlab.io/api/regions/").then(async(response) => {
            const regionsList = await response.json();
            setRegions(regionsList);
        });
    }, []);

    const regionsOptions = regions.map((region) => {
        return (
            <MenuItem value={region.code}>{ region.name }</MenuItem>
        )
    });

    return (
        <FormControl fullWidth>
            <InputLabel id="region">Region</InputLabel>
            <Select
                labelId="region"
                name="region"
                // value={region}
                label="Region"
                onChange={handleChange}
            >
                {regionsOptions}
            </Select>
        </FormControl>
    )
}