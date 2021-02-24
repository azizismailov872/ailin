import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import {logoutUser} from './../../../store/auth/actions';


const UserMenu = (props) => {

    const dispatch = useDispatch();

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

    const logout = async() => {
        let response = await dispatch(logoutUser());
        if(response){
            history.push('/admin');
        }
    } 


	return(
		<Nav className="align-items-center d-lg-none">
            <UncontrolledDropdown nav>
                <DropdownToggle nav>
                    <Media className="align-items-center">
                        <span className="avatar avatar-sm rounded-circle">
                            <img
                                alt="avatar"
                                src={
                                    getUserPhoto(props.user)
                                }
                            />
                        </span>
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
	)
}

export default UserMenu;