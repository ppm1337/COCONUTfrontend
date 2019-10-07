import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";
import CardBrowser from "./browser/CardBrowser";
import Error from "./Error";

const React = require("react");
const OpenChemLib = require("openchemlib/full");
const restClient = require("../restClient");


export default class StructureSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ajaxError: null,
            ajaxIsLoaded: false,
            ajaxResult: [],
            searchSubmitted: false
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
    }

    handleStructureSubmit() {
        let structureAsSmiles = this.editor.getSmiles();

        this.setState({
            searchSubmitted: true
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
        const {ajaxError, ajaxIsLoaded, ajaxResult, searchSubmitted} = this.state;
        let resultRow;

        if (searchSubmitted) {
            if (ajaxError) {
                resultRow = <Error/>;
            } else if (!ajaxIsLoaded) {
                resultRow = <Row className="justify-content-center"><Spinner/></Row>;
            } else {
                if (ajaxResult.length > 0) {
                    resultRow = <Row><CardBrowser naturalProducts={ajaxResult}/></Row>;
                } else {
                    resultRow = <Row><p>There are no results that exactly match your structure.</p></Row>;
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
                            <Form.Check type="checkbox" label="Exact match (note: substructure search not implemented yet.)" checked disabled/>
                        </Form.Group>
                    </Form>
                </Row>
                <Row>
                    <Button id="structureSearchButton" variant="primary" type="submit" onClick={this.handleStructureSubmit}>
                        <FontAwesomeIcon icon="search" fixedWidth/>
                        &nbsp;Search
                    </Button>
                    <Button id="structureSearchDrawExampleButton" variant="primary" type="submit" onClick={this.handleDesireForCoffee}>
                        <FontAwesomeIcon icon="mug-hot" fixedWidth/>
                    </Button>
                </Row>
                <br/>
                {ajaxIsLoaded && <Row><h2>Search Results</h2></Row>}
                {resultRow}
            </Container>
        );
    }
}