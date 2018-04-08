import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_Start.mp4";
import End from "./1_1_Ende.gif";
import GeneralizedScene from "../../GeneralizedScene";
import {withRouter} from "react-router-dom";
import LocalStorageHandler from "../../../js/LocalStorageHandler";

class Scene extends Component {
    options = [
        {
            text: LocalStorageHandler.getGender() === "m" ? "Du gibst deiner Ehepartnerin die Schuld, da sie Wasser über die Pfanne geschüttet hat" : "Du gibst deinem Ehepartner die Schuld, da er Wasser über die Pfanne geschüttet hat",
            func: () => this.props.history.push("/scene111")
        },
        {
            text: "Du reservierst ein naheliegendes Hotel",
            func: () => this.props.history.push("/scene112")
        }
    ];

    componentWillMount() {
        if(LocalStorageHandler.getGender() === "m") {
            this.text = "Du, " + LocalStorageHandler.getName() + ", hilfst beim Kochen, jedoch beginnt sich das Essen nach einiger Zeit in der Pfanne zu entflammen. Deine Ehepartnerin holt den Gartenschlauch und versucht das Feuer erfolglos zu löschen. Beide flüchten aus dem Haus, während dieses abbrennt und in sich einstürzt.";
        } else {
            this.text = "Du, " + LocalStorageHandler.getName() + ", hilfst beim Kochen, jedoch beginnt sich das Essen nach einiger Zeit in der Pfanne zu entflammen. Dein Ehepartner holt den Gartenschlauch und versucht das Feuer erfolglos zu löschen. Beide flüchten aus dem Haus, während dieses abbrennt und in sich einstürzt.";
        }
    }

    render() {
        console.log("1.1")
        return <GeneralizedScene introVideo={Intro}
                                 endGif={End}
                                 options={this.options}
                                 infoText={this.text}/>
    }
}

export default withRouter(Scene);