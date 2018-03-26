import React, {Component} from "react";
import "./Scene.css";
import Intro from "./4_start.mp4"
import End from "./4_end.gif"
import InfoText from "../../components/InfoText/InfoText";
import OptionsChooser from "../../components/OptionsChooser/OptionsChooser";

export default class Scene1 extends Component {
    state = {
        introPlaying: true
    };

    myHandler = () => {
        this.setState({introPlaying: false})
    };

    onOption1Chosen = () => {
        console.log("option1")
    };

    onOption2Chosen = () => {
        console.log("option2")
    };

    options = {
        option1: {
            text: "blabla1",
            func: this.onOption1Chosen
        },
        option2: {
            text: "blabla2",
            func: this.onOption2Chosen
        }
    };

    render() {
        return (
            <div>
                <InfoText
                    text="Du, (Name des Spielers), bist mit deiner Ehepartnerin zuhause und siehst ihr beim Kochen zu. Dir werden fortlaufend Interaktionen vorgeschlagen, von welchen du eine auswählen musst. Je nach dem, was für eine Interaktion du wählst, ändert sich die Geschichte und deren Ende."/>
                {this.state.introPlaying &&
                <video width="550" height="400" autoPlay id="scene4-intro" onEnded={this.myHandler}>
                    <source src={Intro} type="video/mp4"/>
                    <p>Your browser does not support the video tag. Use Chrome!!!!!</p>
                </video>}
                {!this.state.introPlaying &&
                <div>
                    <img src={End}/>
                    <OptionsChooser options={this.options}/>
                </div>}
            </div>
        );
    }
}
