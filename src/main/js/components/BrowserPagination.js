import Pagination from "react-bootstrap/Pagination";

const React = require("react");


export default class BrowserPagination extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Item>{this.props.stats.totalPageCount}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        );
    }
}