import Container from "react-bootstrap/Container";
import Introduction from "./Introduction";
import Browser from "./Browser";
import CardBrowser from "./CardBrowser";

const React = require("react");

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <CardBrowser naturalProducts={this.props.naturalProducts} />
            </Container>
        );
    }
}

export default SearchResult