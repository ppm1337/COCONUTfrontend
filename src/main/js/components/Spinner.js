import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const React = require("react");


export default class Spinner extends React.Component {
    render() {
        return(
            <Container>
                <Row className="justify-content-center"><FontAwesomeIcon icon="spinner" size="4x" spin/></Row>
            </Container>
        );
    }
}