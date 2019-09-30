import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LinkContainer} from "react-router-bootstrap";
import {Redirect, Route, Switch} from "react-router-dom";
import SearchResult from "./SearchResult";

const React = require("react");
const restClient = require("../restClient");


export default class HeaderSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchError: null,
            searchIsLoaded: false,
            searchResult: [],
            searchSubmitted: false
        };
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(e) {
        e.preventDefault();

        this.setState({
            searchSubmitted: true
        });

        this.fetchSearchResults(document.getElementById("searchInput").value);
    }

    fetchSearchResults(queryString) {
        restClient({
            method: "GET",
            path: "/api/search/simple?query=" + encodeURIComponent(queryString)
        }).then(
            (response) => {
                this.setState({
                    searchIsLoaded: true,
                    searchResult: response
                });
            },
            (error) => {
                this.setState({
                    searchIsLoaded: true,
                    searchError: error
                });
            });
    }

    render() {
        return (
            <Row>
                <Col>
                    <Form.Label><small>Find natural products</small></Form.Label>
                    <InputGroup>
                        <Form.Control id="searchInput" type="text" placeholder="Smiles, Inchi, Inchikey, formula"/>
                        <InputGroup.Append>
                            <Button id="searchButton" variant="primary" type="submit" onClick={this.handleSearchSubmit}>
                                {this.state.searchSubmitted ?
                                    <FontAwesomeIcon id="searchButtonIcon" icon="spinner" fixedWidth spin/> :
                                    <FontAwesomeIcon id="searchButtonIcon" icon="search" fixedWidth/>}
                                &nbsp;Search
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Text>
                        <LinkContainer to="/search/structure">
                            <a className="text-primary">Structure Search</a>
                        </LinkContainer>
                        <span> | </span>
                        <LinkContainer to="/search/advanced">
                            <a className="text-primary">Advanced Search</a>
                        </LinkContainer>
                    </Form.Text>
                </Col>
                {this.state.searchIsLoaded &&
                <Switch>
                    <Route path="/search_result" render={(props) => <SearchResult {...props} result={this.state.searchResult}/>}/>
                </Switch>}
            </Row>
        );
    }
}