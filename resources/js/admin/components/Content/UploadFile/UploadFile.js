import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Alert} from 'reactstrap';
import LinkIcon from '@material-ui/icons/Link';
import TextInput from './../../Form/TextInput/TextInput';
import FileInput from './../../Form/FileInput/FileInput';

const useStyles = makeStyles(theme => ({
	label: {
		fontSize: '1rem',
		color: '#8898aa'
	}
}));

const UploadFile = props => {
	let classes = useStyles();

	const getDefaultValue = (isTrans,name,model) => {
		if(isTrans) 
		{
			if(model.trans)
			{
				if(model.trans[name])
				{
					return [model.trans[name]];
				}
				else
				{
					return [];
				}
			} 
			else
			{
				return [];
			}
		}
		else
		{	
			if(model[name])
			{	
				return [model[name]];
			}
			else
			{
				return [];
			}
		}
	}
	return(
		props.uploadFile ? (
			<>	
				<label className={classes.label}>
	                {props.title}
	            </label>
	            {
	            	props.error ? (
	                	<Alert color="danger">
	                    	<strong>
	                        	{
	                            	props.errorMessage
	                        	}
	                    	</strong>
	                	</Alert>
	            	) : null
	        	}
	            <FileInput
	                name={props.name}
	                defaultValue={getDefaultValue(props.isTrans,props.name,props.model)}
	                error={props.error}
	                control={props.control}
	            />
        	</>
		) : (
			<TextInput
                name={props.linkName}
                inputRef={props.register}
                variant="outlined"
                label={props.linkLabel}
                size="small"
                icon={LinkIcon}
                error={props.linkError}
                helperText={props.linkErrorMessage}
                defaultValue={props.linkValue}
            />
		)
	)
}


export default UploadFile;