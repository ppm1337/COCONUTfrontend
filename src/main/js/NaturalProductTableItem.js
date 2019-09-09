const React = require("react");
const ReactDOM = require("react-dom");

class NaturalProductTableItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <tr>
            <td>not implemented yet</td>
            <td>not implemented yet</td>
            <td>{this.props.naturalProduct.npl_score}</td>
            <td>{this.props.naturalProduct.molecular_formula}</td>
            <td>{this.props.naturalProduct.inchi}</td>
            <td>{this.props.naturalProduct.inchikey}</td>
        </tr>
    }
}

export default NaturalProductTableItem