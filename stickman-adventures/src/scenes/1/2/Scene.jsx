import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_2_Start.mp4";
import End from "./1_2_Ende.gif";
import GeneralizedScene from "../../GeneralizedScene";
import {withRouter} from "react-router-dom";

class Scene extends Component {
    options = [
        {
            text: "Du beschimpfst dein Ehepartner",
            func: () => this.props.history.push("/scene121")
        },
        {
            text: "Du machst nichts",
            func: () => this.props.history.push("/scene122")
        }
    ];

    render() {
        console.log("1.1.1")
        return <GeneralizedScene introVideo={Intro}
                                 endGif={End}
                                 options={this.options}
                                 infoText="Du fragst wenn das Essen fertig ist. Jedoch bekommst du statt einer Antwort einen unfreundlichen Blick zugeworfen. Du begibst dich ins Wohnzimmer und schaust fern. Kurze Zeit später kommt eine Pfanne geflogen, die dich am Kopf erwischt"/>
    }
}

export default withRouter(Scene);