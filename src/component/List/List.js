import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import style from "../List/List.css";
import Details from "../Details/Details";
import ListRouter from "./ListRouter";


class List extends React.Component {
    render() {

        return (
            <div className="coop-block">
                <h2 className="title">合作保险公司</h2>
                <Router>
                    <div>
                        <Route exact path="/ListRouter" component={ListRouter} />
                        <ListRouter />
                    </div>
                </Router>
            </div>
        )
    }
}
export default List;