import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ProvinceInput({regionCode, handleChange}) {
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
        <FormControl fullWidth>
            <InputLabel id="provinces">Province</InputLabel>
            <Select
                labelId="provinces"
                name="province"
                // value={region}
                label="Province"
                onChange={handleChange}
            >
                { provincesOptions }
            </Select>
        </FormControl>
    )
}