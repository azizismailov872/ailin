import React from "react";
import { Link } from "react-router-dom";
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

const AuthNavbar = () => {
    return (
        <>
            <Navbar
                className="navbar-top navbar-horizontal navbar-dark"
                expand="md"
            >
                <Container className="px-4">
                    <NavbarBrand to="/" tag={Link}>
                        <img
                            alt="logo"
                            src="/dashboard/img/logo.png"
                        />
                    </NavbarBrand>
                    <button
                        className="navbar-toggler"
                        id="navbar-collapse-main"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse
                        navbar
                        toggler="#navbar-collapse-main"
                    >
                        <div className="navbar-collapse-header d-md-none">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <Link to="/">
                                        <img
                                            alt="logo"
                                            src="/dashboard/img/logo.png"
                                        />
                                    </Link>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button
                                        className="navbar-toggler"
                                        id="navbar-collapse-main"
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink
                                    className="nav-link-icon"
                                    to="/"
                                    tag={Link}
                                >
                                    <i className="ni ni-planet" />
                                    <span className="nav-link-inner--text">
                                        Вернуться на сайт
                                    </span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>
        </>
    );
};

export default AuthNavbar;