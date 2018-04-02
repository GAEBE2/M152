import React, {Component} from "react";
import "./Scene.css";
import {withRouter} from 'react-router-dom'

class Scene extends Component {

    render() {
        console.log("option1")
        return (
            <div>
                option1
            </div>
        );
    }
}

export default withRouter(Scene);