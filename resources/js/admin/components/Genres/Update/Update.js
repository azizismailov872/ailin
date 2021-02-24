  
import React from 'react';
import {
	Container,
	Card,
	CardBody,
	Row,
} from 'reactstrap';

import UpdateForm from './Form/UpdateForm';
import GenreHeader from './../Header/GenreHeader';
import Spinner from './../../Spinner/Spinner';
import Success from './../../Modals/Success/Success';

const UpdateGenre = (props) => {
	return(
		<>	
			{
				props.isFetching ? <Spinner /> : null
			}
			<GenreHeader title={props.title} />
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<Card>
							<CardBody>
	                            <UpdateForm 
	                            	genre={props.genre}
	                            	register={props.register}
	                            	control={props.control}
	                            	errors={props.errors}
	                            	onSubmit={props.onSubmit}
	                            />
	                        </CardBody>
						</Card>	
					</div>
				</Row>
			</Container>
			{
				props.dialogOpen ? <Success open={props.dialogOpen} handleClose={props.closeDialog} message="Жанр успешно изменен"/> : null 
			}
		</>
	);
}

export default UpdateGenre;