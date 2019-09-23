import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";

const React = require("react");


export default class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.error("Error: " + this.props.error);

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col sm={3}>
                        <FontAwesomeIcon icon="bug" size="4x" spin/>
                    </Col>
                    <Col sm={6}>
                        <p>An error occurred..</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}