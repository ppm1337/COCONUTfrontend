import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import NaturalProductTableItem from "./NaturalProductTableItem";
import BrowserFilter from "./BrowserFilter";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import TableBrowser from "./TableBrowser";
import CardBrowser from "./CardBrowser";
import NaturalProductCardItem from "./NaturalProductCardItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const React = require("react");


class Browser extends React.Component {
    render() {
        return <Container>
            <Row>
                <h2>Component Browser</h2>
            </Row>
            <br/>
            <Row>
                <Nav variant="pills" defaultActiveKey="/browser">
                    <Nav.Item>
                        <Nav.Link href="/browser">
                            <FontAwesomeIcon icon="table" fixedWidth/>
                            Table
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="browser/cards">
                            <FontAwesomeIcon icon="clipboard-list" fixedWidth/>
                            Cards
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <br/>
            <Row>
                <BrowserFilter/>
            </Row>
            <br/>
            <Row>
                <CardBrowser/>
            </Row>
        </Container>;
    }
}

export default Browser