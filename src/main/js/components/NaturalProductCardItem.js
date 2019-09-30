import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const OpenChemLib = require("openchemlib/full");
const React = require("react");

export default class NaturalProductCardItem extends React.Component {
    render() {
        const linkToCompoundPage = "/compound/inchikey/" + this.props.naturalProduct.inchikey;
        let canvas = document.createElement("canvas");
        canvas.width = 280;
        canvas.height = 200;

        try {
            const npMolecule = OpenChemLib.Molecule.fromSmiles(this.props.naturalProduct.smiles);
            OpenChemLib.StructureView.drawMolecule(canvas, npMolecule);
        } catch(e) {
            console.log(e.name + " in OpenChemLib: " + e.message);
        }

        return (
            <Card className="cardBrowserItem">
                <Card.Img variant="top" src={canvas.toDataURL()} alt="🥥"/>
                <Card.Body>
                    <Card.Title>
                        <Card.Link href={linkToCompoundPage} className="cardItemHeadline">{this.props.naturalProduct.inchikey}</Card.Link>
                    </Card.Title>
                    <Card.Subtitle>{this.props.naturalProduct.name ? this.props.naturalProduct.name : "no name available"}</Card.Subtitle>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Mol. formula</td>
                            <td>{this.props.naturalProduct.molecular_formula || this.props.naturalProduct.molecularFormula}</td>
                        </tr>
                        <tr>
                            <td>Mol. weight</td>
                            <td>{this.props.naturalProduct.molecular_weight || this.props.naturalProduct.molecularWeight}</td>
                        </tr>
                        <tr>
                            <td>NPL score</td>
                            <td>{this.props.naturalProduct.npl_score}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}