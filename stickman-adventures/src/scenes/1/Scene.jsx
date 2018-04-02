import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_start.mp4"
import End from "./1_end.gif"
import {withRouter} from "react-router-dom";
import GeneralizedScene from "../GeneralizedScene";

class Scene extends Component {
    options = {
        option1: {
            text: "Du hilfst mit kochen",
            func: () => this.props.history.push("/scene11")
        },
        option2: {
            text: "Du fragst, wenn das Essen fertig ist und gehst in das Wohnzimmer",
            func: () => this.props.history.push("/scene12")
        }
    };

    render() {
        return <GeneralizedScene introVideo={Intro}
                                 endGif={End}
                                 options={this.options}
                                 infoText={"Du, (Name des Spielers), bist mit deiner Ehepartnerin zuhause und siehst ihr beim Kochen zu. Dir werden fortlaufend Interaktionen vorgeschlagen, von welchen du eine auswählen musst. Je nach dem, was für eine Interaktion du wählst, ändert sich die Geschichte und deren Ende."}/>
    }
}

export default withRouter(Scene);