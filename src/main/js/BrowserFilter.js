import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const React = require("react");

class BrowserFilter extends React.Component {
    render() {
        return <Container fluid>
            <Row>
                <h4>Filters</h4>
            </Row>
        </Container>
    }
}

export default BrowserFilter