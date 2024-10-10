import { FormControl, FormLabel, Input } from "@mui/material";

export default function DatePicker({label, name, handleChange}) {
    return (
        <FormControl>
            <FormLabel htmlFor={ name }>{ label }</FormLabel>
            <Input type="date" name={name} onChange={handleChange} fullWidth variant="outlined" sx={{ ariaLabel: 'text' }}></Input>

            {/* <TextField
            // error={emailError}
            // helperText={emailErrorMessage}
            id={name}
            type="text"
            name={name}
            placeholder={label}
            // autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            // color={emailError ? 'error' : 'primary'}
            sx={{ ariaLabel: 'text' }}
            /> */}
        </FormControl>
    )
}