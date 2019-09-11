import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import InputGroup from "react-bootstrap/InputGroup";
import NavItem from "react-bootstrap/NavItem";
import Dropdown from "react-bootstrap/Dropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NavLink from "react-bootstrap/NavLink";

const React = require("react");


class Header extends React.Component {
    render() {
        return <Container fluid id="header" className="fixed-top border-bottom">
            <Container>
                <Row>
                    <Col sm={2} className="align-self-end">
                        <Figure>
                            <Figure.Image id="headerIcon" alt="Coconut icon &#x1F965;" className="img-fluid"
                                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Coconut_Clipart_Cartoon.png/128px-Coconut_Clipart_Cartoon.png"/>
                            <Figure.Caption id="headerIconCaption">EnochLindeman [CC BY-SA 4.0],<br/> via Wikimedia Commons</Figure.Caption>
                        </Figure>
                    </Col>
                    <Col sm={10} className="align-self-end">
                        <Row>
                            <Col>
                                <Form.Label><small>Find natural products</small></Form.Label>
                                <InputGroup size="md">
                                    <Form.Control id="searchInput" type="text" placeholder="Smiles, Inchi, Inchikey"/>
                                    <InputGroup.Append>
                                        <Button id="searchButton" variant="primary" type="submit"><FontAwesomeIcon icon="search" fixedWidth/>&nbsp;Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <Form.Text className="text-muted">
                                    <a href="">Structure Search</a>
                                    <span> | </span>
                                    <a href="">Advanced Search</a>
                                </Form.Text>
                            </Col>
                        </Row>
                        <Row id="headerNav">
                            <Col>
                                <Nav variant="tabs" defaultActiveKey="/">
                                    <Dropdown as={NavItem}>
                                        <Dropdown.Toggle as={NavLink}>Browser</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/browser"><FontAwesomeIcon icon="table" fixedWidth/>&nbsp;Table Browser</Dropdown.Item>
                                            <Dropdown.Item><FontAwesomeIcon icon="clipboard-list" fixedWidth/>&nbsp;Card Browser</Dropdown.Item>
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
                                        <Nav.Link href="/about">About</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>;
    }
}

export default Header