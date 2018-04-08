import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_1_2_Start.mp4";
import {withRouter} from "react-router-dom";
import InfoText from "../../../../../components/InfoText/InfoText";
import VideoPlayer from "../../../../../components/VideoPlayer/VideoPlayer";

class Scene extends Component {
    render() {
        console.log("1.1.1.2")

        return <div>
            <InfoText text="Nach einer kurzen Denkpause rennst du ihm/ihr hinterher und entschuldigst dich für das Gesagte. Dein Partner akzeptiert deine Entschuldigung. Ihr holt Hilfe bei der Polizei, werdet dort aufgehoben und eine Zwischenlösung wird organisiert."/>
            <VideoPlayer video={Intro}
                         onEndedHandler={() => {
                             window.setTimeout(() => {
                                 this.props.history.push("/end");
                             }, 1000);
                         }}
                         type="video/mp4"
                         autoPlay={true}/>
        </div>
    }
}

export default withRouter(Scene);