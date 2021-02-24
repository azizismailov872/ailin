import React from 'react';
import {Controller} from 'react-hook-form';
import TextField from '@material-ui/core/TextField'; 
import InputAdornment from "@material-ui/core/InputAdornment";

const SelectInput = ({icon,className,control,name,defaultValue,variant,label,size,children,...props}) => {

	const Icon = icon;
	return(
		<Controller 
          control={control}
          name={name}
          defaultValue={defaultValue}
          as={<TextField
                variant={variant}
                fullWidth
                select
                margin="normal"
                label={label}
                size={size}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Icon />
                        </InputAdornment>
                    ),
                }}
                inputProps={{
                    className: className,
                    multiple: props.multiple
                }}
            >
                {
                	children
                }
            </TextField>
          } 
         />
	);
}

export default SelectInput;