import Table from "react-bootstrap/Table";
import NaturalProductTableItem from "./NaturalProductTableItem";

const React = require("react");


class TableBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const naturalProducts = this.props.naturalProducts.map(naturalProduct =>
            <NaturalProductTableItem key={naturalProduct._links.self.href} naturalProduct={naturalProduct}/>
        );

        return (
            <Table responsive="lg" bordered hover size="sm">
                <thead>
                <tr>
                    <th>Molecule</th>
                    <th>Name</th>
                    <th>NPlikeness Score</th>
                    <th>Formula</th>
                    <th>Inchi</th>
                    <th>Inchikey</th>
                </tr>
                </thead>
                <tbody>
                    {naturalProducts}
                </tbody>
            </Table>
        );
    }
}

export default TableBrowser