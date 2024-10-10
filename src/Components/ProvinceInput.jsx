import { useEffect, useState } from "react";

export default function ProvinceInput({regionCode, handleChange}) {
    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        fetch(`https://psgc.gitlab.io/api/regions/${regionCode}/provinces`).then(async(response) => {
            const provincesList = await response.json();
            console.log(provincesList)
            setProvinces(provincesList);
        });
    }, [regionCode]);

    const provincesOptions = provinces.map((province) => {
        return (
            <option value={province.code}>{ province.name }</option>
        )
    });

    return (
        !regionCode ? <></> :
        <>
            <label for="provinces">Provinces</label>
            <select id="province" name="province" onChange={handleChange}>
                { provincesOptions }
            </select>
        </>
    )
}