import React from 'react';
import {
	FormGroup,
	Button,
    Alert
} from 'reactstrap';

import TextInput from './../../../components/Form/TextInput/TextInput';
import Checkbox from './../../../components/Form/Checkbox/Checkbox';

import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";


const LoginForm = (props) => {
	return(
		<form onSubmit={props.onSubmit}>
			<FormGroup className="mb-2">
				<TextInput 	
					inputRef={props.register}
					error={!!props.errors.email || !!props.errors.summary}
					helperText={props.errors?.email?.message || props.errors?.summary?.message}
					icon={EmailIcon}
					name="email"
					label="Email"
					variant="outlined"
				/>
			</FormGroup>
			<FormGroup className="mb-2">
				<TextInput 	
					inputRef={props.register}
					error={!!props.errors.password || !!props.errors.summary}
					helperText={props.errors?.password?.message || props.errors?.summary?.message}
					icon={LockIcon}
					name="password"
					label="Пароль"
					type="password"
					variant="outlined"
				/>
			</FormGroup>
			<FormGroup>
				<Checkbox
					name="rememberMe"
					inputRef={props.register}
					color="primary"
					label="Запомнить меня"
				/>
			</FormGroup>
			<FormGroup className="text-center">
				<Button className="my-4" color="primary" variant="contained" type="submit">Вход</Button>
			</FormGroup>	
		</form>
	)
}

export default LoginForm;