import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"
import NaturalProductTableItem from "./NaturalProductTableItem";

// React
const React = require("react");
const ReactDOM = require("react-dom");
// Rest
const restClient = require("./restClient");


class Browser extends React.Component {
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
            <NaturalProductTableItem key={naturalProduct._links.self.href} naturalProduct={naturalProduct}/>
        );
        return <Container>
            <Table responsive bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Molecule</th>
                        <th>Name</th>
                        <th>NPlikeness Score</th>
                        <th>Formula</th>
                        <th>Smiles</th>
                        <th>Inchi</th>
                        <th>Inchikey</th>
                    </tr>
                </thead>
                <tbody>
                    {naturalProducts}
                </tbody>
            </Table>
        </Container>
    }
}

export default Browser