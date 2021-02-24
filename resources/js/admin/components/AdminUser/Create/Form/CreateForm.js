import React from "react";
import { FormGroup, Col, Row } from "reactstrap";
import Button from "@material-ui/core/Button";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import LockIcon from "@material-ui/icons/Lock";

import TextInput from "./../../../../components/Form/TextInput/TextInput";
import FileInput from './../../../../components/Form/FileInput/FileInput';
import parsePhoneNumberFromString from "libphonenumber-js";

const CreateForm = (props) => {
    const normolizePhoneNumber = (number) => {
        const phoneNumber = parsePhoneNumberFromString(number);
        if (!phoneNumber) {
            return number;
        }
        return phoneNumber.formatInternational();
    };

    return (
        <form onSubmit={props.onSubmit} className="bg-white">
            <div className="pl-lg-4">
                <Row>
                    <Col lg="6">
                        <FormGroup>
                            <TextInput
                                name="email"
                                inputRef={props.register}
                                variant="outlined"
                                size="small"
                                label="Почта"
                                icon={MailIcon}
                                error={
                                    !!props.errors.email ||
                                    !!props.errors.summary
                                }
                                helperText={
                                    props.errors?.email?.message ||
                                    props.errors?.summary?.message
                                }
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="6">
                        <FormGroup>
                            <TextInput
                                name="name"
                                inputRef={props.register}
                                variant="outlined"
                                size="small"
                                label="Имя"
                                icon={AccountCircleIcon}
                                error={
                                    !!props.errors.name ||
                                    !!props.errors.summary
                                }
                                helperText={
                                    props.errors?.name?.message ||
                                    props.errors?.summary?.message
                                }
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <FormGroup>
                            <TextInput
                                name="surname"
                                inputRef={props.register}
                                variant="outlined"
                                size="small"
                                label="Фамилия"
                                icon={AccountCircleIcon}
                                error={
                                    !!props.errors.surname ||
                                    !!props.errors.summary
                                }
                                helperText={
                                    props.errors?.surname?.message ||
                                    props.errors?.summary?.message
                                }
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="6">
                        <FormGroup>
                            <TextInput
                                inputRef={props.register}
                                type="tel"
                                label="Телефон"
                                name="phone"
                                icon={AddIcCallIcon}
                                size="small"
                                variant="outlined"
                                onChange={(e) => {
                                    e.target.value = normolizePhoneNumber(
                                        e.target.value
                                    );
                                }}
                                error={
                                    !!props.errors.phone ||
                                    !!props.errors.summary
                                }
                                helperText={
                                    props.errors?.phone?.message ||
                                    props.errors?.summary?.message
                                }
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <FormGroup>
                            <TextInput
                                name="password"
                                inputRef={props.register}
                                variant="outlined"
                                size="small"
                                label="Пароль"
                                type="password"
                                icon={LockIcon}
                                error={
                                    !!props.errors.password ||
                                    !!props.errors.summary
                                }
                                helperText={
                                    props.errors?.password?.message ||
                                    props.errors?.summary?.message
                                }
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="6">
                        <FormGroup>
                            <TextInput
                                name="passwordRepeat"
                                inputRef={props.register}
                                variant="outlined"
                                size="small"
                                label="Повторите пароль"
                                type="password"
                                icon={LockIcon}
                                error={
                                    !!props.errors.passwordRepeat ||
                                    !!props.errors.summary
                                }
                                helperText={
                                    props.errors?.passwordRepeat?.message ||
                                    props.errors?.summary?.message
                                }
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            <hr className="my-4" />
            <h6 className="heading-small text-muted mb-4">
                Изображение пользователя
            </h6>
            <div className="pl-lg-4">
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <FileInput
                                name="photo"
                                control={props.control}
                                error={!!props.errors.photo}
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
    )
};

export default CreateForm;
