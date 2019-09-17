import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import NaturalProductTableItem from "./NaturalProductTableItem";
import BrowserFilter from "./BrowserFilter";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import TableBrowser from "./TableBrowser";
import CardBrowser from "./CardBrowser";
import NaturalProductCardItem from "./NaturalProductCardItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Redirect, Route, Switch} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import NotFound from "./NotFound";

const React = require("react");


class Browser extends React.Component {
    render() {
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
                    <Nav variant="pills">
                        <Nav.Item>
                            <LinkContainer to="/browser/cards" activeClassName="active">
                                <Nav.Link>
                                    <FontAwesomeIcon icon="clipboard-list" fixedWidth/>
                                    &nbsp;Cards
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/browser/table" activeClassName="active">
                                <Nav.Link>
                                    <FontAwesomeIcon icon="table" fixedWidth/>
                                    &nbsp;Table
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Row>
                <br/>
                <Row>
                    <Switch>
                        <Route path="/browser/cards" component={CardBrowser}/>
                        <Route path="/browser/table" component={TableBrowser}/>
                        <Redirect from="/browser*" to="/browser/cards"/>
                        <Route component={CardBrowser} />
                    </Switch>
                </Row>
            </Container>
        );
    }
}

export default Browser