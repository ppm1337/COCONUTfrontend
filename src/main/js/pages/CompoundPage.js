import "bootstrap/scss/bootstrap.scss"
import "../../resources/scss/coconut.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas);

import Header from "../components/Header"
import NaturalProductCompoundCard from "../components/NaturalProductCompoundCard";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Index from "../components/Index";
import Browser from "../components/Browser";
import Download from "../components/Download";
import About from "../components/About";
import NotFound from "../components/NotFound";

const React = require("react");
const ReactDOM = require("react-dom");


class CompoundPage extends React.Component {

	render() {
		return <Router>
            <React.Fragment>
                <Header />
                <Container fluid className="content">
                    <Switch>
                        <Route path="/compound/:identifier(smiles|inchi|inchikey)/:identifierValue" component={NaturalProductCompoundCard}/>
                        <Route component={NotFound} />
                    </Switch>
                </Container>
            </React.Fragment>
        </Router>
	}
}

ReactDOM.render(
	<CompoundPage />,
	document.getElementById("compound_page_viewport")
);