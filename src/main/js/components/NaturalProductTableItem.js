import Image from "react-bootstrap/Image";

const OpenChemLib = require("openchemlib/full");
const React = require("react");


class NaturalProductTableItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 100;

        const npMolecule = OpenChemLib.Molecule.fromSmiles(this.props.naturalProduct.smiles);

        OpenChemLib.StructureView.drawMolecule(canvas, npMolecule);

        return <tr>
            <td><Image src={canvas.toDataURL()} alt="🥥"/></td>
            <td>not implemented yet</td>
            <td>{this.props.naturalProduct.npl_score}</td>
            <td>{this.props.naturalProduct.molecular_formula}</td>
            <td>{this.props.naturalProduct.inchi}</td>
            <td>{this.props.naturalProduct.inchikey}</td>
        </tr>
    }
}

export default NaturalProductTableItem