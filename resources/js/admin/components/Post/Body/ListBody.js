import React from 'react';
import {Link} from 'react-router-dom';
import 
{
	Media,
	Badge,
	UncontrolledDropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu
} from 'reactstrap';

const ListBody = (props) => {
	return(
		<tr>
        	<th scope="row">
	            <Media className="align-items-center">
	              <span className="mb-0 text-sm">
	                {
	                	props.model.title.substr(0,24)
	                }
	              </span>
	            </Media>
	        </th>
	        <td>
	          	{
	          		props.model.content.substr(0,20)
	          	}
	        </td>
	        <td>
	            <div className="d-flex align-items-center">
	            	<span className="mr-2">
	              		{
	              			props.model.created_at.substr(0,10)
	              		}
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
	                	onClick={e => e.preventDefault()}
	              	>
	                	<i className="fas fa-ellipsis-v" />
	              	</DropdownToggle>
	              	<DropdownMenu className="dropdown-menu-arrow" right>
	                	<DropdownItem
	                  		href=""
	                  		className="defaultLink"
	                  		onClick={e => props.onDelete(props.model.id)}
	                	>
	                  		Удалить
	                	</DropdownItem>
	                	<DropdownItem
	                		onClick={e => e.preventDefault()}
	                	>
	                  		<Link className="defaultLink" to={props.updateLink + props.model.id}>
	                  			Редактировать
	                  		</Link>
	                	</DropdownItem>
	              	</DropdownMenu>
	            </UncontrolledDropdown>
	        </td>
	    </tr>
	)
}

export default ListBody;