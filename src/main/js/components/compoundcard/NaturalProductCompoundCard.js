import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import Spinner from "../Spinner";
import Error from "../Error";
import Utils from "../../Utils";
import Button from "react-bootstrap/Button";
import Fragments from "./Fragments";
import NavigationSidebar from "./NavigationSidebar";

const React = require("react");
const restClient = require("../../restClient");


export default class NaturalProductCompoundCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            naturalProduct: []
        };
        this.handleMolfileDownload = this.handleMolfileDownload.bind(this);
    }

    componentDidMount() {
        const identifier = this.props.match.params.identifier;
        const identifierValue = this.props.match.params.identifierValue;

        restClient({
            method: "GET",
            path: "/api/compound/search/findBy" + Utils.capitalize(identifier) + "?" + identifier + "=" + identifierValue
        }).then(
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

    handleMolfileDownload(e, smiles, identifier) {
        e.preventDefault();

        const download = document.createElement("a");

        download.setAttribute("href", "data:chemical/x-mdl-molfile;charset=utf-8," + encodeURIComponent(Utils.getMolfileStringBySmiles(smiles)));
        download.setAttribute("download", "Molfile_V3_" + identifier + ".mol");
        download.style.display = "none";

        document.body.appendChild(download);
        download.click();
        document.body.removeChild(download);
    }

    render() {
        const { error, isLoaded, naturalProduct } = this.state;

        if (error) {
            return <Error/>;
        } else if (!isLoaded) {
            return <Spinner/>;
        } else {
            const compoundCardItems = [
                "overview",
                "representations",
                "natural_product_likeness",
                "molecular_properties",
                "computed_properties",
                "sources",
                "species",
                "synonyms",
                "citations"
            ];

            const structure = Utils.drawMoleculeBySmiles(naturalProduct.smiles);

            const bcutDescriptor = [];
            naturalProduct.bcutDescriptor.map((item, index) => {
                bcutDescriptor.push(<li key={index}>{item}</li>);
            });

            return (
                <Container>
                    <Row>
                        <Col sm={3}>
                            <NavigationSidebar navigationItems={compoundCardItems} />
                        </Col>
                        <Col sm={9}>
                            <Row>
                                <Card id={compoundCardItems[0]} className="compoundCardItem">
                                    <Card.Body>
                                        <Card.Title className="text-primary">{naturalProduct.inchikey}</Card.Title>
                                        <br />
                                        <Row>
                                            <Col sm={4}>
                                                <Image src={structure.toDataURL()} alt={<FontAwesomeIcon icon="file-image" className="standAloneIcon" size="3x"/>} fluid/>
                                            </Col>
                                            <Col sm={8}>
                                                <Table size="sm">
                                                    <tbody>
                                                    <tr>
                                                        <td>Name</td>
                                                        <td>{naturalProduct.name ? naturalProduct.name : "no name available"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Contains sugar</td>
                                                        <td>{naturalProduct.contains_sugar ? "yes" : "no"}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mol. formula</td>
                                                        <td>{naturalProduct.molecular_formula || naturalProduct.molecularFormula}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mol. weight</td>
                                                        <td>{naturalProduct.molecular_weight || naturalProduct.molecularWeight}</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                                <Button id="downloadMolfile" variant="outline-primary" size="sm" onClick={(e) => this.handleMolfileDownload(e, naturalProduct.smiles, naturalProduct.inchikey)}>
                                                    <FontAwesomeIcon icon="file-download" fixedWidth/>
                                                    &nbsp;Molfile
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br/>
                            <Row>
                                <Card id={compoundCardItems[1]} className="compoundCardItem">
                                    <Card.Body>
                                        <Card.Title className="text-primary">Representations</Card.Title>
                                        <br />
                                        <Table size="sm">
                                            <tbody>
                                            <tr>
                                                <td>InChI</td>
                                                <td>{naturalProduct.inchi}</td>
                                            </tr>
                                            <tr>
                                                <td>InChIKey</td>
                                                <td>{naturalProduct.inchikey}</td>
                                            </tr>
                                            <tr>
                                                <td>SMILES</td>
                                                <td>{naturalProduct.smiles}</td>
                                            </tr>
                                            <tr>
                                                <td>Canonical SMILES</td>
                                                <td>{naturalProduct.clean_smiles}</td>
                                            </tr>
                                            <tr>
                                                <td>Mol. formula</td>
                                                <td>{naturalProduct.molecular_formula || naturalProduct.molecularFormula}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br/>
                            <Row>
                                <Card id={compoundCardItems[2]} className="compoundCardItem">
                                    <Card.Body>
                                        <Card.Title className="text-primary">Natural Product Likeness</Card.Title>
                                        <br />
                                        <Table size="sm">
                                            <tbody>
                                            <tr>
                                                <td>NPL NOH score</td>
                                                <td>{naturalProduct.npl_noh_score}</td>
                                            </tr>
                                            <tr>
                                                <td>NPL score</td>
                                                <td>{naturalProduct.npl_score}</td>
                                            </tr>
                                            <tr>
                                                <td>NPL sugar score</td>
                                                <td>{naturalProduct.npl_sugar_score}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br/>
                            <Row>
                                <Card id={compoundCardItems[3]} className="compoundCardItem">
                                    <Card.Body>
                                        <Card.Title className="text-primary">Molecular Properties</Card.Title>
                                        <br />
                                        <Table size="sm">
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
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br/>
                            <Row>
                                <Card id={compoundCardItems[4]} className="compoundCardItem">
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
                            </Row>
                            <br/>
                            {/* do not show fragments atm
                            <br/>
                                <Fragments id={"..."} fragments={this.state.naturalProduct.fragments} fragmentsWithSugar={this.state.naturalProduct.fragmentsWithSugar}/>
                            <br/>
                            */}
                            <Row>
                                <Card id={compoundCardItems[5]} className="compoundCardItem">
                                    <Card.Body>
                                        <Card.Title className="text-primary">Sources</Card.Title>
                                        <br />
                                        <Table size="sm">
                                            <tbody>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br/>
                            <Row>
                                <Card id={compoundCardItems[6]} className="compoundCardItem">
                                    <Card.Body>
                                        <Card.Title className="text-primary">Species</Card.Title>
                                        <br />
                                        <Table size="sm">
                                            <tbody>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br/>
                            <Row>
                                <Card id={compoundCardItems[7]} className="compoundCardItem">
                                    <Card.Body>
                                        <Card.Title className="text-primary">Synonyms</Card.Title>
                                        <br />
                                        <Table size="sm">
                                            <tbody>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br/>
                            <Row>
                                <Card id={compoundCardItems[8]} className="compoundCardItem">
                                    <Card.Body>
                                        <Card.Title className="text-primary">Citations</Card.Title>
                                        <br />
                                        <Table size="sm">
                                            <tbody>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}