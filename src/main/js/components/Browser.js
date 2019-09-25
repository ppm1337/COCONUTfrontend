import Container from "react-bootstrap/Container"
import BrowserFilter from "./BrowserFilter";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import TableBrowser from "./TableBrowser";
import CardBrowser from "./CardBrowser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Redirect, Route, Switch} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import BrowserViewPills from "./BrowserViewPills";
import Spinner from "./Spinner";
import Error from "./Error";
import Pagination from "react-bootstrap/Pagination";
import BrowserPagination from "./BrowserPagination";

const React = require("react");
const restClient = require("./restClient");


export default class Browser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        };
    }

    withSubscription(ViewComponent, pageNumber) {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    data: {
                        error: null,
                        isLoaded: false,
                        result: []
                    },
                    stats: {
                        totalCompoundCount: null,
                        totalPageCount: null
                    }
                };
            }

            componentDidMount() {
                this.fetchNaturalProducts();
            }

            fetchNaturalProducts(link = "/api/compound?page=" + pageNumber) {
                restClient({
                    method: "GET",
                    path: link
                }).then(
                    (response) => {
                        this.setState({
                            data: {
                                isLoaded: true,
                                result: response.entity._embedded.uniqueNaturalProducts
                            },
                            stats: {
                                totalCompoundCount: response.entity.page.totalElements,
                                totalPageCount: response.entity.page.totalPages
                            }
                        });
                    },
                    (error) => {
                        this.setState({
                            data: {
                                isLoaded: true,
                                error: error
                            }
                        });
                    });
            }

            render() {
                const {error, isLoaded, result} = this.state.data;

                if (error) {
                    return <Error/>
                } else if (!isLoaded) {
                    return <Spinner/>
                } else {
                    const displayPageNumber = pageNumber + 1;

                    return (
                        <Container>
                            <Row>
                                <h2>Component Browser</h2>
                            </Row>
                            <br/>
                            <Row>
                                <BrowserFilter/>
                            </Row>
                            <br/>
                            <Row>
                                <BrowserViewPills />
                            </Row>
                            <br/>
                            <Row>
                                <p>There are {this.state.stats.totalCompoundCount} unique natural products in the database.</p>
                            </Row>
                            <Row>
                                <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item>{displayPageNumber}</Pagination.Item>
                                    <Pagination.Item>{displayPageNumber + 1}</Pagination.Item>
                                    <Pagination.Item>{displayPageNumber + 2}</Pagination.Item>
                                    <Pagination.Ellipsis/>
                                    <Pagination.Item>{this.state.stats.totalPageCount}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </Pagination>
                            </Row>
                            <br/>
                            <Row>
                                <ViewComponent naturalProducts={result}/>
                            </Row>
                        </Container>
                    );
                }
            }
        }
    }

    render() {
        const CardBrowserWithSubscription = this.withSubscription(CardBrowser, this.state.currentPage);
        const TableBrowserWithSubscription = this.withSubscription(TableBrowser, this.state.currentPage);

        return (
            <Switch>
                <Route path="/browser/cards" component={CardBrowserWithSubscription}/>
                <Route path="/browser/table" component={TableBrowserWithSubscription}/>
                <Redirect from="/browser*" to="/browser/cards"/>
            </Switch>
        );
    }
}