import React,{useState} from 'react';
import {
	FormGroup,
	Form,
	Input,
	Col,
	Row,
	Alert
} from 'reactstrap';

import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import LinkIcon from '@material-ui/icons/Link';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {CloudUpload} from '@material-ui/icons';



import KgIcon from './../../../Flags/KgIcon.js';
import KzIcon from './../../../Flags/KzIcon';
import UsIcon from './../../../Flags/UsIcon';
import UzIcon from './../../../Flags/UzIcon';
import TgIcon from './../../../Flags/TgIcon';

import TextInput from './../../../Form/TextInput/TextInput';
import SelectInput from './../../../Form/SelectInput/SelectInput';
import FileInput from './../../../Form/FileInput/FileInput';


const useStyles = makeStyles(theme => ({
	label: {
		fontSize: '1rem',
		color: '#8898aa'
	}
}));

const CreateForm = (props) => {

	const classes = useStyles();

	return (
        <>
            <form onSubmit={props.onSubmit} encType="multipart/form-data">
                <h6 className="heading-small text-muted mb-4">
                    Основная информация
                </h6>
                <div className="pl-lg-4">
                    <Row>
                        <Col lg="4">
                            <FormGroup>
                                <TextInput
                                    name="title"
                                    inputRef={props.register}
                                    variant="outlined"
                                    label="Название"
                                    size="small"
                                    icon={CreateIcon}
                                    error={
                                        !!props.errors.title ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.title?.message ||
                                        props.errors?.summary?.message
                                    }
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="4">
                            <FormGroup>
                                <SelectInput
                                    name="genre_id"
                                    control={props.control}
                                    variant="outlined"
                                    size="small"
                                    label="Жанр"
                                    defaultValue={0}
                                    icon={CreateIcon}
                                >
                                    <MenuItem value={0}>Не выбрано</MenuItem>
                                    {props.genres.length > 0
                                        ? props.genres.map((genre) => (
                                              <MenuItem
                                                  value={genre.id}
                                                  key={genre.id}
                                              >
                                                  {genre.title}
                                              </MenuItem>
                                          ))
                                        : null}
                                </SelectInput>
                            </FormGroup>
                        </Col>
                        <Col lg="4">
                            <FormGroup>
                                <SelectInput
                                    name="uploadFile"
                                    control={props.control}
                                    variant="outlined"
                                    size="small"
                                    label="Тип файла"
                                    defaultValue={0}
                                    icon={CloudUpload}
                                >
                                    <MenuItem value={0}>Ссылка</MenuItem>
                                    <MenuItem value={1}>Загрузить файл</MenuItem>
                                </SelectInput>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <FormGroup>
                                <TextInput
                                    name="author"
                                    inputRef={props.register}
                                    variant="outlined"
                                    label="Автор"
                                    size="small"
                                    icon={AccountCircleIcon}
                                    error={
                                        !!props.errors.author ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.author?.message ||
                                        props.errors?.summary?.message
                                    }
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
                                    error={
                                        !!props.errors.slug ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.slug?.message ||
                                        props.errors?.summary?.message
                                    }
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="4">
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
                    <Row>
                        <Col lg="12">
                            <FormGroup>
                                {props.uploadFile ? (
                                    <>
                                        {props.errors.ru_file ? (
                                            <Alert color="danger">
                                                <strong>
                                                    {
                                                        props.errors.ru_file
                                                            .message
                                                    }
                                                </strong>
                                            </Alert>
                                        ) : null}
                                        <label className={classes.label}>
                                            Аудиокнига
                                        </label>
                                        <FileInput
                                            name="ru_file"
                                            error={!!props.errors.ru_file}
                                            control={props.control}
                                        />
                                    </>
                                ) : (
                                    <TextInput
                                        name="ru_file_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Ссылка на файл"
                                        size="small"
                                        icon={LinkIcon}
                                        error={
                                            !!props.errors.ru_file_link ||
                                            !!props.errors.summary
                                        }
                                        helperText={
                                            props.errors?.ru_file_link
                                                ?.message ||
                                            props.errors?.summary?.message
                                        }
                                    />
                                )}
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
                                    error={
                                        !!props.errors.en_title ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.en_title?.message ||
                                        props.errors?.summary?.message
                                    }
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
                                    error={
                                        !!props.errors.kg_title ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.kg_title?.message ||
                                        props.errors?.summary?.message
                                    }
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
                                    error={
                                        !!props.errors.kz_title ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.kz_title?.message ||
                                        props.errors?.summary?.message
                                    }
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
                                    error={
                                        !!props.errors.uz_title ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.uz_title?.message ||
                                        props.errors?.summary?.message
                                    }
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
                                    error={
                                        !!props.errors.tg_title ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.tg_title?.message ||
                                        props.errors?.summary?.message
                                    }
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">
                    Перевод описания
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
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">
                    Файлы с переводом
                </h6>
                <div className="pl-lg-4">
                    <Row>
                        <Col lg="6">
                            <FormGroup>
                                {props.uploadFile ? (
                                    <>
                                        {props.errors.en_file ? (
                                            <Alert color="danger">
                                                <strong>
                                                    {
                                                        props.errors.en_file
                                                            .message
                                                    }
                                                </strong>
                                            </Alert>
                                        ) : null}
                                        <label className={classes.label}>
                                            Английский
                                        </label>
                                        <FileInput
                                            name="en_file"
                                            control={props.control}
                                            error={!!props.errors.en_file}
                                        />
                                    </>
                                ) : (
                                    <TextInput
                                        name="en_file_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Английский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={
                                            !!props.errors.en_file_link ||
                                            !!props.errors.summary
                                        }
                                        helperText={
                                            props.errors?.en_file_link
                                                ?.message ||
                                            props.errors?.summary?.message
                                        }
                                    />
                                )}
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                {props.uploadFile ? (
                                    <>
                                        {props.errors.ru_file ? (
                                            <Alert color="danger">
                                                <strong>
                                                    {
                                                        props.errors.ru_file
                                                            .message
                                                    }
                                                </strong>
                                            </Alert>
                                        ) : null}
                                        <label className={classes.label}>
                                            Кыргызский
                                        </label>
                                        <FileInput
                                            name="kg_file"
                                            control={props.control}
                                            error={!!props.errors.kg_file}
                                        />
                                    </>
                                ) : (
                                    <TextInput
                                        name="kg_file_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Кыргызский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={
                                            !!props.errors.kg_file_link ||
                                            !!props.errors.summary
                                        }
                                        helperText={
                                            props.errors?.kg_file_link
                                                ?.message ||
                                            props.errors?.summary?.message
                                        }
                                    />
                                )}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <FormGroup>
                                {props.uploadFile ? (
                                    <>
                                        {props.errors.ru_file ? (
                                            <Alert color="danger">
                                                <strong>
                                                    {
                                                        props.errors.ru_file
                                                            .message
                                                    }
                                                </strong>
                                            </Alert>
                                        ) : null}
                                        <label className={classes.label}>
                                            Казахский
                                        </label>
                                        <FileInput
                                            name="kz_file"
                                            control={props.control}
                                            error={!!props.errors.kz_file}
                                        />
                                    </>
                                ) : (
                                    <TextInput
                                        name="kz_file_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Казахский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={
                                            !!props.errors.kz_file_link ||
                                            !!props.errors.summary
                                        }
                                        helperText={
                                            props.errors?.kz_file_link
                                                ?.message ||
                                            props.errors?.summary?.message
                                        }
                                    />
                                )}
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                {props.uploadFile ? (
                                    <>
                                        {props.errors.ru_file ? (
                                            <Alert color="danger">
                                                <strong>
                                                    {
                                                        props.errors.ru_file
                                                            .message
                                                    }
                                                </strong>
                                            </Alert>
                                        ) : null}
                                        <label className={classes.label}>
                                            Узбекский
                                        </label>
                                        <FileInput
                                            name="uz_file"
                                            control={props.control}
                                            error={!!props.errors.uz_file}
                                        />
                                    </>
                                ) : (
                                    <TextInput
                                        name="uz_file_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Узбекский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={
                                            !!props.errors.uz_file_link ||
                                            !!props.errors.summary
                                        }
                                        helperText={
                                            props.errors?.uz_file_link
                                                ?.message ||
                                            props.errors?.summary?.message
                                        }
                                    />
                                )}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <FormGroup>
                                {props.uploadFile ? (
                                    <>
                                        {props.errors.ru_file ? (
                                            <Alert color="danger">
                                                <strong>
                                                    {
                                                        props.errors.ru_file
                                                            .message
                                                    }
                                                </strong>
                                            </Alert>
                                        ) : null}
                                        <label className={classes.label}>
                                            Таджикский
                                        </label>
                                        <FileInput
                                            name="tg_file"
                                            error={!!props.errors.tg_file}
                                            control={props.control}
                                        />
                                    </>
                                ) : (
                                    <TextInput
                                        name="tg_file_link"
                                        inputRef={props.register}
                                        variant="outlined"
                                        label="Таджикский"
                                        size="small"
                                        icon={LinkIcon}
                                        error={
                                            !!props.errors.tg_file_link ||
                                            !!props.errors.summary
                                        }
                                        helperText={
                                            props.errors?.tg_file_link
                                                ?.message ||
                                            props.errors?.summary?.message
                                        }
                                    />
                                )}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col lg="3" sm="4" className="mb-3 mb-md-0">
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                size="medium"
                                onClick={() => props.onReset()}
                            >
                                Очистить
                            </Button>
                        </Col>
                        <Col lg="3" sm="4">
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="medium"
                                type="submit"
                            >
                                Создать
                            </Button>
                        </Col>
                    </Row>
                </div>
            </form>
        </>
    );
}

export default CreateForm;
