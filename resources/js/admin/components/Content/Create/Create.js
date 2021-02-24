import React,{useState} from 'react';
import {
	Container,
	Card,
	CardBody,
	Col,
	Row,
    CardHeader,
} from 'reactstrap';

import CreateForm from './Form/CreateForm';
import ProgressBar from './../../Modals/Progress/Progress';
import Success from './../../Modals/Success/Success';

const Create = props => {
	return(
		<>	
			{
				props.dialogOpen ? <Success open={props.dialogOpen} handleClose={props.closeDialog} message={props.successMessage}/> : null 
			}
			<div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
			    <Container fluid>
			        <div className="header-body">
			            <div className="row align-items-center py-4">
			                <div className="col-lg-6 col-7">
			                    <h6 className="h2 text-white d-inline-block mb-0">{props.title}</h6>
			                </div>
			            </div>
			        </div>
			    </Container>
			</div>
			<Container className="mt--7" fluid>
				<Row>
					<div className="col">
						<Card>
							<CardBody>
	                        	<CreateForm
	                        		register={props.register}
	                        		control={props.control}
	                        		onSubmit={props.onSubmit}
	                        		errors={props.errors}
	                        		onReset={props.onReset}
	                        		genres={props.genres}
	                        		uploadFile={props.uploadFile}
	                        	/>
	                        </CardBody>
						</Card>	
					</div>
				</Row>
			</Container>
			{
				props.isFetching ? <ProgressBar 
					open={props.isFetching} 
					value={props.progress} 
				/> : null
			}
		</>
	);
}

export default Create;