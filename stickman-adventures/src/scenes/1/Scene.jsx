import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_start.mp4"
import End from "./1_end.gif"
import InfoText from "../../components/InfoText/InfoText";
import OptionsChooser from "../../components/OptionsChooser/OptionsChooser";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import FadeInBox from "../../components/FadeInBox/FadeInBox";
import {withRouter} from "react-router-dom";

class Scene extends Component {
    state = {
        introPlaying: true
    };

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
        return (
            <div>
                <InfoText
                    text="Du, (Name des Spielers), bist mit deiner Ehepartnerin zuhause und siehst ihr beim Kochen zu. Dir werden fortlaufend Interaktionen vorgeschlagen, von welchen du eine auswählen musst. Je nach dem, was für eine Interaktion du wählst, ändert sich die Geschichte und deren Ende."/>
                {this.state.introPlaying &&
                <VideoPlayer video={Intro}
                             onEndedHandler={() => {this.setState({introPlaying: false})}}
                             type="video/mp4"
                             autoPlay={true}/>}
                {!this.state.introPlaying &&
                <FadeInBox>
                    <img src={End}/>
                    <OptionsChooser options={this.options}/>
                </FadeInBox>}
            </div>
        );
    }
}

export default withRouter(Scene);