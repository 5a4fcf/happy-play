import { useEffect, useState } from "react";
import ProvinceInput from './ProvinceInput';
import MunicipalityInput from './MunicipalityInput';
import BarangayInput from "./BarangayInput";
import TextInput from "./TextInput";

export default function AddressInput({handleChange}) {
    const [regions, setRegions] = useState([]);
    // const [selectedRegion, setSelectedRegion] = useState(null);
    // const [selectedProvince, setSelectedProvince] = useState(null);
    // const [selectedMunicipality, setSelectedMunicipality] = useState(null);
    // const [selectedBarangay, setSelectedBarangay] = useState(null);

    useEffect(() => {
        fetch("https://psgc.gitlab.io/api/regions/").then(async(response) => {
            const regionsList = await response.json();
            setRegions(regionsList);
        });
    }, []);

    const regionsOptions = regions.map((region) => {
        return (
            <option value={region.code}>{ region.name }</option>
        )
    });

    return (
        <>
            <label for="region">Region</label>
            <select id="region" name="region" onChange={handleChange}>
                {regionsOptions}
            </select>
            
        </>
    )
}