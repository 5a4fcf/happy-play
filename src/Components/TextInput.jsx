import { FormControl, FormLabel, TextField } from "@mui/material";

export default function TextInput({label, name, handleChange, required=true}) {
    return (
        <FormControl required={required}>
            <FormLabel htmlFor={ name }>{ label }</FormLabel>
            <TextField
                id={name}
                type="text"
                name={name}
                placeholder={label}
                autoFocus
                required
                fullWidth
                variant="outlined"
                sx={{ ariaLabel: 'text', height: '32px', borderRadius: '32px'}}
                onChange={handleChange}

            />
        </FormControl>
    )
}