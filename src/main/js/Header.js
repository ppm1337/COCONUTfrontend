import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const React = require("react");
const ReactDOM = require("react-dom");

import "../resources/css/coconut.css"


class Header extends React.Component {
    render() {
        return <Container>
            <div id="header">
                <Row>
                    <Col sm={2}>
                        <a title="Sarah Tan, from The Noun Project [CC BY 3.0 us (https://creativecommons.org/licenses/by/3.0/us/deed.en)], via Wikimedia Commons"
                           href="https://commons.wikimedia.org/wiki/File:Coconut_icon.svg">
                            <img id="header-icon" width="128" alt="Coconut icon"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Coconut_icon.svg/128px-Coconut_icon.svg.png"/>
                        </a>
                    </Col>
                    <Col sm={10}>
                        <Form>
                            <Form.Group controlId="searchBar" >
                                <Form.Label>Search</Form.Label>
                                <Form.Control type="email" placeholder="Smiles, Inchi, Inchikey"/>
                                <Form.Text className="text-muted">
                                    <a href="">Structure Search</a>
                                    <span> | </span>
                                    <a href="">Advanced Search</a>
                                </Form.Text>
                                <Button id="searchButton" variant="primary" type="submit">
                                    Search
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>;
    }
}

export default Header