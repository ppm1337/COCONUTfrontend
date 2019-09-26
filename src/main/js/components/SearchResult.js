import Container from "react-bootstrap/Container";
import Introduction from "./Introduction";
import Browser from "./Browser";
import CardBrowser from "./CardBrowser";
import Row from "react-bootstrap/Row";

const React = require("react");

export default class SearchResult extends React.Component {
    render() {
        console.log("SearchResult props: ", this.props);
        const result = this.props.result.entity;

        return (
            <Container>
                <Row>
                    <h2>Search Results</h2>
                </Row>
                <br/>
                <Row>
                    <p>Your search yielded {result.naturalProducts.length} natural products under the assumption of the entered sequence {result.originalQuery} being of type {result.determinedInputType}.</p>
                </Row>
                <CardBrowser naturalProducts={result.naturalProducts} />
            </Container>
        );
    }
}