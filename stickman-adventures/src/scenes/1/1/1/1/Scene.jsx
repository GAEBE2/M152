import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_1_1_Start.mp4";
import {withRouter} from "react-router-dom";
import InfoText from "../../../../../components/InfoText/InfoText";
import VideoPlayer from "../../../../../components/VideoPlayer/VideoPlayer";

class Scene extends Component {
    render() {
        console.log("1.1.1.1")

        return <div>
            <InfoText text="Du gehst den Streit ein und es gibt einen Kampf (Spiel). Sobald das Spiel zu Ende ist, wird der Gewinner gekürt."/>
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