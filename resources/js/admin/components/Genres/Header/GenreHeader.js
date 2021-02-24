import React from 'react';
import {Container} from 'reactstrap';

const GenreHeader = (props) => {
	return(
		<div className="header bg-gradient-info pb-8 pt-5 pt-md-7">
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
	)
}

export default GenreHeader;