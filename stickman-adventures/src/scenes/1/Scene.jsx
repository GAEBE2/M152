import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_start.mp4"
import End from "./1_Ende.gif"
import {withRouter} from "react-router-dom";
import GeneralizedScene from "../GeneralizedScene";
import LocalStorageHandler from "../../js/LocalStorageHandler";

class Scene extends Component {
    options = [
        {
            text: "Du hilfst beim Kochen",
            func: () => this.props.history.push("/scene11")
        },
        {
            text: "Du fragst, wenn das Essen fertig ist und gehst in das Wohnzimmer",
            func: () => this.props.history.push("/scene12")
        }
    ];

    componentWillMount() {
        if(LocalStorageHandler.getGender() === "m") {
            this.text = "Du, " + LocalStorageHandler.getName() + ", bist mit deiner Ehepartnerin zuhause und siehst ihr beim Kochen zu. Auf der linken Seite werden dir fortlaufend Interaktionen vorgeschlagen, von welchen du eine auswählen musst. Je nach dem, was für eine Interaktion du wählst, ändert sich die Geschichte und deren Ende.";
        } else {
            this.text = "Du, " + LocalStorageHandler.getName() + ", bist mit deinem Ehepartner zuhause und siehst ihm beim Kochen zu. Auf der linken Seite werden dir fortlaufend Interaktionen vorgeschlagen, von welchen du eine auswählen musst. Je nach dem, was für eine Interaktion du wählst, ändert sich die Geschichte und deren Ende.";
        }
    }

    render() {
        return <GeneralizedScene introVideo={Intro}
                                 endGif={End}
                                 options={this.options}
                                 infoText={this.text}/>
    }
}

export default withRouter(Scene);