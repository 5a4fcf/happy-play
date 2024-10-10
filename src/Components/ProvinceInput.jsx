import { useEffect, useState } from "react";
import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";

export default function ProvinceInput({regionCode, handleChange, required=true}) {
    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        fetch(`https://psgc.gitlab.io/api/regions/${regionCode}/provinces`).then(async(response) => {
            const provincesList = await response.json();
            setProvinces(provincesList);
        });
    }, [regionCode]);

    const provincesOptions = provinces.map((province) => {
        return (
            <MenuItem value={province.code}>{ province.name }</MenuItem>
        )
    });

    return (
        <FormControl fullWidth required>
            <FormLabel for="provinces">Province</FormLabel>
            <Select
                labelId="provinces"
                name="province"
                label="Province"
                onChange={handleChange}
            >
                { provincesOptions }
            </Select>
        </FormControl>
    )
}