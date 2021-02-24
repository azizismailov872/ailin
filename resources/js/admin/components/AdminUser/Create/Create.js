import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

import CreateForm from './Form/CreateForm';
import Success from "./../../Modals/Success/Success";
import Spinner from './../../Spinner/Spinner';

const Create = (props) => {
    return (
      <>
        {
            props.dialogOpen ? <Success open={props.dialogOpen} handleClose={props.closeDialog} message={props.successMessage} /> : null
        }
        <div className="header pb-6 pt-5 pt-lg-6 d-flex align-items-center"
          style={{
            minHeight: "400px",
            //backgroundImage:"url(/assets/img/theme/profile-cover.jpg)",
            //backgroundSize: "cover",
            //backgroundPosition: "center top"
          }}
        >
            <span className="mask bg-gradient-default opacity-8" />
            <Container className="d-flex align-items-center" fluid>
                <Row>
                    <Col md="12">
                        <h2 className="display-2 text-white">Создать администратора</h2>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className="mt--6" fluid>
            <Row>
                <Col lg="12">
                    <Card className="bg-secondary shadow mb-4">
                        <CardHeader className="bg-white border-0">
                            <Row className="align-items-center">
                                <Col xs="8">
                                    <h3 className="mb-0">Основная информация</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody className="mb-3 bg-white">
                            <CreateForm 
                                register={props.register}
                                onSubmit={props.onSubmit}
                                errors={props.errors}
                                control={props.control}
                                onReset={props.onReset}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        {
            props.isFetching ? <Spinner /> : null
        }
      </>
    );
};

export default Create;
