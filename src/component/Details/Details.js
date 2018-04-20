import React from "react";
import style from "../Details/Details.css";
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            details: [],

        }
    }
    componentDidMount() {
        axios.get("https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312")
            .then((response) => {
                console.log(response.data.data);
                this.setState({
                    details: response.data.data.replies,
                })
            })
            .then((error) => {
                console.log(error);
            })
    }
    render() {

        return (
            <div className="coop-block">
                <ul>
                    {
                        this.state.details.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="list-title">{item.title}</div>
                                    <div className="date">{item.create_at}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Details;