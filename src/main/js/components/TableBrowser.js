import Table from "react-bootstrap/Table";
import NaturalProductTableItem from "./NaturalProductTableItem";

const React = require("react");


export default class TableBrowser extends React.Component {
    shouldComponentUpdate() {
        if (this.props.naturalProducts === []) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        const naturalProductTableItems = this.props.naturalProducts.map(naturalProduct =>
            <NaturalProductTableItem key={naturalProduct.inchikey} naturalProduct={naturalProduct}/>
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
                    {naturalProductTableItems}
                </tbody>
            </Table>
        );
    }
}