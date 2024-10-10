import { FormControl, FormLabel, TextField } from "@mui/material";

export default function TextInput({label, name, handleChange}) {
    
    return (
        <FormControl>
            <FormLabel htmlFor={ name }>{ label }</FormLabel>
            <TextField
                id={name}
                type="text"
                name={name}
                placeholder={label}
                autoFocus
                required={true}
                fullWidth
                variant="outlined"
                sx={{ ariaLabel: 'text', height: '32px'}}
                onChange={handleChange}
            />
        </FormControl>
    )
}