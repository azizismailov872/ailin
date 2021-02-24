import React from "react";
import { Row, Col, FormGroup } from "reactstrap";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";

import VisibilityIcon from '@material-ui/icons/Visibility';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import EventIcon from '@material-ui/icons/Event';

import TextInput from "./../../../Form/TextInput/TextInput";
import SelectInput from './../../../Form/SelectInput/SelectInput';
import DateInput from './../../../Form/DateInput/DateInput';
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
                <Col lg="4">
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
                <Col lg="4">
                    <FormGroup>
                        <SelectInput
                            name="status"
                            control={props.control}
                            defaultValue={3}
                            variant="outlined"
                            size="small"
                            label="Статус"
                            icon={VisibilityIcon}                            
                        >
                            <MenuItem value={3}>Не выбрано</MenuItem>
                            <MenuItem value={0}>Не активен</MenuItem>
                            <MenuItem value={1}>Активен</MenuItem>
                            <MenuItem value={2}>В обработке</MenuItem>
                        </SelectInput>
                    </FormGroup>
                </Col>
                <Col lg="4">
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
