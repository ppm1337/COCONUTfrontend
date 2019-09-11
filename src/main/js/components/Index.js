import Introduction from "./Introduction";
import Browser from "./Browser";

const React = require("react");


class Index extends React.Component {
    render() {
        return <div id="content">
            <Introduction />
            <br/>
            <Browser />
        </div>
    }
}

export default Index