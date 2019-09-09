import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import NaturalProductTableItem from "./NaturalProductTableItem";
import BrowserFilter from "./BrowserFilter";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import TableBrowser from "./TableBrowser";
import CardBrowser from "./CardBrowser";
import NaturalProductCardItem from "./NaturalProductCardItem";

const React = require("react");


class Browser extends React.Component {
    render() {
        return <Container>
            <Row>
                <h2>Component Browser</h2>
            </Row>
            <Row>
                <Nav variant="pills" defaultActiveKey="/browser">
                    <Nav.Item>
                        <Nav.Link href="/browser">Table</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="browser/cards">Cards</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row>
                <BrowserFilter/>
            </Row>
            <hr/>
            <Row>
                <CardBrowser/>
            </Row>
        </Container>;
    }
}

export default Browser