import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_Start.mp4";
import End from "./1_1_Ende.gif";
import GeneralizedScene from "../../GeneralizedScene";

export default class Scene extends Component {
    options = [
        {
            text: "Du gibst deinem Ehepartner die Schuld, da er Wasser über die Pfanne geschüttet hat",
            func: () => this.props.history.push("/scene111")
        },
        {
            text: "Du reservierst ein naheliegendes Hotel",
            func: () => this.props.history.push("/scene112")
        }
    ];

    render() {
        console.log("1.1")
        return <GeneralizedScene introVideo={Intro}
                                 endGif={End}
                                 options={this.options}
                                 infoText="Du hilfst beim Kochen, jedoch beginnt sich das Essen nach einiger Zeit in der Pfanne zu entflammen. Dein Ehepartner holt den Gartenschlauch und versucht das Feuer erfolgslos zu löschen. Beide flüchten aus dem Haus, während dieses abbrennt und in sich einstürzt."/>
    }
}
