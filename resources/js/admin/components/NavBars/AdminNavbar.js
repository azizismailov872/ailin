import React from "react";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";
import {logoutUser} from './../../store/auth/actions';

const AdminNavbar = (props) =>  {

    const dispatch = useDispatch();

    const history = useHistory();

    const logout = async() => {
        let response = await dispatch(logoutUser());
        if(response){
            history.push('/admin');
        }
    } 

    const getUserPhoto = (user) => {
        if(props.user.photo === 'default.png')
        {
            return '/storage/users/default.png'
        }
        else
        {
            return '/storage/users/' + user.id + '/' + user.photo
        }
    }

    return (
        <>
        <Navbar className="navbar-top navbar-dark" expand="lg" id="navbar-main">
            <Container className="justify-content-end" fluid>
                <Nav className="align-items-center d-none d-lg-flex" navbar>
                    <UncontrolledDropdown nav>
                        <DropdownToggle className="pr-0" nav>
                            <Media className="align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="avatar"
                                      src={
                                        getUserPhoto(props.user)
                                      }
                                    />
                                </span>
                                <Media className="ml-2 d-none d-lg-block">
                                    <span className="mb-0 text-sm font-weight-bold">
                                        {
                                            props.user.email.substr(0,25) 
                                        }
                                    </span>
                                </Media>
                            </Media>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem className="noti-title" header tag="div">
                                <h6 className="text-overflow m-0">Welcome!</h6>
                            </DropdownItem>
                            <DropdownItem to={'/admin/admin-users/update/' + props.user.id} tag={Link}>
                                <i className="ni ni-single-02" />
                                <span>Мой профиль</span>
                            </DropdownItem>
                            <DropdownItem onClick={e => logout()}>
                                <i className="ni ni-user-run" />
                                <span>Выход</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
