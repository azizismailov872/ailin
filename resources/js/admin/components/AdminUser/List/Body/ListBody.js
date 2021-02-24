import React from "react";
import { Link } from "react-router-dom";
import {
    Media,
    Badge,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";

const ListBody = (props) => {
    return (
        <tr>
            <th scope="row">
                <Media className="align-items-center">
                    <span className="mb-0 text-sm">
                        {props.model.email.substr(0, 24)}
                    </span>
                </Media>
            </th>
            <th scope="row">
                <Media className="align-items-center">
                    <span className="mb-0 text-sm">
                        {props.model.name.substr(0, 24)}
                    </span>
                </Media>
            </th>
            <td>
                {props.model.surname ? (
                    props.model.surname.substr(0, 30)
                ) : (
                    <span>Нет указана</span>
                )}
            </td>
            <td>
                {props.model.phone ? (
                    props.model.phone.substr(0, 30)
                ) : (
                    <span>Нет телефона</span>
                )}
            </td>
            <td scope="row">
                <Media className="align-items-center">
                    <a
                        className="avatar rounded-circle"
                        onClick={(e) => e.preventDefault()}
                    >
                        <img
                            alt="profile-image"
                            src={
                                (props.model.photo !== 'default.png') ? '/storage/users/' + props.model.id + '/' + props.model.photo : 
                                '/storage/users/default.png'
                            }
                        />
                    </a>
                </Media>
            </td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={(e) => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                            href=""
                            className="defaultLink"
                            onClick={(e) => props.onDelete(props.model.id)}
                        >
                            Удалить
                        </DropdownItem>
                        <DropdownItem onClick={(e) => e.preventDefault()}>
                            <Link
                                className="defaultLink"
                                to={props.updateLink + props.model.id}
                            >
                                Редактировать
                            </Link>
                        </DropdownItem>
                         <DropdownItem
                            href=""
                            className="defaultLink"
                            onClick={(e) => props.onDeletePhoto(props.model.id)}
                        >
                            Удалить фото
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
};

export default ListBody;
