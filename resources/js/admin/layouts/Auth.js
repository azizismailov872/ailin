import React, { useEffect } from "react";
import {Container,Row } from "reactstrap";

import AuthNavbar from './../components/NavBars/AuthNavbar';
import LoginContainer from './../views/Login/LoginContainer';

const Auth = () => {
    useEffect(() => {
        document.body.classList.add("bg-default");

        return () => {
            document.body.classList.remove("bg-default");
        };
    },[]);

    return (
        <>
            <div className="main-content mb-3">
                <AuthNavbar />
                <div className="header bg-gradient-info py-7 py-lg-8">
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-default"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </div>
                <Container className="mt--5 pb-5">
                    <Row className="justify-content-center">
                        <LoginContainer />
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Auth;