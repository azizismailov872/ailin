import React from 'react';
import {
	Row,
	Col,
	FormGroup,
} from 'reactstrap';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import CreateIcon from '@material-ui/icons/Create';
import LinkIcon from '@material-ui/icons/Link';
import EventIcon from '@material-ui/icons/Event';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import TextInput from './../../Form/TextInput/TextInput';
import DateInput from './../../Form/DateInput/DateInput';
import SelectInput from './../../Form/SelectInput/SelectInput';

const SearchForm = (props) => {
	return(
		<form onSubmit={props.onSubmit}>
			<Row>
				<Col xs="12" md="12" lg="4">
					<FormGroup>
						<TextInput 
							name="title"
							inputRef={props.register}
							variant="outlined"
							size="small"
							label="Название"
							icon={CreateIcon}
						/>
					</FormGroup>
				</Col>
				<Col xs="12" md="12" lg="4">
					<FormGroup>
						<TextInput 
							name="slug"
							inputRef={props.register}
							variant="outlined"
							size="small"
							label="Ссылка"
							icon={LinkIcon}
						/>
					</FormGroup>
				</Col>
				<Col xs="12" md="12" lg="4">
					<FormGroup>
						<DateInput 
							inputRef={props.register}
							name="created_at"
							label="Дата"
							icon={EventIcon}
							variant="outlined"
							size="small"
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col xs="12" md="12" lg="4">
                    <FormGroup className="mb-3">
                        <SelectInput
                            name="status"
                            control={props.control}
                            defaultValue={2}
                            variant="outlined"
                            size="small"
                            label="Статус"
                            icon={VisibilityIcon}                            
                        >
                            <MenuItem value={2}>Не выбрано</MenuItem>
                            <MenuItem value={1}>Активен</MenuItem>
                            <MenuItem value={0}>Не активен</MenuItem>
                        </SelectInput>
                    </FormGroup>
                </Col>
                <Col xs="12" md="12" lg="4">
					<FormGroup>
						<TextInput 
							name="author"
							inputRef={props.register}
							variant="outlined"
							size="small"
							label="Автор"
							icon={AccountCircleIcon}
						/>
					</FormGroup>
				</Col>
				<Col xs="12" md="12" lg="4">
					<FormGroup>
						<TextInput 
							name="genreTitle"
							inputRef={props.register}
							variant="outlined"
							size="small"
							label="Жанр"
							icon={CreateIcon}
						/>
					</FormGroup>
				</Col>
			</Row>	
			<Row className="justify-content-center justify-content-md-end">
                <Col xs="12" md="6" lg="3" className="mb-3 mb-md-0 text-right">
                    <Button
                        color="secondary"
                        variant="contained"
                        size="medium"
                        fullWidth
                        onClick={(e) => props.onReset()}
                    >
                        Очистить
                    </Button>
                </Col>
                <Col xs="12" md="6" lg="3" className="text-right">
                    <Button
	                    color="primary"
	                    variant="contained"
	                    size="medium"
	                    fullWidth
	                    type="submit"
                    >
                    	Поиск
                    </Button>
                </Col>
            </Row>
		</form>
	)
}

export default SearchForm;