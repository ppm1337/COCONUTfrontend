import "bootstrap/scss/bootstrap.scss"
import "../../resources/scss/coconut.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas);

import Header from "../components/Header"
import Index from "../components/Index";

const React = require("react");
const ReactDOM = require("react-dom");


class MainPage extends React.Component {
	render() {
		return <React.Fragment>
                <Header />
                <Index />
            </React.Fragment>
	}
}

ReactDOM.render(
	<MainPage />,
	document.getElementById("main_page_viewport")
);