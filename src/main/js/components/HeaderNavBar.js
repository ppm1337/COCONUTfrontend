import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import {LinkContainer} from "react-router-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";

const React = require("react");


export default class HeaderNavBar extends React.Component {
    render() {
        return (
            <Row id="headerNav">
                <Col>
                    <Nav variant="tabs">
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Browser</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <LinkContainer to="/browser/table">
                                    <Dropdown.Item>
                                        <FontAwesomeIcon icon="table" fixedWidth/>
                                        &nbsp;Table Browser
                                    </Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/browser/cards">
                                    <Dropdown.Item>
                                        <FontAwesomeIcon icon="clipboard-list" fixedWidth/>
                                        &nbsp;Card Browser
                                    </Dropdown.Item>
                                </LinkContainer>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Search</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <LinkContainer to="/search/advanced">
                                    <Dropdown.Item>
                                        <FontAwesomeIcon icon="search-plus" fixedWidth/>
                                        &nbsp;Advanced Search
                                    </Dropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/search/structure">
                                    <Dropdown.Item>
                                        <FontAwesomeIcon icon="atom" fixedWidth/>
                                        &nbsp;Structure Search
                                    </Dropdown.Item>
                                </LinkContainer>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <Nav.Link href="/download">Download</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        );
    }
}