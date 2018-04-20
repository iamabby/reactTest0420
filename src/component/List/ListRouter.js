import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class ListRouter extends React.Component{
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
    render(){
        return(
            <div>
                <ul>
                            {
                                this.state.infos.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink to="/topic/:id">
                                                <div className="list-title">{item.title}</div>
                                                <div className="date">{item.create_at}</div>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
            </div>
        )
    }
}
export default ListRouter;