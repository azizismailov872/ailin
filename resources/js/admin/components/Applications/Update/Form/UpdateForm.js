import React from "react";
import { FormGroup,Col, Row,} from "reactstrap";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";

import VisibilityIcon from '@material-ui/icons/Visibility';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

import TextInput from './../../../../components/Form/TextInput/TextInput';
import SelectInput from './../../../Form/SelectInput/SelectInput';
import parsePhoneNumberFromString from "libphonenumber-js";

const UpdateForm = (props) => {

    const normolizePhoneNumber = (number) => {
        const phoneNumber = parsePhoneNumberFromString(number);
        if (!phoneNumber) {
            return number;
        }
        return phoneNumber.formatInternational();
    };

    return (
        <>
            <form onSubmit={props.onSubmit} encType="multipart/form-data">
                <h6 className="heading-small text-muted mb-4">
                    Основная информация
                </h6>
                <div className="pl-lg-4">
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <FormGroup>
                                <TextInput
                                    inputRef={props.register}
                                    type="tel"
                                    label="Телефон"
                                    name="phone"
                                    defaultValue={props.model.phone}
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
                    <Row className="justify-content-center">
                        <Col lg="6">
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
                                    <MenuItem value={0}>Не активен</MenuItem>
                                    <MenuItem value={1}>Активен</MenuItem>
                                    <MenuItem value={2}>В обработке</MenuItem>
                                </SelectInput>
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
        </>
    );
};

export default UpdateForm ;
