import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const React = require("react");

class About extends React.Component {
    render() {
        return <Container>
            <Row>
            <Image src="https://cheminf.uni-jena.de/wp-content/uploads/2017/12/cropped-Title_dec_2017.png"/>
            </Row>
            <Row>
                <p>For further information visit <a href="https://cheminf.uni-jena.de/" >the <i>Cheminformatics and Computational Metabolomics</i> homepage at https://cheminf.uni-jena.de/.</a></p>
            </Row>
        </Container>
    }
}

export default About