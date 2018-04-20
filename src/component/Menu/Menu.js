import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import style from "./Menu.css";

class Menu extends React.Component {
    render() {
        return (
            <div className="">
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <div className="tab">
                            <ul >
                                <li>
                                    <NavLink exact to="/" activeClassName="selected">
                                        <div className="home-pic"></div>
                                        首页
                                    </NavLink >
                                </li>
                                <li>
                                    <NavLink to="/about" activeClassName="selected">
                                        <div className="about-pic"></div>
                                        我的
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Menu;