import Browser from "./Browser"
import Header from "./Header"
import Introduction from "./Introduction"

import "bootstrap/scss/bootstrap.scss"
import "../resources/scss/coconut.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas);

import { BrowserRouter, Route, Link } from "react-router-dom"

const React = require("react");
const ReactDOM = require("react-dom");


class App extends React.Component {
	render() {
		return <React.Fragment>
            <Header />
            <div id="content">
                <Introduction />
                <br/>
                <Browser />
            </div>
		</React.Fragment>
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("viewport")
);