import React from 'react';
import TextField from '@material-ui/core/TextField'; 
import InputAdornment from "@material-ui/core/InputAdornment";

const TextInput = ({icon,className,...props}) => {
	const Icon = icon;

	return(
		<TextField
            margin="normal"
            fullWidth
            {...props}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Icon />
                    </InputAdornment>
                ),
            }}
            inputProps={{
                className: className
            }}
        />
	)
}

export default TextInput;