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


const React = require("react");
const restClient = require("./restClient");


export default class Browser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ajaxError: null,
            ajaxIsLoaded: false,
            ajaxResult: []
        };
        console.log("Browser props: ", this.props);
        console.log("Browser state: ", this.state);
    }

    componentDidMount() {
        this.fetchNaturalProducts();
    }

    fetchNaturalProducts() {
        restClient({
            method: "GET",
            path: "/api/compound"
        }).then(
            (response) => {
                this.setState({
                    ajaxIsLoaded: true,
                    ajaxResult: response.entity._embedded.uniqueNaturalProducts
                });
            },
            (error) => {
                this.setState({
                    ajaxIsLoaded: true,
                    ajaxError: error
                });
            });
    }

    render() {
        const { ajaxError, ajaxIsLoaded, ajaxResult } = this.state;

        if (ajaxError) {
            console.error("Error: " + ajaxError);
            return (
                <Container>
                    <Row>No error page implemented yet .... Check your console.</Row>
                </Container>
            );
        } else if (!ajaxIsLoaded) {
            return (
                <Container>
                    <Row className="justify-content-center"><FontAwesomeIcon icon="spinner" size="6x" spin/></Row>
                </Container>
            );
        } else {
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
                        <BrowserViewPills/>
                    </Row>
                    <br/>
                    <Row>
                        <Switch>
                            <Route path="/browser/cards" render={() => <CardBrowser naturalProducts={ajaxResult}/>}/>
                            <Route path="/browser/table" render={() => <TableBrowser naturalProducts={ajaxResult}/>}/>
                            <Redirect from="/browser*" to="/browser/cards"/>
                            <Route component={CardBrowser} />
                        </Switch>
                    </Row>
                </Container>
            );
        }
    }
}