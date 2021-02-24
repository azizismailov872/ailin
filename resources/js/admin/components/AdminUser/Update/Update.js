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

import UpdateForm from './Form/UpdateForm';
import Success from "./../../Modals/Success/Success";
import Spinner from './../../Spinner/Spinner';

const Create = (props) => {

    const getUserPhoto = (photo,id) => {
        if(typeof photo === 'object')
        {
            let path = '/storage/users/' + id + '/' + photo.name;

            return path;
        }
        else
        {
            return '/storage/users/default.png'
        }
    }


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
                        <h2 className="display-2 text-white">{props.title}</h2>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className="mt--6" fluid>
            <Row>
                <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                    <Card className="card-profile shadow">
                        <Row className="justify-content-center">
                            <Col className="order-lg-2" lg="3">
                                <div className="card-profile-image">
                                    <a onClick={e => e.preventDefault()}>
                                        <img
                                            alt="avatar"
                                            className="rounded-circle"
                                            src={
                                               getUserPhoto(props.model.photo,props.model.id)
                                            }
                                            />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <div className="border-0 pt-7 pt-md-4 pb-0 pb-md-4"></div>
                        <CardBody className="pb-6 pb-md-6">
                            <div className="text-center mt-md-7 mt-5">
                                <h3>
                                    {
                                        props.model.name ? props.model.name + ' ' + props.model?.surname : 'Имя не указано'
                                    }
                                </h3>
                                <div className="h5 mt-2">
                                    <i className="ni business_briefcase-24 mr-2" />
                                    {
                                        props.model.email ? props.model.email : 'Нет почты'
                                    }
                                </div>
                                <div>
                                    <i className="ni education_hat mr-2" />
                                   {
                                        props.model.phone ? props.model.phone : 'Телефон не указан'
                                   }
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="order-xl-1" xl="8">
                    <Card className="bg-secondary shadow mb-4">
                        <CardHeader className="bg-white border-0">
                            <Row className="align-items-center">
                                <Col xs="8">
                                    <h3 className="mb-0">Основная информация</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody className="mb-3 bg-white">
                            <UpdateForm 
                                register={props.register}
                                onSubmit={props.onSubmit}
                                errors={props.errors}
                                control={props.control}
                                model={props.model}
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
