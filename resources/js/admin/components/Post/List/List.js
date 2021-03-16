import React from "react";
import Pagination from "react-js-pagination";
import {NavLink} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardFooter,
    Table,
} from "reactstrap";
import ListBody from './../Body/ListBody';
import Success from './../../../components/Modals/Success/Success';

const List = (props) => {
	return(
		<>
		<div className="header bg-gradient-info pb-8 pt-5 pt-md-7">
            <Container fluid>
                <div className="header-body">
                    {/* Card stats */}
                    <Row className="justify-content-end">
                       <Col sm="5" lg="6" className="text-right">
                            <NavLink to="/admin/posts/create" className="btn btn-sm btn-primary">
                                Создать
                            </NavLink>
                        </Col>
                    </Row>
                </div>
            </Container>
	    </div>
		<Container className="mt--7" fluid>
            <Row>
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                            <h3 className="mb-0">{props.title}</h3>
                        </CardHeader>
                        <Table
                            className="align-items-center table-flush"
                            responsive
                        >
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Заголовок</th>
                                    <th scope="col">Содержимое</th>
                                    <th scope="col">Дата создания</th>
                                    <th scope="col" />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.posts.length > 0 ? props.posts.map(model => <ListBody 
                                        model={model}
                                        key={model.id}
                                        onDelete={props.onDelete}
                                        updateLink={props.updateLink}
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
                                    activePage={props.currentPage}
                                    itemsCountPerPage={parseInt(
                                        props.perPage
                                    )}
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
        {props.dialogOpen ? (
            <Success
                open={props.dialogOpen}
                handleClose={props.closeDialog}
                message={props.successMessage}
            />
        ) : null}
		</>
	)
}

export default List;