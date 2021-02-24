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

    const getStatusValue = (status) => {
        if(status === 1)
        {
            return (
                 <>
                    <i className="bg-success" />
                    Активен
                 </>
            )
        }
        else if(status === 2)
        {
            return(
                <>
                    <i className="bg-info" />
                    В обработке
                </>
            )
        }
        else if(status === 0)
        {
            return (
                 <>
                    <i className="bg-warning" />
                    Не активен
                </>
            )
        }
    }


    return (
        <tr>
            <th scope="row">
                <Media className="align-items-center">
                    {props.model.phone ? (
                        props.model.phone.substr(0, 30)
                    ) : (
                        <span>Нет телефона</span>
                    )}
                </Media>
            </th>
            <td>
                <Badge color="" className="badge-dot mr-4">
                 {  
                    getStatusValue(props.model.status)
                 }
                </Badge>
            </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            {props.model.created_at.substr(0, 10)}
                        </span>
                    </div>
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
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
};

export default ListBody;
