import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import style from "../List/List.css";
import Details from "../Details/Details";
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            infos: [],
        }
    }
    componentDidMount() {
        axios.get("https://cnodejs.org/api/v1/topics")
            .then((response) => {
                console.log(response.data.data);
                this.setState({
                    infos: response.data.data,
    
                })
            })
            .then((error) => {
                console.log(error);
            })
    }
    render() {

        return (
            <div className="coop-block">
                <h2 className="title">合作保险公司</h2>
                <Router>
                    <div>
                        <ul>
                            
                            {
                                this.state.infos.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink to={"/Details/"+item.id}>
                                                <div className="list-title">{item.title}</div>
                                                <div className="date">{item.create_at}</div>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Router>
            </div>
        )
    }
}
export default List;