import React from 'react';
import {
	FormGroup,
	Form,
	Input,
	Col,
	Row,
	Alert
} from 'reactstrap';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import {CloudUpload} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core';

import TextInput from './../../../Form/TextInput/TextInput';
import FileInput from './../../../Form/FileInput/FileInput';
import SelectInput from './../../../Form/SelectInput/SelectInput'; 

const useStyles = makeStyles(theme => ({
	label: {
		fontSize: '1rem',
		color: '#8898aa'
	}
}));


const UploadVideoForm = (props) => {

	const classes = useStyles();

	return(
		<form onSubmit={props.onSubmit}  encType="multipart/form-data">
			<h6 className="heading-small text-muted mb-4">
				Основная информация
			</h6>
			<div className="pl-lg-4">
				<Row>
					<Col md="12">
						<FormGroup>
			            	<SelectInput
                                name="uploadVideo"
                                control={props.control}
                                variant="outlined"
                                size="small"
                                label="Тип файла"
                                defaultValue={props.uploadVideo}
                                icon={CloudUpload}
                           	>
								<MenuItem value={0}>Ссылка</MenuItem>
                                <MenuItem value={1}>Загрузить файл</MenuItem>
                           	</SelectInput>
		            	</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md="12">
						<FormGroup>
			            	{
			            		props.uploadVideo ? (
			            			<>
			            			<label className={classes.label}>
										Русский язык
									</label>
			            			<FileInput
                                        name="ru_video"
                                        defaultValue={props.model?.ru_video ? [
                                        	props.model.ru_video
                                        ] : []}
                                        error={!!props.errors.ru_video}
                                        control={props.control}
                                    />
                                    </>
			            		) : (	
			            			<TextInput
                                    	name="ru_video_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Ссылка на файл"
                                        size="small"
                                        icon={LinkIcon}
                                        error={!!props.errors.ru_video_link || !!props.errors.summary}
                                        helperText={props.errors?.ru_video_link?.message || props.errors?.summary?.message}
                                        defaultValue={props.model?.video?.ru_video_link}
                                    />
			            		)
			            	}
		            	</FormGroup>
					</Col>
				</Row>	
			</div>
			<hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">
                Перевод
            </h6>
            <div className="pl-lg-4">
            	<Row>
					<Col md="6">
						<FormGroup>
			            	{
			            		props.uploadVideo ? (
			            			<>
			            			<label className={classes.label}>
										Английский язык
									</label>
			            			<FileInput
                                        name="en_video"
                                        defaultValue={props.model?.en_video ? [
                                        	props.model.en_video
                                        ] : []}
                                        error={!!props.errors.en_video}
                                        control={props.control}
                                    />
                                    </>
			            		) : (	
			            			<TextInput
                                    	name="en_video_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Английский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={!!props.errors.en_video_link || !!props.errors.summary}
                                        helperText={props.errors?.en_video_link?.message || props.errors?.summary?.message}
                                        defaultValue={props.model?.video?.en_video_link}
                                    />
			            		)
			            	}
		            	</FormGroup>
					</Col>
					<Col md="6">
						<FormGroup>
			            	{
			            		props.uploadVideo ? (
			            			<>
			            			<label className={classes.label}>
										Кыргызский язык
									</label>
			            			<FileInput
                                        name="kg_video"
                                        defaultValue={props.model?.kg_video ? [
                                        	props.model.kg_video
                                        ] : []}
                                        error={!!props.errors.kg_video}
                                        control={props.control}
                                    />
                                    </>
			            		) : (	
			            			<TextInput
                                    	name="kg_video_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Кыргызский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={!!props.errors.kg_video_link || !!props.errors.summary}
                                        helperText={props.errors?.kg_video_link?.message || props.errors?.summary?.message}
                                        defaultValue={props.model?.video?.kg_video_link}
                                    />
			            		)
			            	}
		            	</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<FormGroup>
			            	{
			            		props.uploadVideo ? (
			            			<>
			            			<label className={classes.label}>
										Казахский язык
									</label>
			            			<FileInput
                                        name="kz_video"
                                        defaultValue={props.model?.kz_video ? [
                                        	props.model.kz_video
                                        ] : []}
                                        error={!!props.errors.kz_video}
                                        control={props.control}
                                    />
                                    </>
			            		) : (	
			            			<TextInput
                                    	name="kz_video_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Казахский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={!!props.errors.kz_video_link || !!props.errors.summary}
                                        helperText={props.errors?.kz_video_link?.message || props.errors?.summary?.message}
                                        defaultValue={props.model?.video?.kz_video_link}
                                    />
			            		)
			            	}
		            	</FormGroup>
					</Col>
					<Col md="6">
						<FormGroup>
			            	{
			            		props.uploadVideo ? (
			            			<>
			            			<label className={classes.label}>
										Узбекский язык
									</label>
			            			<FileInput
                                        name="uz_video"
                                        defaultValue={props.model?.uz_video ? [
                                        	props.model.uz_video
                                        ] : []}
                                        error={!!props.errors.uz_video}
                                        control={props.control}
                                    />
                                    </>
			            		) : (	
			            			<TextInput
                                    	name="uz_video_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Узбекский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={!!props.errors.uz_video_link || !!props.errors.summary}
                                        helperText={props.errors?.uz_video_link?.message || props.errors?.summary?.message}
                                        defaultValue={props.model?.video?.uz_video_link}
                                    />
			            		)
			            	}
		            	</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md="12">
						<FormGroup>
			            	{
                                props.uploadVideo ? (
                                    <>
                                    <label className={classes.label}>
                                        Таджикский язык
                                    </label>
                                    <FileInput
                                        name="tg_video"
                                        defaultValue={props.model?.tg_video ? [
                                            props.model.tg_video
                                        ] : []}
                                        error={!!props.errors.tg_video}
                                        control={props.control}
                                    />
                                    </>
                                ) : (   
                                    <TextInput
                                        name="tg_video_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Таджикский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={!!props.errors.tg_video_link || !!props.errors.summary}
                                        helperText={props.errors?.tg_video_link?.message || props.errors?.summary?.message}
                                        defaultValue={props.model?.video?.tg_video_link}
                                    />
                                )
                            }
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
                            Загрузить
                        </Button>
                    </Col>
                </Row>
            </div>
		</form>
	)
}

export default UploadVideoForm;