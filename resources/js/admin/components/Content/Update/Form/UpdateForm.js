import React from 'react';
import {
    FormGroup,
    Form,
    Input,
    Col,
    Row,
    Alert
} from 'reactstrap';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';

import CreateIcon from '@material-ui/icons/Create';
import LinkIcon from '@material-ui/icons/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {CloudUpload} from '@material-ui/icons';

import UsIcon from './../../../Flags/UsIcon';
import KgIcon from './../../../Flags/KgIcon';
import KzIcon from './../../../Flags/KzIcon';
import UzIcon from './../../../Flags/UzIcon';
import TgIcon from './../../../Flags/TgIcon';


import TextInput from './../../../Form/TextInput/TextInput';
import SelectInput from './../../../Form/SelectInput/SelectInput';
import UploadFile from './../../UploadFile/UploadFile';

const useStyles = makeStyles(theme => ({
    label: {
        fontSize: '1rem',
        color: '#8898aa'
    }
}));


const UpdateForm = (props) => {

    const classes = useStyles();

    return(
        <form onSubmit={props.onSubmit} encType="multipart/form-data">
            <h6 className="heading-small text-muted mb-4">
                Основная информация
            </h6>
            <div className="pl-lg-4">
                <Row>
                    <Col xs="12" md="12" lg="4">
                        <FormGroup>
                            <TextInput 
                                name="title"
                                inputRef={props.register}
                                label="Название"
                                variant="outlined"
                                defaultValue={props?.model?.title}
                                size="small"
                                icon={CreateIcon}
                                error={!!props.errors.title || !!props.errors.summary}
                                helperText={props.errors?.title?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="12" lg="4">
                        <FormGroup>
                            <SelectInput
                                    name="genre_id"
                                    control={props.control}
                                    variant="outlined"
                                    size="small"
                                    label="Жанр"
                                    defaultValue={props.model?.genre_id}
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
                    <Col xs="12" md="12" lg="4">
                        <FormGroup>
                            <SelectInput
                                name="uploadFile"
                                control={props.control}
                                variant="outlined"
                                size="small"
                                label="Тип файла"
                                defaultValue={props.uploadFile}
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
                                label="Автор"
                                variant="outlined"
                                defaultValue={props?.model?.author}
                                size="small"
                                icon={AccountCircleIcon}
                                error={!!props.errors.author || !!props.errors.summary}
                                helperText={props.errors?.author?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>    
                    </Col>
                    <Col xs="12" md="12" lg="4">
                        <FormGroup>
                            <TextInput 
                                name="slug"
                                inputRef={props.register}
                                label="Ссылка"
                                variant="outlined"
                                defaultValue={props?.model?.slug}
                                size="small"
                                icon={LinkIcon}
                                error={!!props.errors.slug || !!props.errors.summary}
                                helperText={props.errors?.slug?.message || props.errors?.summary?.message}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="4">
                        <FormGroup>
                            <SelectInput
                                name="status"
                                control={props.control}
                                defaultValue={props.model.status}
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
                                defaultValue={props.model?.description}
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
                            <UploadFile 
                                uploadFile={props.uploadFile}
                                isTrans={false}
                                //
                                title="Файл"
                                register={props.register}
                                control={props.control}
                                //
                                model={props.model}
                                name="ru_file"
                                error={!!props.errors?.ru_file || !!props.errors?.summary}
                                errorMessage={
                                    props.errors?.ru_file?.message || props.errors?.summary?.message
                                }
                                //
                                linkName="ru_file_link"
                                linkLabel="Ссылка на файл"
                                linkError={!!props.errors?.ru_file_link || !!props.errors?.summary}
                                linkErrorMessage={
                                    props.errors?.ru_file_link?.message || props.errors?.summary?.message
                                }
                                linkValue={props.model?.ru_file_link}
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
                                label="Английский"
                                variant="outlined"
                                size="small"
                                icon={UsIcon}
                                error={!!props.errors.en_title || !!props.errors.summary}
                                helperText={props.errors?.en_title?.message || props.errors?.summary?.message}
                                defaultValue={props.model?.trans?.en_title}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <TextInput 
                                name="kg_title"
                                inputRef={props.register}
                                label="Кыргызский"
                                variant="outlined"
                                size="small"
                                icon={KgIcon}
                                error={!!props.errors.kg_title || !!props.errors.summary}
                                helperText={props.errors?.kg_title?.message || props.errors?.summary?.message}
                                defaultValue={props.model?.trans?.kg_title}
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
                                label="Казахский"
                                variant="outlined"
                                size="small"
                                icon={KzIcon}
                                error={!!props.errors.kz_title || !!props.errors.summary}
                                helperText={props.errors?.kz_title?.message || props.errors?.summary?.message}
                                defaultValue={props.model?.trans?.kz_title}
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <TextInput 
                                name="uz_title"
                                inputRef={props.register}
                                label="Узбекский"
                                variant="outlined"
                                size="small"
                                icon={UzIcon}
                                error={!!props.errors.uz_title || !!props.errors.summary}
                                helperText={props.errors?.uz_title?.message || props.errors?.summary?.message}
                                defaultValue={props.model?.trans?.uz_title}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <TextInput 
                                name="tg_title"
                                inputRef={props.register}
                                label="Таджикский"
                                variant="outlined"
                                size="small"
                                icon={TgIcon}
                                error={!!props.errors.tg_title || !!props.errors.summary}
                                helperText={props.errors?.tg_title?.message || props.errors?.summary?.message}
                                defaultValue={props.model?.trans?.tg_title}
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
                    <Col md="6">
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
                                defaultValue={props.model?.trans?.en_description}
                                placeholder="Описание..."
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
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
                                defaultValue={props.model?.trans?.kg_description}
                                placeholder="Описание..."
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
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
                                defaultValue={props.model?.trans?.kz_description}
                                placeholder="Описание..."
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
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
                                defaultValue={props.model?.trans?.uz_description}
                                placeholder="Описание..."
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
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
                                defaultValue={props.model?.trans?.tg_description}
                                placeholder="Описание..."
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
                    <Col md="6">
                        <FormGroup>
                            <UploadFile 
                                uploadFile={props.uploadFile}
                                isTrans={true}
                                //
                                title="Английский"
                                register={props.register}
                                control={props.control}
                                //
                                model={props.model}
                                name="en_file"
                                error={!!props.errors?.en_file || !!props.errors?.summary}
                                errorMessage={
                                    props.errors?.en_file?.message || props.errors?.summary?.message
                                }
                                //
                                linkName="en_file_link"
                                linkLabel="Английский"
                                linkError={!!props.errors?.en_file_link || !!props.errors?.summary}
                                linkErrorMessage={
                                    props.errors?.en_file_link?.message || props.errors?.summary?.message
                                }
                                linkValue={props.model?.trans?.en_file_link}

                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <UploadFile 
                                uploadFile={props.uploadFile}
                                isTrans={true}
                                //
                                title="Кыргызский"
                                register={props.register}
                                control={props.control}
                                //
                                model={props.model}
                                name="kg_file"
                                error={!!props.errors?.kg_file || !!props.errors?.summary}
                                errorMessage={
                                    props.errors?.kg_file?.message || props.errors?.summary?.message
                                }
                                //
                                linkName="kg_file_link"
                                linkLabel="Кыргызский"
                                linkError={!!props.errors?.kg_file_link || !!props.errors?.summary}
                                linkErrorMessage={
                                    props.errors?.kg_file_link?.message || props.errors?.summary?.message
                                }
                                linkValue={props.model?.trans?.kg_file_link}

                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <UploadFile 
                                uploadFile={props.uploadFile}
                                isTrans={true}
                                //
                                title="Казахский"
                                register={props.register}
                                control={props.control}
                                //
                                model={props.model}
                                name="kz_file"
                                error={!!props.errors?.kz_file || !!props.errors?.summary}
                                errorMessage={
                                    props.errors?.kz_file?.message || props.errors?.summary?.message
                                }
                                //
                                linkName="kz_file_link"
                                linkLabel="Казахский"
                                linkError={!!props.errors?.kz_file_link || !!props.errors?.summary}
                                linkErrorMessage={
                                    props.errors?.kz_file_link?.message || props.errors?.summary?.message
                                }
                                linkValue={props.model?.trans?.kz_file_link}

                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <UploadFile 
                                uploadFile={props.uploadFile}
                                isTrans={true}
                                //
                                title="Узбекский"
                                register={props.register}
                                control={props.control}
                                //
                                model={props.model}
                                name="uz_file"
                                error={!!props.errors?.uz_file || !!props.errors?.summary}
                                errorMessage={
                                    props.errors?.uz_file?.message || props.errors?.summary?.message
                                }
                                //
                                linkName="uz_file_link"
                                linkLabel="Узбекский"
                                linkError={!!props.errors?.uz_file_link || !!props.errors?.summary}
                                linkErrorMessage={
                                    props.errors?.uz_file_link?.message || props.errors?.summary?.message
                                }
                                linkValue={props.model?.trans?.uz_file_link}

                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <UploadFile 
                                uploadFile={props.uploadFile}
                                isTrans={true}
                                //
                                title="Таджикский"
                                register={props.register}
                                control={props.control}
                                //
                                model={props.model}
                                name="tg_file"
                                error={!!props.errors?.tg_file || !!props.errors?.summary}
                                errorMessage={
                                    props.errors?.tg_file?.message || props.errors?.summary?.message
                                }
                                //
                                linkName="tg_file_link"
                                linkLabel="Таджикский"
                                linkError={!!props.errors?.tg_file_link || !!props.errors?.summary}
                                linkErrorMessage={
                                    props.errors?.tg_file_link?.message || props.errors?.summary?.message
                                }
                                linkValue={props.model?.trans?.tg_file_link}

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
                            Обновить
                        </Button>
                    </Col>
                </Row>  
            </div>
        </form>
    )
}

export default UpdateForm;