import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_1_Start.mp4";
import End from "./1_1_1_Ende.gif";
import GeneralizedScene from "../../../GeneralizedScene";
import {withRouter} from "react-router-dom";
import LocalStorageHandler from "../../../../js/LocalStorageHandler";

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

    componentWillMount() {
        if(LocalStorageHandler.getGender() === "m") {
            this.text = "Deine Ehepartnerin ist zu tiefst enttäuscht und ihr beginnt euch zu schubsen.";
        } else {
            this.text = "Dein Ehepartner ist zu tiefst enttäuscht und ihr beginnt euch zu schubsen.";
        }
    }

    render() {
        console.log("1.1.1")
        return <GeneralizedScene introVideo={Intro}
                                 endGif={End}
                                 options={this.options}
                                 infoText={this.text}/>
    }
}

export default withRouter(Scene);