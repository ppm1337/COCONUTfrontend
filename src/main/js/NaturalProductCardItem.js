import Card from "react-bootstrap/Card";

const React = require("react");

class NaturalProductCardItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Card>
            <Card.Img variant="top" src="" alt="Component Structure<br> 🥥"/>
            <Card.Body>
                <Card.Title>
                    <Card.Link href="">Name goes here</Card.Link>
                </Card.Title>
                <Card.Subtitle>{this.props.naturalProduct.inchikey}</Card.Subtitle>
                <Card.Text>
                    <li>{this.props.naturalProduct.npl_score}</li>
                    <li>{this.props.naturalProduct.molecular_formula}</li>
                </Card.Text>
            </Card.Body>
        </Card>
    }
}

export default NaturalProductCardItem