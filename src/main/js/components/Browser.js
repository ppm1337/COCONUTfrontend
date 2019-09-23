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
            data: {
                error: null,
                isLoaded: false,
                result: []
            },
            stats: {
                totalCompoundCount: null,
                totalPageCount: null,
                currentPage: null
            },
            pointer: {
                first: null,
                last: null,
                next: null,
                prev: null,
                self: null
            }
        };
    }

    componentDidMount() {
        this.fetchNaturalProducts();
    }

    fetchNaturalProducts(link = "/api/compound") {
        restClient({
            method: "GET",
            path: link
        }).then(
            (response) => {
                let prevPage, nextPage = null;

                if (response.entity.page.number === "0") {
                    prevPage = response.entity._links.prev.href;
                }

                if (response.entity.page.number === (response.entity.page.totalPages - 1)) {
                    nextPage= response.entity._links.next.href;
                }

                this.setState({
                    data: {
                        isLoaded: true,
                        result: response.entity._embedded.uniqueNaturalProducts
                    },
                    stats: {
                        totalCompoundCount: response.entity.page.totalElements,
                        totalPageCount: response.entity.page.totalPages,
                        currentPage: response.entity.page.number
                    },
                    pointer: {
                        first: response.entity._links.first.href,
                        last: response.entity._links.last.href,
                        next: nextPage,
                        prev: prevPage,
                        self: response.entity._links.self.href
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

    withSubscription(ViewComponent, data) {
        return class extends React.Component {
            render() {
                const {error, isLoaded, result} = data;

                if (error) {
                    return <Error/>
                } else if (!isLoaded) {
                    return <Spinner/>
                } else {
                    return <ViewComponent naturalProducts={result}/>
                }
            }
        }
    }

    render() {
        const renderTotalCount = this.state.stats.totalCompoundCount ? this.state.stats.totalCompoundCount : <FontAwesomeIcon icon="spinner" spin fixedWidth/>;

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
                    <p>There are {renderTotalCount} compounds.</p>
                </Row>
                <Row>
                    {/*<BrowserPagination stats={this.state.stats} pointer={this.state.pointer}/>*/}
                    <Pagination>
                        <Pagination.First onClick={this.fetchNaturalProducts(this.state.pointer.first)}/>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Ellipsis/>
                        <Pagination.Item>{this.state.stats.totalPageCount}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Row>
                <br/>
                <Row>
                    <Switch>
                        <Route path="/browser/cards" render={() => React.createElement(this.withSubscription(CardBrowser, this.state.data))}/>
                        <Route path="/browser/table" render={() => React.createElement(this.withSubscription(TableBrowser, this.state.data))}/>
                        <Redirect from="/browser*" to="/browser/cards"/>
                    </Switch>
                </Row>
            </Container>
        );
    }

}