export default function TextInput({label, name, handleChange}) {
    return (
        <>
            <label for={name}>{ label }</label>
            <input type="text" name={name} onChange={handleChange}></input>
        </>
    )
}