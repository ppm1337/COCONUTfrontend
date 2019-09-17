import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const OpenChemLib = require("openchemlib/full");
const React = require("react");

class NaturalProductCardItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <Card.Link href=""><small>{this.props.naturalProduct.inchikey}</small></Card.Link>
                    </Card.Title>
                    <Card.Subtitle>name goes here</Card.Subtitle>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Mol. Formula</td>
                            <td>{this.props.naturalProduct.molecular_formula}</td>
                        </tr>
                        <tr>
                            <td>Mol. Weight</td>
                            <td>{this.props.naturalProduct.molecular_weight}</td>
                        </tr>
                        <tr>
                            <td>NPL Score</td>
                            <td>{this.props.naturalProduct.npl_score}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default NaturalProductCardItem