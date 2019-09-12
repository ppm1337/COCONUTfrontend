import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const React = require("react");
const OpenChemLib = require("openchemlib/full");
const restClient = require("./restClient");


class NaturalProductCompoundCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            naturalProduct: []
        };
    }

    componentDidMount() {
        // ?inchikey=NSIOXFVMCTYIOU-UHFFFAOYSA-N
        restClient({method: "GET", path: "/api/search?size=1"}).then(
            (response) => {
                this.setState({
                    isLoaded: true,
                    naturalProduct: response.entity._embedded.uniqueNaturalProducts[0]
                });
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    render() {
        const { error, isLoaded, naturalProduct } = this.state;

        if (error) {
            console.log("Error: " + error);
            return <Container>
                <Row>No error page implemented yet .... Check your console.</Row>
            </Container>
        }

        if (!isLoaded) {
            return <Container>
                <Row className="justify-content-center"><FontAwesomeIcon icon="spinner" size="6x" spin /></Row>
            </Container>
        } else {
            let canvas = document.createElement("canvas");
            canvas.width = 400;
            canvas.height = 300;

            try {
                const npMolecule = OpenChemLib.Molecule.fromSmiles(naturalProduct.smiles);
                OpenChemLib.StructureView.drawMolecule(canvas, npMolecule);
            } catch(e) {
                console.log("Smiles provided: " + naturalProduct.smiles);
                console.log(e.name + " in OpenChemLib: " + e.message);
            }

            const bcutDescriptor = naturalProduct.bcutDescriptor.map(item => {
                <tr key={item}>{item}</tr>
            });

            return <Container>
                <Row>
                    <Col sm={2}>
                        <Nav defaultActiveKey="" className="flex-column" classID="compoundCardSidebar">
                            <Nav.Link className="text-secondary" href="">placeholder</Nav.Link>
                            <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                            <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                            <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                            <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                            <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                            <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                            <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                            <Nav.Link className="text-secondary" eventKey="">placeholder</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Row>
                            <h2>Name goes here</h2>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={4}>
                                <Image src={canvas.toDataURL()} alt={<FontAwesomeIcon icon="file-image" size="4x"/>} fluid/>
                            </Col>
                            <Col sm={8}>
                                <Table size="sm">
                                    <tbody>
                                    <tr>
                                        <td>COCONUT-ID</td>
                                        <td>{naturalProduct._id}</td>
                                    </tr>
                                    <tr>
                                        <td>Inchikey</td>
                                        <td>{naturalProduct.inchikey}</td>
                                    </tr>
                                    <tr>
                                        <td>Contains sugar</td>
                                        <td>{naturalProduct.contains_sugar}</td>
                                    </tr>
                                    <tr>
                                        <td>Mol. formula</td>
                                        <td>{naturalProduct.molecular_formula}</td>
                                    </tr>
                                    <tr>
                                        <td>Mol. weight</td>
                                        <td>{naturalProduct.molecular_weight}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <h4>Representations</h4>
                        </Row>
                        <br/>
                        <Row>
                            <Table size="sm">
                                <tbody>
                                <tr>
                                    <td>Inichi</td>
                                    <td>{naturalProduct.inchi}</td>
                                </tr>
                                <tr>
                                    <td>Inchikey</td>
                                    <td>{naturalProduct.inchikey}</td>
                                </tr>
                                <tr>
                                    <td>Smiles</td>
                                    <td>{naturalProduct.smiles}</td>
                                </tr>
                                <tr>
                                    <td>Clean Smiles</td>
                                    <td>{naturalProduct.clean_smiles}</td>
                                </tr>
                                <tr>
                                    <td>Mol. Formula</td>
                                    <td>{naturalProduct.molecular_formula}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <br/>
                        <Row>
                            <h4>Natural Product Likeness</h4>
                        </Row>
                        <br/>
                        <Row>
                            <Table size="sm">
                                <tbody>
                                <tr>
                                    <td>NPL NOH Score</td>
                                    <td>{naturalProduct.npl_noh_score}</td>
                                </tr>
                                <tr>
                                    <td>NPL Score</td>
                                    <td>{naturalProduct.npl_score}</td>
                                </tr>
                                <tr>
                                    <td>NPL Sugar Score</td>
                                    <td>{naturalProduct.npl_sugar_score}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <br/>
                        <Row>
                            <h4>Molecular properties</h4>
                        </Row>
                        <br/>
                        <Row>
                            <Table sm>
                                <tbody>
                                <tr>
                                    <td>Total atom number</td>
                                    <td>{naturalProduct.total_atom_number}</td>
                                </tr>
                                <tr>
                                    <td>Heavy atom number</td>
                                    <td>{naturalProduct.heavy_atom_number}</td>
                                </tr>
                                <tr>
                                    <td>Bond count</td>
                                    <td>{naturalProduct.bond_count}</td>
                                </tr>
                                <tr>
                                    <td>Number of carbons</td>
                                    <td>{naturalProduct.number_of_carbons}</td>
                                </tr>
                                <tr>
                                    <td>Number of nitrogens</td>
                                    <td>{naturalProduct.number_of_nitrogens}</td>
                                </tr>
                                <tr>
                                    <td>Number of oxygens</td>
                                    <td>{naturalProduct.number_of_oxygens}</td>
                                </tr>
                                <tr>
                                    <td>Number of rings</td>
                                    <td>{naturalProduct.number_of_rings}</td>
                                </tr>
                                <tr>
                                    <td>Number of repeated fragments</td>
                                    <td>{naturalProduct.number_repeated_fragments}</td>
                                </tr>
                                <tr>
                                    <td>Sugar free total atom number</td>
                                    <td>{naturalProduct.sugar_free_total_atom_number}</td>
                                </tr>
                                <tr>
                                    <td>Sugar free heavy atom number</td>
                                    <td>{naturalProduct.sugar_free_heavy_atom_number}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <br/>
                        <Row>
                            <h4>Computed properties</h4>
                        </Row>
                        <br/>
                        <Row>
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
                                        <td>Apol</td>
                                    </OverlayTrigger>
                                    <td>{naturalProduct.apol}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger key="bpolOverlay" placement="top" overlay={
                                        <Tooltip id="tooltip-bpol">
                                            Sum of the absolute value of the difference between atomic polarizabilities of all bonded atoms in the molecule (including implicit hydrogens) with polarizabilities taken from http://www.sunysccc.edu/academic/mst/ptable/p-table2.htm This descriptor assumes 2-centered bonds.
                                        </Tooltip>
                                    }>
                                        <td>Bpol</td>
                                    </OverlayTrigger>
                                    <td>{naturalProduct.bpol}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger key="eccentricConnectivityIndexDescriptorOverlay" placement="top" overlay={
                                        <Tooltip id="tooltip-eccentricConnectivityIndexDescriptor">
                                            A topological descriptor combining distance and adjacency information.
                                        </Tooltip>
                                    }>
                                        <td>Eccentric Connectivity Index Descriptor</td>
                                    </OverlayTrigger>
                                    <td>{naturalProduct.eccentricConnectivityIndexDescriptor}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger key="fmfDescriptorOverlay" placement="top" overlay={
                                        <Tooltip id="tooltip-fmfDescriptor">
                                            FMF descriptor characterizing complexity of a molecule. The descriptor is described in (Yang, Y. et. al.. J. Med. Chem.. 2010. ASAP) and is an approach to characterizing molecular complexity based on the Murcko framework present in the molecule.
                                        </Tooltip>
                                    }>
                                        <td>FMF Descriptor</td>
                                    </OverlayTrigger>
                                    <td>{naturalProduct.fmfDescriptor}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger key="bcutDescriptorOverlay" placement="top" overlay={
                                        <Tooltip id="tooltip-bcutDescriptor">
                                            Eigenvalue based descriptor noted for its utility in chemical diversity.
                                        </Tooltip>
                                    }>
                                        <td>BCUT Descriptor</td>
                                    </OverlayTrigger>
                                    <td>{bcutDescriptor}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger key="fsp3Overlay" placement="top" overlay={
                                        <Tooltip id="tooltip-fsp3">
                                            This descriptor is characterizing non-flatness of a molecule.
                                        </Tooltip>
                                    }>
                                        <td>FSP3 Descriptor</td>
                                    </OverlayTrigger>
                                    <td>{naturalProduct.fsp3}</td>
                                </tr>
                                <tr>
                                    <OverlayTrigger key="fragmentComplexityDescriptorOverlay" placement="top" overlay={
                                        <Tooltip id="tooltip-fragmentComplexityDescriptor">
                                            Class that returns the complexity of a system. The complexity is defined as (Nilakantan, R. et. al.. Journal of chemical information and modeling. 2006. 46)
                                        </Tooltip>
                                    }>
                                        <td>Fragment Complexity Descriptor</td>
                                    </OverlayTrigger>
                                    <td>{naturalProduct.fragmentComplexityDescriptor}</td>
                                </tr>
                                <tr>
                                    <td>to be continued....</td>
                                    <td>to be continued....</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                </Row>
            </Container>
        }
    }
}

export default NaturalProductCompoundCard