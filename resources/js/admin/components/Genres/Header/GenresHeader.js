import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {
	Container,
	Row,
	Card,
  	CardBody,
  	CardTitle,
	Col,
	Button,
  	Collapse,
} from 'reactstrap';

const GenresHeader = ({children,...props}) => {

	const [collapse,setCollapse] = useState(false);

  	const onClick = () => {
    	setCollapse(!collapse);
  	}

	return(
		<div className="header bg-gradient-info pb-8 pt-5 pt-md-7">
            <Container fluid>
                <div className="header-body">
                    {/* Card stats */}
                    <Row className="justify-content-end">
                       <Col sm="5" lg="6" className="text-right">
                            <NavLink to={props.createLink} className="btn btn-sm btn-primary">
                                Создать
                            </NavLink>
                            <Button color="primary" size="sm" type="button" onClick={onClick}>
                                Фильтры
                            </Button>
                        </Col>
                    </Row>
                </div>
                 <Collapse
                      isOpen={collapse}
                      className="header-body mt-3"
                    >
                      <Row>
                          <Col lg="12" sm="12">
                              <Card>
                                <CardBody>
                                  <CardTitle>Поиск жанров</CardTitle>
                                  {children}
                                </CardBody>
                              </Card>
                          </Col>
                      </Row>
                  </Collapse>
            </Container>
	    </div>
	)
}

export default GenresHeader;