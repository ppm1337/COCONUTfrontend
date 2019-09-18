import Container from "react-bootstrap/Container";
import NaturalProductCardItem from "./NaturalProductCardItem";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const React = require("react");


class CardBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.naturalProducts = [];
    }

    componentDidMount() {
        this.naturalProducts = this.props.naturalProducts;
    }

    render() {
        const cardRowSize = 4;
        let emptyCardKey = 0;
        let cardRows = [];

        while (this.naturalProducts.length > 0) {
            let cardRow = [];

            this.naturalProducts.splice(0, cardRowSize).map(naturalProduct => {
                cardRow.push(
                    <NaturalProductCardItem key={naturalProduct._links.self.href} naturalProduct={naturalProduct}/>
                );
            });

            while (cardRow.length < cardRowSize) {
                cardRow.push(
                    <Card key={emptyCardKey++} style={{visibility: "hidden"}}>
                        <Card.Body>
                            <Card.Text>empty</Card.Text>
                        </Card.Body>
                    </Card>
                );
            }

            cardRows.push(
                <CardDeck key={cardRows.length}>{cardRow}</CardDeck>
            );
        }

        return <Container>{cardRows}</Container>;
    }
}

export default CardBrowser