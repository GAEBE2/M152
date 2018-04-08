import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_1_Start.mp4";
import End from "./1_1_1_Ende.gif";
import GeneralizedScene from "../../../GeneralizedScene";
import {withRouter} from "react-router-dom";

class Scene extends Component {
    options = [
        {
            text: "Du gehst den Streit ein",
            func: () => this.props.history.push("/scene1111")
        },
        {
            text: "Du entschuldigst dich",
            func: () => this.props.history.push("/scene1112")
        }
    ];

    render() {
        console.log("1.1.1")
        return <GeneralizedScene introVideo={Intro}
                                 endGif={End}
                                 options={this.options}
                                 infoText="Dein Ehepartner ist zu tiefst enttäuscht und ihr beginnt euch zu schubsen."/>
    }
}

export default withRouter(Scene);