import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import {LinkContainer} from "react-router-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";

const React = require("react");


class HeaderNavBar extends React.Component {
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
                                <Dropdown.Item href="/search"><FontAwesomeIcon icon="search-plus" fixedWidth/>&nbsp;Advanced Search</Dropdown.Item>
                                <Dropdown.Item><FontAwesomeIcon icon="atom" fixedWidth/>&nbsp;Structure Search</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <Nav.Link href="/download">Download</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        );
    }
}

export default HeaderNavBar