import React from "react";
import { Card, CardHeader, CardBody, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import LoginForm from './LoginForm/LoginForm';

const useStyles = makeStyles((theme) => ({
    col: {
        minHeight: "50vh",
        [theme.breakpoints.down("md")]: {
            minHeight: "30vh",
        },
    },
}));

const Login = (props) => {

    const classes = useStyles();

    return (
        <>
            <Col lg="5" md="7" className={classes.col}>
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-2">
                        <div className="text-muted text-center mt-2 mb-2">
                            <Typography component="h2" variant="h5">
                                Административная панель
                            </Typography>
                        </div>
                    </CardHeader>
                    <CardBody
                        className={"px-lg-5 pb-lg-4 pt-lg-4 " + classes.col}
                    >
                    	<LoginForm 
                            register={props.register}
                            onSubmit={props.onSubmit}
                            errors={props.errors}
                        />
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Login;