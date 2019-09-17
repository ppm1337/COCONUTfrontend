import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";

const React = require("react");

class BrowserViewPills extends React.Component {
    render() {
        return (
            <Nav variant="pills">
                <Nav.Item>
                    <LinkContainer to="/browser/cards" activeClassName="active">
                        <Nav.Link>
                            <FontAwesomeIcon icon="clipboard-list" fixedWidth/>
                            &nbsp;Cards
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/browser/table" activeClassName="active">
                        <Nav.Link>
                            <FontAwesomeIcon icon="table" fixedWidth/>
                            &nbsp;Table
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        );
    }
}

export default BrowserViewPills