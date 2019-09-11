import "bootstrap/scss/bootstrap.scss"
import "../../resources/scss/coconut.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas);

import Header from "../components/Header"
import Index from "../components/Index";
import { BrowserRouter as Router } from "react-router-dom";

const React = require("react");
const ReactDOM = require("react-dom");


class MainPage extends React.Component {
	render() {
		return <Router>
			<React.Fragment>
				<Header />
				<Index />
			</React.Fragment>
		</Router>
	}
}

ReactDOM.render(
	<MainPage />,
	document.getElementById("main_page_viewport")
);