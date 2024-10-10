import { useEffect, useState } from "react";

export default function MunicipalityInput({provinceCode, handleChange}) {
    const [municipalities, setMunicipalities] = useState([]);

    useEffect(() => {
        fetch(`https://psgc.gitlab.io/api/provinces/${provinceCode}/cities-municipalities`).then(async(response) => {
            const municipalitiesList = await response.json();
            console.log(municipalitiesList)
            setMunicipalities(municipalitiesList);
        });
    }, [provinceCode]);

    const municipalitiesOptions = municipalities.map((municipality) => {
        return (
            <option value={municipality.code}>{ municipality.name }</option>
        )
    });

    return (
        !provinceCode ? <></> :
        <>
            <label for="municipalities">Municipality</label>
            <select id="municipality" name="municipality" onChange={handleChange}>
                {municipalitiesOptions}
            </select>
        </>
    )
}