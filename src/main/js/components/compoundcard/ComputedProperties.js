import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const React = require("react");


export default class ComputedProperties extends React.Component {
    render() {
        const naturalProduct = this.props.naturalProduct;

        const bcutDescriptor = [];
        naturalProduct.bcutDescriptor.map((item, index) => {
            bcutDescriptor.push(<li key={index}>{item}</li>);
        });

        return (
            <Card  className="compoundCardItem">
                <Card.Body>
                    <Card.Title className="text-primary">Computed Properties</Card.Title>
                    <br />
                    <Table size="sm">
                        <tbody>
                        <tr>
                            <td>Alogp</td>
                            <td>{naturalProduct.alogp}</td>
                        </tr>
                        <tr>
                            <td>Alogp2</td>
                            <td>{naturalProduct.alogp2}</td>
                        </tr>
                        <tr>
                            <td>Amralogp</td>
                            <td>{naturalProduct.amralogp}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger key="apolOverlay" placement="top" overlay={
                                <Tooltip id="tooltip-apol">
                                    Sum of the atomic polarizabilities (including implicit hydrogens).
                                </Tooltip>
                            }>
                                <td>Apol <FontAwesomeIcon icon="question-circle" fixedWidth/></td>
                            </OverlayTrigger>
                            <td>{naturalProduct.apol}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger key="bpolOverlay" placement="top" overlay={
                                <Tooltip id="tooltip-bpol">
                                    Sum of the absolute value of the difference between atomic polarizabilities of all bonded atoms in the molecule (including implicit hydrogens) with polarizabilities taken from http://www.sunysccc.edu/academic/mst/ptable/p-table2.htm This descriptor assumes 2-centered bonds.
                                </Tooltip>
                            }>
                                <td>Bpol <FontAwesomeIcon icon="question-circle" fixedWidth/></td>
                            </OverlayTrigger>
                            <td>{naturalProduct.bpol}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger key="eccentricConnectivityIndexDescriptorOverlay" placement="top" overlay={
                                <Tooltip id="tooltip-eccentricConnectivityIndexDescriptor">
                                    A topological descriptor combining distance and adjacency information.
                                </Tooltip>
                            }>
                                <td>Eccentric Connectivity Index Descriptor <FontAwesomeIcon icon="question-circle" fixedWidth/></td>
                            </OverlayTrigger>
                            <td>{naturalProduct.eccentricConnectivityIndexDescriptor}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger key="fmfDescriptorOverlay" placement="top" overlay={
                                <Tooltip id="tooltip-fmfDescriptor">
                                    FMF descriptor characterizing complexity of a molecule. The descriptor is described in (Yang, Y. et. al.. J. Med. Chem.. 2010. ASAP) and is an approach to characterizing molecular complexity based on the Murcko framework present in the molecule.
                                </Tooltip>
                            }>
                                <td>FMF Descriptor <FontAwesomeIcon icon="question-circle" fixedWidth/></td>
                            </OverlayTrigger>
                            <td>{naturalProduct.fmfDescriptor}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger key="bcutDescriptorOverlay" placement="top" overlay={
                                <Tooltip id="tooltip-bcutDescriptor">
                                    Eigenvalue based descriptor noted for its utility in chemical diversity.
                                </Tooltip>
                            }>
                                <td>BCUT Descriptor <FontAwesomeIcon icon="question-circle" fixedWidth/></td>
                            </OverlayTrigger>
                            <td>
                                <ul className="list-unstyled">
                                    {bcutDescriptor}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <OverlayTrigger key="fsp3Overlay" placement="top" overlay={
                                <Tooltip id="tooltip-fsp3">
                                    This descriptor is characterizing non-flatness of a molecule.
                                </Tooltip>
                            }>
                                <td>FSP3 Descriptor <FontAwesomeIcon icon="question-circle" fixedWidth/></td>
                            </OverlayTrigger>
                            <td>{naturalProduct.fsp3}</td>
                        </tr>
                        <tr>
                            <OverlayTrigger key="fragmentComplexityDescriptorOverlay" placement="top" overlay={
                                <Tooltip id="tooltip-fragmentComplexityDescriptor">
                                    Class that returns the complexity of a system. The complexity is defined as (Nilakantan, R. et. al.. Journal of chemical information and modeling. 2006. 46)
                                </Tooltip>
                            }>
                                <td>Fragment Complexity Descriptor <FontAwesomeIcon icon="question-circle" fixedWidth/></td>
                            </OverlayTrigger>
                            <td>{naturalProduct.fragmentComplexityDescriptor}</td>
                        </tr>
                        <tr>
                            <td>to be continued....</td>
                            <td>to be continued....</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}