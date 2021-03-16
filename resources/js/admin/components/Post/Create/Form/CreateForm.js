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
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';

import KgIcon from './../../../Flags/KgIcon';
import KzIcon from './../../../Flags/KzIcon';
import UsIcon from './../../../Flags/UsIcon';
import UzIcon from './../../../Flags/UzIcon';
import TgIcon from './../../../Flags/TgIcon';

import TextInput from './../../../Form/TextInput/TextInput';

const CreateForm = (props) => {

	return (
        <>
            <form onSubmit={props.onSubmit} encType="multipart/form-data">
                <h6 className="heading-small text-muted mb-4">
                    Основная информация
                </h6>
                <div className="pl-lg-4">
                    <Row>
                        <Col lg="12">
                            <FormGroup>
                                <TextInput
                                    name="title"
                                    inputRef={props.register}
                                    variant="outlined"
                                    label="Заголовок"
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
                    </Row>
                    <Row>
                        <Col lg="12">
                            <FormGroup>
                                <TextField
                                    inputRef={props.register}
                                    variant="outlined"
                                    label="Содержимое статьи"
                                    name="content"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    rowsMax={4}
                                    placeholder="Содержимое статьи"
                                    error={
                                        !!props.errors.content ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.content?.message ||
                                        props.errors?.summary?.message
                                    }
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
                    Перевод содержимого
                </h6>
                <div className="pl-lg-4">
                    <Row>
                        <Col lg="6">
                            <FormGroup>
                                <TextField
                                    inputRef={props.register}
                                    variant="outlined"
                                    label="Английский"
                                    name="en_content"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    rowsMax={4}
                                    placeholder="Содержимое статьи"
                                    error={
                                        !!props.errors.en_content ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.en_content?.message ||
                                        props.errors?.summary?.message
                                    }
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <TextField
                                    inputRef={props.register}
                                    variant="outlined"
                                    label="Кыргызский"
                                    name="kg_content"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    rowsMax={4}
                                    placeholder="Содержимое статьи"
                                    error={
                                        !!props.errors.kg_content ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.kg_content?.message ||
                                        props.errors?.summary?.message
                                    }
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
                                    name="kz_content"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    rowsMax={4}
                                    placeholder="Содержимое статьи"
                                    error={
                                        !!props.errors.kz_content ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.kz_content?.message ||
                                        props.errors?.summary?.message
                                    }
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <TextField
                                    inputRef={props.register}
                                    variant="outlined"
                                    label="Узбекский"
                                    name="uz_content"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    rowsMax={4}
                                    placeholder="Содержимое статьи"
                                    error={
                                        !!props.errors.uz_content ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.uz_content?.message ||
                                        props.errors?.summary?.message
                                    }
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
                                    name="tg_content"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    rowsMax={4}
                                    placeholder="Содержимое статьи"
                                    error={
                                        !!props.errors.tg_content ||
                                        !!props.errors.summary
                                    }
                                    helperText={
                                        props.errors?.tg_content?.message ||
                                        props.errors?.summary?.message
                                    }
                                />
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
