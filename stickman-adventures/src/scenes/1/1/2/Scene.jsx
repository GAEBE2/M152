import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_2_Start.gif";
import GeneralizedScene from "../../../GeneralizedScene";
import {withRouter} from "react-router-dom";

class Scene extends Component {
    options = [
        {
            text: "Ihr geht vor der Kontrolle aus dem Bus",
            func: () => this.props.history.push("/scene1121")
        },
        {
            text: "Ihr bleibt im Bus",
            func: () => this.props.history.push("/scene1122")
        }
    ];

    render() {
        //TODO: Add correct video
        console.log("1.1.2")
        return <GeneralizedScene endGif={Intro}
                                 options={this.options}
                                 infoText="Ihr geht zur nächsten Bus-Haltestelle um ins Zentrum der Stadt zu gelangen. Jedoch habt ihr vergessen ein gültiges Billett zu lösen. Ihr müsst bei der 7. Station raus, jedoch wird das Billett an der 4. Station kontrolliert."/>
    }
}

export default withRouter(Scene);