import "bootstrap/scss/bootstrap.scss"
import "../../resources/scss/coconut.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas);

import Header from "../components/Header"
import Index from "../components/Index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CardBrowser from "../components/CardBrowser";
import TableBrowser from "../components/TableBrowser";
import About from "../components/About";
import Container from "react-bootstrap/Container";
import Download from "../components/Download";
import Browser from "../components/Browser";
import NotFound from "../components/NotFound";
import SearchResult from "../components/SearchResult";

const React = require("react");
const ReactDOM = require("react-dom");


class MainPage extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Header />
					<Container fluid className="content">
						<Switch>
							<Route exact path="/" component={Index}/>
							<Route path="/browser*" component={Browser}/>
							<Route path="/search_result*" component={SearchResult}/>
							<Route path="/download" component={Download}/>
							<Route path="/about" component={About}/>
							<Route component={NotFound} />
						</Switch>
					</Container>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(
	<MainPage />,
	document.getElementById("main_page_viewport")
);