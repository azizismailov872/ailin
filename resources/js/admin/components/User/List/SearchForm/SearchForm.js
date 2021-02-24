import React from "react";
import { Row, Col, FormGroup } from "reactstrap";
import Button from "@material-ui/core/Button";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";


import TextInput from "./../../../Form/TextInput/TextInput";
import parsePhoneNumberFromString from "libphonenumber-js";

const SearchForm = (props) => {
	const normolizePhoneNumber = (number) => {
        const phoneNumber = parsePhoneNumberFromString(number);
        if (!phoneNumber) {
            return number;
        }
        return phoneNumber.formatInternational();
    };

    return (
        <form onSubmit={props.onSubmit}>
            <Row>
                <Col xs="12" md="12" lg="4">
                    <FormGroup>
                        <TextInput
                            name="name"
                            inputRef={props.register}
                            variant="outlined"
                            size="small"
                            label="Имя"
                            icon={AccountCircleIcon}
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <FormGroup>
                        <TextInput
                            name="surname"
                            inputRef={props.register}
                            variant="outlined"
                            size="small"
                            label="Фамилия"
                            icon={AccountCircleIcon}
                        />
                    </FormGroup>
                </Col>
                <Col xs="12" md="12" lg="4">
                    <FormGroup>
                        <TextInput
                            inputRef={props.register}
                            type="tel"
                            label="Телфон"
                            name="phone"
                            icon={AddIcCallIcon}
                            size="small"
                            variant="outlined"
                            onChange={(e) => {
                                e.target.value = normolizePhoneNumber(
                                    e.target.value
                                );
                            }}
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
    );
};

export default SearchForm;
