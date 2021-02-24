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

import GenresHeader from './../Header/GenresHeader';
import SearchForm from './../SearchForm/SearchForm';
import ListBody from './Body/ListBody';
import Spinner from './../../Spinner/Spinner';
import Success from './../../Modals/Success/Success';

const List = (props) => {
	return(	
		<>	
			{
				props.isFetching ? <Spinner /> : null
			}
			<GenresHeader createLink={props.createLink}>
				<SearchForm 
					register={props.register}
					control={props.control}
					onSubmit={props.onSubmit}
					errors={props.errors}
					onReset={props.onReset}
				/>
			</GenresHeader>
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
	                      				<th scope="col">Описание</th>
	                      				<th scope="col">Статус</th>
	                      				<th scope="col">Дата создания</th>
	                      				<th scope="col" />
	                    			</tr>
	                  			</thead>
	                  			<tbody>
	                  				{
	                  					(props.genres.length > 0) ? props.genres.map(genre => <ListBody 
	                  						genre={genre}
	                  						key={genre.id}
	                  						onDelete={props.onDelete}
	                  						updateLink={props.updateLink}
	                  					/>) :  (
	                  						<tr>
			                  					<th>
			                  						<span>Нет жанров</span>
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
	        	props.dialogOpen ? <Success 
		        	open={props.dialogOpen} 
		        	handleClose={props.closeDialog} 
		        	message="Жанр удален" 
	        	/> : null
	        }
		</>
	);
}

export default List;