import Container from "react-bootstrap/Container";
import NaturalProductCardItem from "./NaturalProductCardItem";

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
        const naturalProducts = this.state.naturalProducts.map(naturalProduct =>
            <NaturalProductCardItem key={naturalProduct._links.self.href} naturalProduct={naturalProduct}/>
        );
        return <Container fluid>
                {naturalProducts}

        </Container>
    }
}

export default CardBrowser