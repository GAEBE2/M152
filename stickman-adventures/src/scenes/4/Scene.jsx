import React, {Component} from "react";
import "./Scene.css";
import Intro from "./4_start.mp4"
import End from "./4_end.gif"
import InfoText from "../../components/InfoText";

export default class Scene1 extends Component {
    myHandler = () => {
        document.getElementById("scene4-intro").style.display = "none";
        document.getElementById("scene4-end").style.display = "block";
    };

    render() {
        return (
            <div>
                <InfoText text="Du, (Name des Spielers), bist mit deiner Ehepartnerin zuhause und siehst ihr beim Kochen zu. Dir werden fortlaufend Interaktionen vorgeschlagen, von welchen du eine auswählen musst. Je nach dem, was für eine Interaktion du wählst, ändert sich die Geschichte und deren Ende."/>
                <video width="550" height="400" autoPlay id="scene4-intro" onEnded={this.myHandler}>
                    <source src={Intro} type="video/mp4"/>
                    <p>Your browser does not support the video tag. Use Chrome!!!!!</p>
                </video>
                <img id="scene4-end" src={End}/>
            </div>
        );
    }
}
