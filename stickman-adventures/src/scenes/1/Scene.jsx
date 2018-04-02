import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_start.mp4"
import End from "./1_end.gif"
import InfoText from "../../components/InfoText/InfoText";
import OptionsChooser from "../../components/OptionsChooser/OptionsChooser";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export default class Scene extends Component {
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
                <VideoPlayer video={Intro} onEndedHandler={this.myHandler} type="video/mp4" autoPlay={true}/>}
                {!this.state.introPlaying &&
                <div>
                    <img src={End}/>
                    <OptionsChooser options={this.options}/>
                </div>}
            </div>
        );
    }
}
