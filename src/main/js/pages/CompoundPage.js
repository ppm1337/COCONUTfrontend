import "bootstrap/scss/bootstrap.scss"
import "../../resources/scss/coconut.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas);

import Header from "../components/Header"
import NaturalProductCompoundCard from "../components/NaturalProductCompoundCard";

const React = require("react");
const ReactDOM = require("react-dom");


class CompoundPage extends React.Component {
	render() {
		return <React.Fragment>
                <Header />
                <NaturalProductCompoundCard/>
            </React.Fragment>
	}
}

ReactDOM.render(
	<CompoundPage />,
	document.getElementById("compound_page_viewport")
);