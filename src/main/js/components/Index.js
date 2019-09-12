import Introduction from "./Introduction";
import Browser from "./Browser";
import Container from "react-bootstrap/Container";

const React = require("react");


class Index extends React.Component {
    render() {
        return <Container>
            <Introduction />
            <br/>
            <Browser />
        </Container>
    }
}

export default Index