import React from "react";
import style from "../Details/Details.css";
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class Details extends React.Component {

    constructor(props) {
        super();
        this.state = {
            details: [],
            id:this.props.match.params.id
        }
        console.log(this.state.id);
    }
    componentDidMount() {
        axios.get(`https://cnodejs.org/api/v1/topic/${this.state.id}`)
            .then((response) => {
                this.setState({
                    details: response.data.data.replies,

                })
                console.log( response.data.data.replies);
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
                                <h2>这就是内容</h2>
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