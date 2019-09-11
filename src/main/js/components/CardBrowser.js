import Container from "react-bootstrap/Container";
import NaturalProductCardItem from "./NaturalProductCardItem";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const React = require("react");
const restClient = require("./restClient");


class CardBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {naturalProducts: []};
    }

    componentDidMount() {
        restClient({method: "GET", path: "/api/search"}).then(response => {
            console.log(response);
            this.setState({naturalProducts: response.entity._embedded.uniqueNaturalProducts});
        });
    }

    render() {
        const cardRowSize = 4;
        let emptyCardKey = 0;
        let naturalProducts = this.state.naturalProducts;
        let cardRows = [];

        while (naturalProducts.length > 0) {
            let cardRow = [];

            naturalProducts.splice(0, cardRowSize).map(naturalProduct => {
                cardRow.push(<NaturalProductCardItem key={naturalProduct._links.self.href}
                                                     naturalProduct={naturalProduct}/>)
            });

            while (cardRow.length < cardRowSize) {
                cardRow.push(<Card key={emptyCardKey++} style={{visibility: "hidden"}}>
                    <Card.Body>""</Card.Body>
                </Card>);
            }

            cardRows.push(<CardDeck key={cardRows.length}>
                {cardRow}
            </CardDeck>)
        }

        return <Container>
            {cardRows}
        </Container>
    }
}

export default CardBrowser