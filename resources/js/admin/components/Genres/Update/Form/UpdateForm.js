
import React from 'react';
import {
	FormGroup,
	Col,
	Row,
} from 'reactstrap';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import CreateIcon from '@material-ui/icons/Create';
import LinkIcon from '@material-ui/icons/Link';
import VisibilityIcon from '@material-ui/icons/Visibility';

import UsIcon from './../../../Flags/UsIcon.js';
import KgIcon from './../../../Flags/KgIcon';
import KzIcon from './../../../Flags/KzIcon';
import UzIcon from './../../../Flags/UzIcon';
import TgIcon from './../../../Flags/TgIcon';

import TextInput from './../../../Form/TextInput/TextInput';
import SelectInput from './../../../Form/SelectInput/SelectInput';

const UpdateForm = (props) => {
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
	                            	defaultValue={props.genre.title}
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
	                            	defaultValue={props.genre.slug}
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
		                            defaultValue={props.genre.status}
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
				                    defaultValue={props.genre.description}
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
	                            	defaultValue={props.genre?.trans?.en_title}
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
	                            	defaultValue={props.genre?.trans?.kg_title}
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
	                            	defaultValue={props.genre?.trans?.kz_title}
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
	                            	defaultValue={props.genre?.trans?.uz_title}
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
	                            	defaultValue={props.genre?.trans?.tg_title}
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
				                    defaultValue={props.genre?.trans?.en_description}
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
				                    defaultValue={props.genre?.trans?.kg_description}
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
				                    defaultValue={props.genre?.trans?.kz_description}
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
				                    defaultValue={props.genre?.trans?.uz_description}
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
				                    defaultValue={props.genre?.trans?.tg_description}
									rows={4}
									rowsMax={4}
				                    placeholder="Описание жанра..."
			                   	/>
			                </FormGroup>
	                	</Col>
	                </Row>	
	                <Row className="justify-content-end">
	                	<Col lg="3" sm="4">
	                		<Button 
				            	fullWidth 
				                variant="contained"
				                color="primary"
				                size="medium"
				                type="submit"
				            >
				               	Изменить
				            </Button>
	                	</Col>
	                </Row>
	            </div>
        	</form>
		</>
	)
}

export default UpdateForm;