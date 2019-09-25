import Image from "react-bootstrap/Image";
import {LinkContainer} from "react-router-bootstrap";

const OpenChemLib = require("openchemlib/full");
const React = require("react");


export default class NaturalProductTableItem extends React.Component {
    render() {
        const linkToCompoundPage = "/compound/inchikey/" + this.props.naturalProduct.inchikey;
        let canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 100;

        try {
            const npMolecule = OpenChemLib.Molecule.fromSmiles(this.props.naturalProduct.smiles);
            OpenChemLib.StructureView.drawMolecule(canvas, npMolecule);
        } catch(e) {
            console.log(e.name + " in OpenChemLib: " + e.message);
        }

        return (
            <LinkContainer to={linkToCompoundPage}>
                <tr>
                    <td><Image src={canvas.toDataURL()} alt="🥥" fluid/></td>
                    <td></td>
                    <td>{this.props.naturalProduct.npl_score}</td>
                    <td>{this.props.naturalProduct.molecular_formula}</td>
                    <td>{this.props.naturalProduct.inchi}</td>
                    <td>{this.props.naturalProduct.inchikey}</td>
                </tr>
            </LinkContainer>
        );
    }
}