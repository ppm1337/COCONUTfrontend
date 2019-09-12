import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

const React = require("react");


class NaturalProductCompoundCard extends React.Component {
    render() {
        return <Container>
            <Row>
                <Col sm={2}>
                    <Nav defaultActiveKey="" className="flex-column" classID="compoundCardSidebar">
                        <Nav.Link className="text-secondary" href="">placeholder</Nav.Link>
                        <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                        <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                        <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                        <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                        <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                        <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                        <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                        <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Row>
                        <h2>Name goes here</h2>
                    </Row>
                    <br/>
                    <Row>
                        <Col sm={4}>
                            <Image src="" alt=""/>
                        </Col>
                        <Col sm={8}>
                            <h4></h4>
                            <Table>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <h4>Representations</h4>
                        <Table>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <h4>Computed properties</h4>
                        <Table>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <h4>Species</h4>
                        <Table>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Col>
            </Row>
        </Container>
    }
}

export default NaturalProductCompoundCard