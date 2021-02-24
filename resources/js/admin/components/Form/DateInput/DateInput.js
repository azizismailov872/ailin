import React,{useState} from 'react';
import ReactDatetime from "react-datetime";
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment"
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	small: {
		borderColor: 'transparent',
        paddingTop: '5px',
        paddingBottom: '5px',
	},
	datetime: {
		height: '40px'
	}
}))

const DateComponent = ({className,inputRef,initialDate,onChange,...props}) => {

	const classes = useStyles();
	
	return(
		<ReactDatetime
        	value={initialDate}
        	onChange={onChange}
        	closeOnSelect
        	className={classes.datetime}
        	locale="ru_RU"
	        inputProps={{
	        		...props,
	                className: classes.small + ' form-control',
	                ref:inputRef,
	                autoComplete: "off"
	              }}
        	timeFormat={false}
        />
	)
}


const DateInput = (props) => {

	const Icon = props.icon;

	const [initialDate,setInitialDate] = useState("");

	const onChange = (date) => {
		setInitialDate(date);
	}

	return(
		<TextField 
			variant={props.variant}
			label={props.label}
			size={props.size}
			margin="normal"
			fullWidth
			InputProps={{
				inputComponent:() => <DateComponent 
					initialDate={initialDate}
					onChange={onChange}
					inputRef={props.inputRef}
					name={props.name}
				/>,
				startAdornment:(
					<InputAdornment position="start">
						<Icon />
                	</InputAdornment>
				)
			}}

		/>
	)
}

export default DateInput;