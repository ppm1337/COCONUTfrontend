import Browser from "./Browser"
import Header from "./Header"
import Introduction from "./Introduction"

import "../resources/css/coconut.css"
import "bootstrap/dist/css/bootstrap.css";

const React = require("react");
const ReactDOM = require("react-dom");


class App extends React.Component {
	render() {
		return <React.Fragment>
            <Header />
            <div id="content">
                <Introduction />
                <Browser />
            </div>
		</React.Fragment>
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("viewport")
);