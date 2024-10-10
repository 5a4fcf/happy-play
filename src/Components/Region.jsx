import { useEffect, useState } from "react";
import { FormControl, MenuItem, Select, FormLabel } from "@mui/material";

export default function Region({handleChange, required=true}) {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        // need to implement isLoading some time
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
        <FormControl fullWidth required>
            <FormLabel htmlFor="region">Region</FormLabel>
            <Select
                labelId="region"
                name="region"
                label="Region"
                onChange={handleChange}
            >
                {regionsOptions}
            </Select>
        </FormControl>
    )
}