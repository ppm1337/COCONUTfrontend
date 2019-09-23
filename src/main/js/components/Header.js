import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderNavBar from "./HeaderNavBar";

const React = require("react");


export default class Header extends React.Component {
    render() {
        return (
            <Container fluid id="header" className="fixed-top border-bottom">
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
                            <HeaderSearchBar/>
                            <HeaderNavBar/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}