import { useEffect, useState } from "react";

export default function BarangayInput({municipalityCode, handleChange}) {
    const [barangays, setBarangays] = useState([]);

    https://psgc.gitlab.io/api//cities-municipalities/$municipalityCode/barangays

    useEffect(() => {
        fetch(`https://psgc.gitlab.io/api//cities-municipalities/${municipalityCode}/barangays`).then(async(response) => {
            const barangaysList = await response.json();
            console.log(barangaysList)
            setBarangays(barangaysList);
        });
    }, [municipalityCode]);

    const barangaysOptions = barangays.map((barangay) => {
        return (
            <option value={barangay.code}>{ barangay.name }</option>
        )
    });

    return (
        !municipalityCode ? <></> :
        <>
            <label for="barangays">Barangay</label>
            <select id="barangay" name="barangay" onChange={handleChange}>
                {barangaysOptions}
            </select>
        </>
    )
}