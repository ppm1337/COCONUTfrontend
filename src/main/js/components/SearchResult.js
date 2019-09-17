import Container from "react-bootstrap/Container";
import Introduction from "./Introduction";
import Browser from "./Browser";

const React = require("react");

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Browser naturalProducts={this.props.naturalProducts} />
            </Container>
        );
    }
}

export default SearchResult