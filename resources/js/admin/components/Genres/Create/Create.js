import React from 'react';
import {
	Container,
	Card,
	CardBody,
	Row,
} from 'reactstrap';

import CreateForm from './Form/CreateForm';
import Spinner from './../../Spinner/Spinner';
import Success from './../../Modals/Success/Success';
import GenreHeader from './../Header/GenreHeader';

const CreateGenre = (props) => {
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
	                            <CreateForm
	                            	register={props.register}
	                            	control={props.control}
	                            	errors={props.errors}
	                            	onSubmit={props.onSubmit}
	                            	onReset={props.onReset}
	                            />
	                        </CardBody>
						</Card>	
					</div>
				</Row>
			</Container>
			{
				props.dialogOpen ? <Success open={props.dialogOpen} handleClose={props.closeDialog} message="Жанр успешно создан"/> : null 
			}
		</>
	)
}

export default CreateGenre;