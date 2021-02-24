import React, { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

import UserMenu from './UserMenu/UserMenu';

const Sidebar = (props) => {

    const {routes} = props;

    /*const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };*/

    const createLinks = (routes) => {
        return routes.map((prop, key) => {
            if(prop.visible)
            {
                return (
                    <NavItem key={key}>
                        <NavLink
                            to={prop.layout + prop.path}
                            tag={NavLinkRRD}
                            onClick={closeCollapse}
                            activeClassName="active"
                        >
                            <i className={prop.icon} />
                            {prop.name}
                        </NavLink>
                    </NavItem>
                );
            }
        });
    };

    let [collapseOpen, setCollapse] = useState(false);

    const toggleCollapse = () => {
        setCollapse(!collapseOpen);
    };

    const closeCollapse = () => {
        setCollapse(false);
    };

    return (
        <Navbar
            className="navbar-vertical fixed-left navbar-light bg-white"
            expand="lg"
            id="sidenav-main"
            style={{zIndex: '250'}}
        >
            <Container fluid>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <NavbarBrand className="pt-0" href="/admin/index">
                    <img
                        alt="logo"
                        className="navbar-brand-img"
                        src="/img/logo.png"
                    />
                </NavbarBrand>
                <UserMenu user={props.user} />
                <Collapse navbar isOpen={collapseOpen}>
                    <div className="navbar-collapse-header d-md-none">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <Link to="/admin/">
                                    <img
                                        alt="logo"
                                        src="/img/logo.png"
                                    />
                                </Link>
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={toggleCollapse}
                                >
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav navbar>
                        {createLinks(routes)}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Sidebar;