import React from 'react';
import {
	FormGroup,
	Col,
	Row,
} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import LinkIcon from '@material-ui/icons/Link';
import VisibilityIcon from '@material-ui/icons/Visibility';

import KgIcon from './../../../Flags/KgIcon.js';
import KzIcon from './../../../Flags/KzIcon';
import UsIcon from './../../../Flags/UsIcon';
import UzIcon from './../../../Flags/UzIcon';
import TgIcon from './../../../Flags/TgIcon';


import TextInput from './../../../Form/TextInput/TextInput';
import SelectInput from './../../../Form/SelectInput/SelectInput';


const CreateForm = (props) => {
	return(
		<>
		<form onSubmit={props.onSubmit}>
            <h6 className="heading-small text-muted mb-4">
                Основная информация
            </h6>
            <div className="pl-lg-4">
                <Row>
                    <Col lg="5">
                        <FormGroup>
                            <TextInput 
                            	name="title"
                            	inputRef={props.register}
                            	variant="outlined"
                            	label="Название"
                            	size="small"
                            	icon={CreateIcon}
                            	error={!!props.errors.title || !!props.errors.summary}
                            	helperText={props.errors?.title?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="4">
                        <FormGroup>
                            <TextInput 
                            	name="slug"
                            	inputRef={props.register}
                            	variant="outlined"
                            	label="Ссылка"
                            	size="small"
                            	icon={LinkIcon}
                            	error={!!props.errors.slug || !!props.errors.summary}
                            	helperText={props.errors?.slug?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="3">
                        <FormGroup>
                            <SelectInput
	                            name="status"
	                            control={props.control}
	                            defaultValue={1}
	                            variant="outlined"
	                            size="small"
	                            label="Статус"
	                            icon={VisibilityIcon}                            
	                        >
	                            <MenuItem value={1}>Активен</MenuItem>
	                            <MenuItem value={0}>Не активен</MenuItem>
	                        </SelectInput>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <FormGroup>
		                    <TextField
			                    inputRef={props.register}
			                    variant="outlined"
			                    label="Описание"
			                    name="description"
			                    fullWidth
			                    multiline
								rows={4}
								rowsMax={4}
			                    placeholder="Описание жанра..."
		                   	/>
		                </FormGroup>
                    </Col>
                </Row>
            </div>
            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">
                Перевод заголовка
            </h6>
            <div className="pl-lg-4">
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <TextInput 
                            	name="en_title"
                            	inputRef={props.register}
                            	variant="outlined"
                            	label="Английский"
                            	size="small"
                            	icon={UsIcon}
                            	error={!!props.errors.en_title || !!props.errors.summary}
                            	helperText={props.errors?.en_title?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <TextInput 
                            	name="kg_title"
                            	inputRef={props.register}
                            	variant="outlined"
                            	label="Кыргызский"
                            	size="small"
                            	icon={KgIcon}
                            	error={!!props.errors.kg_title || !!props.errors.summary}
                            	helperText={props.errors?.kg_title?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <TextInput 
                            	name="kz_title"
                            	inputRef={props.register}
                            	variant="outlined"
                            	label="Казахский"
                            	size="small"
                            	icon={KzIcon}
                            	error={!!props.errors.kz_title || !!props.errors.summary}
                            	helperText={props.errors?.kz_title?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <TextInput 
                            	name="uz_title"
                            	inputRef={props.register}
                            	variant="outlined"
                            	label="Узбекский"
                            	size="small"
                            	icon={UzIcon}
                            	error={!!props.errors.uz_title || !!props.errors.summary}
                            	helperText={props.errors?.uz_title?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <TextInput 
                            	name="tg_title"
                            	inputRef={props.register}
                            	variant="outlined"
                            	label="Таджикский"
                            	size="small"
                            	icon={TgIcon}
                            	error={!!props.errors.tg_title || !!props.errors.summary}
                            	helperText={props.errors?.tg_title?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">
                Пеервод описания
            </h6>
            <div className="pl-lg-4">
                <Row>
                	<Col lg="6">
                		<FormGroup>
		                    <TextField
			                    inputRef={props.register}
			                    variant="outlined"
			                    label="Английский"
			                    name="en_description"
			                    fullWidth
			                    multiline
								rows={4}
								rowsMax={4}
			                    placeholder="Описание жанра..."
		                   	/>
		                </FormGroup>
                	</Col>
                	<Col lg="6">
                		<FormGroup>
		                    <TextField
			                    inputRef={props.register}
			                    variant="outlined"
			                    label="Кыргызский"
			                    name="kg_description"
			                    fullWidth
			                    multiline
								rows={4}
								rowsMax={4}
			                    placeholder="Описание жанра..."
		                   	/>
		                </FormGroup>
                	</Col>
                </Row>
                <Row>
                	<Col lg="6">
                		<FormGroup>
		                    <TextField
			                    inputRef={props.register}
			                    variant="outlined"
			                    label="Казахский"
			                    name="kz_description"
			                    fullWidth
			                    multiline
								rows={4}
								rowsMax={4}
			                    placeholder="Описание жанра..."
		                   	/>
		                </FormGroup>
                	</Col>
                	<Col lg="6">
                		<FormGroup>
		                    <TextField
			                    inputRef={props.register}
			                    variant="outlined"
			                    label="Узбекский"
			                    name="uz_description"
			                    fullWidth
			                    multiline
								rows={4}
								rowsMax={4}
			                    placeholder="Описание жанра..."
		                   	/>
		                </FormGroup>
                	</Col>
                </Row>
                <Row>
                	<Col lg="12">
                		<FormGroup>
		                    <TextField
			                    inputRef={props.register}
			                    variant="outlined"
			                    label="Таджикский"
			                    name="tg_description"
			                    fullWidth
			                    multiline
								rows={4}
								rowsMax={4}
			                    placeholder="Описание жанра..."
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
                            Создать
                        </Button>
                    </Col>
                </Row>
            </div>
        </form>
        </>
	)
}


export default CreateForm;