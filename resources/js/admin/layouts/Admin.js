import React,{useEffect} from 'react';
import { Route, Switch,Redirect} from "react-router-dom";
import { Container } from "reactstrap";

import Sidebar from './../components/Sidebar/Sidebar';
import AdminNavbar from './../components/NavBars/AdminNavbar';

import routes from './../routes';

const Admin = (props) => {

	let mainContent = React.createRef();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    },[]);

	const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };


    return (
        <>
            <Sidebar
                {...props}
                routes={routes}
                user={props.user}
            />
            <div className="main-content" ref={mainContent}>
                <AdminNavbar
                    {...props}
                    user={props.user}
                />
               <Switch>
                    {getRoutes(routes)}
                    <Redirect exact from='/admin/login' to="/admin/users/list" />
                </Switch>
            </div>
        </>
    );
}

export default Admin;