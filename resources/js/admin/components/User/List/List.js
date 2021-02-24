import React from "react";
import Pagination from "react-js-pagination";
import {
    Container,
    Row,
    Card,
    CardHeader,
    CardFooter,
    Table,
} from "reactstrap";

import ListHeader from './../../Content/Header/ListHeader';
import SearchForm from './SearchForm/SearchForm';
import ListBody from './Body/ListBody';
import Spinner from './../../Spinner/Spinner';
import Success from './../../Modals/Success/Success';

const List = (props) => {
    return (
        <>
            {props.isFetching ? <Spinner /> : null}
            <ListHeader createLink={props.createLink}>
                <SearchForm 
                    register={props.register}
                    onSubmit={props.onSubmit}
                    onDelete={props.onDelete}
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
                            <Table
                                className="align-items-center table-flush"
                                responsive
                            >
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Имя</th>
                                        <th scope="col">Фамилия</th>
                                        <th scope="col">Телефон</th>
                                        <th scope="col">Дата создания</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.models.length > 0 ? (
                                        props.models.map((model) => (
                                            <ListBody
                                                model={model}
                                                key={model.id}
                                                onDelete={props.onDelete}
                                                updateLink={props.updateLink}
                                            />
                                        ))
                                    ) : (
                                        <tr>
                                            <th>
                                                <span>Нет записей</span>
                                            </th>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                            <CardFooter className="py-4">
                                <nav aria-label="pagination">
                                    <Pagination
                                        activePage={props.current_page}
                                        itemsCountPerPage={parseInt(
                                            props.per_page
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
    );
};

export default List;
