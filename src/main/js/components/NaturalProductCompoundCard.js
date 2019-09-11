import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const React = require("react");


class NaturalProductCompoundCard extends React.Component {
    render() {
        return <Container>
            <Col sm={2}>
                <Nav defaultActiveKey="" className="flex-column">
                    <Nav.Link href="">placeholder</Nav.Link>
                    <Nav.Link eventKey="">placeholder</Nav.Link>
                </Nav>
            </Col>
            <Col sm={10}>
                <Row>
                    <h2>Representations</h2>
                </Row>
                <Row>
                    <h2>Computed properties</h2>
                </Row>
                <Row>
                    <h2>Species</h2>
                </Row>
            </Col>
        </Container>
    }
}

export default NaturalProductCompoundCard