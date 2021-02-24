import React from 'react';
import Pagination from "react-js-pagination";
import {
	Container,
	Row,
	Card,
	CardHeader,
  	CardFooter,
	Table,
} from 'reactstrap';

import ListBody from './Body/ListBody';
import ListHeader from './../Header/ListHeader';
import SearchForm from './../SearchForm/SearchForm';
import Spinner from './../../Spinner/Spinner';
import Success from './../../Modals/Success/Success';

const List = (props) => {
	return(	
		<>	
			{
				props.isFetching ? <Spinner /> : null
			}
			{
	        	props.deleteVideo ? <Success open={props.deleteVideo} handleClose={props.closeDialog} message="Видео удалено" /> : null
	        }
			<ListHeader createLink={props.createLink}>
				<SearchForm 
					onSubmit={props.onSubmit}
					register={props.register}
					control={props.control}
					errors={props.errors}
					onReset={props.onReset}
				/>
			</ListHeader>
	       	<Container className="mt--7" fluid>
	        	<Row>
	            	<div className="col">
	              		<Card className="shadow">
	                		<CardHeader className="border-0">
	                  			<h3 className="mb-0">{props.title}</h3>
	                		</CardHeader>
	                		<Table className="align-items-center table-flush" responsive>
	                  			<thead className="thead-light">
	                    			<tr>
	                      				<th scope="col">Название</th>
	                      				<th scope="col">Ссылка</th>
	                      				<th scope="col">Автор</th>
	                      				<th scope="col">Статус</th>
	                      				<th scope="col">Дата создания</th>
	                      				{
	                      					props.canUpdateVideo ? (
	                      						<th scope="col">Видео</th>
	                      					) : null
	                      				}
	                      				<th scope="col">Десйтвия</th>
	                    			</tr>
	                  			</thead>
	                  			<tbody>
	                  				{
	                  					props.models.length > 0 ? props.models.map(model => <ListBody 
	                  						model={model}
	                  						key={model.id}
	                  						onDelete={props.onDelete}
	                  						updateLink={props.updateLink}
	                  						canUpdateVideo={props.canUpdateVideo}
	                  						deleteVideoAction={props.deleteVideoAction}
	                  					/>) : (
	                  						<tr>
			                  					<th>
			                  						<span>Нет записей</span>
			                  					</th>	
			                  				</tr>
	                  					)
	                  				}	
	                  			</tbody>
	                		</Table>
	                		<CardFooter className="py-4">
			                	<nav aria-label="pagination">
			                    	<Pagination
										activePage={props.current_page}
				                        itemsCountPerPage={parseInt(props.per_page)}
				                        totalItemsCount={props.total}
				                        onChange={props.onPageChange}
				                        innerClass="pagination justify-content-end mb-0"
				                        itemClass="page-item"
				                        linkClass="page-link"
				                        activeClass="active"
				                        hideDisabled={true}
				                    />
			                  	</nav>
	                		</CardFooter>
	              		</Card>
	            	</div>
	          	</Row>
	        </Container>
	        {
	        	props.dialogOpen ? <Success open={props.dialogOpen} handleClose={props.closeDialog} message={props.successMessage} /> : null
	        }
		</>
	);
}

export default List;