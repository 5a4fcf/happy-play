import { FormControl, FormLabel, TextField } from "@mui/material";

export default function TextInput({label, name, handleChange, required=true}) {
    return (
        <FormControl required={required} fullWidth>
            <FormLabel htmlFor={ name }>{ label }</FormLabel>
            <TextField
                id={name}
                type="text"
                name={name}
                placeholder={label}
                autoFocus
                required
                variant="outlined"
                sx={{
                    borderRadius: '16px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        border: '1px',
                        height: '32px',
                        display: 'flex'
                    },
                    border: '1px',
                    height: '32px',
                    display: 'flex'

                }}
                onChange={handleChange}

            />
        </FormControl>
    )
}