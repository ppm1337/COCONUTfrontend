import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SearchResult from "./SearchResult";
import Col from "react-bootstrap/Col";

const React = require("react");
const OpenChemLib = require("openchemlib/full");
const restClient = require("./restClient");

class StructureSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ajaxError: null,
            ajaxIsLoaded: false,
            ajaxResult: [],
            searchSubmitted: false,
            searchSmiles: ""
        };
        this.handleDesireForCoffee = this.handleDesireForCoffee.bind(this);
        this.handleStructureSubmit = this.handleStructureSubmit.bind(this);
    }

    componentDidMount() {
        this.editor = OpenChemLib.StructureEditor.createSVGEditor("structureSearchEditor", 1);
    }

    handleDesireForCoffee() {
        const caffeineSmiles = "[H]C1=NC2=C(C(=O)N(C(=O)N2C([H])([H])[H])C([H])([H])[H])N1C([H])([H])[H]";
        const caffeineCleanSmiles = "O=C1C2=C(N=CN2C)N(C(=O)N1C)C";

        this.editor.setSmiles(caffeineCleanSmiles);
        console.log(caffeineCleanSmiles);
        console.log(this.editor.getSmiles());
    }

    handleStructureSubmit() {
        let structureAsSmiles = this.editor.getSmiles();

        this.setState({
            searchSubmitted: true,
            searchSmiles: structureAsSmiles
        });

        this.doSearchBySmiles(structureAsSmiles);
    }

    doSearchBySmiles(smiles) {
        restClient({
            method: "GET",
            path: "/api/search/structure?smiles=" + encodeURIComponent(smiles)
        }).then(
            (response) => {
                this.setState({
                    ajaxIsLoaded: true,
                    ajaxResult: response.entity
                });
            },
            (error) => {
                this.setState({
                    ajaxIsLoaded: true,
                    ajaxError: error
                });
            });
    }

    render() {
        const {ajaxError, ajaxIsLoaded, ajaxResult, searchSmiles, searchSubmitted} = this.state;
        let resultRow;
        let smilesInfo;

        if (searchSubmitted) {
            smilesInfo = (
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Smiles:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" readOnly placeholder={searchSmiles} />
                    </Col>
                </Form.Group>
            );

            if (!ajaxIsLoaded) {
                resultRow = <Row className="justify-content-center"><FontAwesomeIcon icon="spinner" size="6x" spin/></Row>;
            } else {
                if (ajaxResult.length > 0) {
                    resultRow = <SearchResult naturalProducts={ajaxResult}/>;
                } else {
                    resultRow = <p>There are no results that exactly match your structure.</p>
                }
            }
        }

        return (
            <Container>
                <Row>
                    <h2>Structure Search</h2>
                </Row>
                <br/>
                <Row>
                    <div id="structureSearchEditor"/>
                </Row>
                <br/>
                <Row>
                    <Form>
                        <Form.Group>
                            <Form.Check type="checkbox" label="Exact match (Note: substructure search not implemented yet.)" checked disabled/>
                        </Form.Group>
                    </Form>
                </Row>
                <Row>
                    <Col sm={2}>
                        <Button id="structureSearchButton" variant="primary" type="submit" onClick={this.handleStructureSubmit}>
                            <FontAwesomeIcon icon="search" fixedWidth/>
                            &nbsp;Search
                        </Button>
                    </Col>
                    <Col sm={2}>
                        <Button id="structureSearchDrawExampleButton" variant="primary" type="submit" onClick={this.handleDesireForCoffee}>
                            <FontAwesomeIcon icon="mug-hot" fixedWidth/>
                        </Button>
                    </Col>
                    <Col sm={8}>
                        {smilesInfo}
                    </Col>
                </Row>
                <br/>
                {resultRow}
            </Container>
        );
    }
}

export default StructureSearch