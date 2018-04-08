import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_2_2_Start.mp4";
import {withRouter} from "react-router-dom";
import InfoText from "../../../../components/InfoText/InfoText";
import VideoPlayer from "../../../../components/VideoPlayer/VideoPlayer";

class Scene extends Component {
    render() {
        console.log("1.2.1")

        return <div>
            <InfoText text="Du holst einen Gartenschlauch und zielst auf deinen Partner. Dieser wirkt schockiert und duckt sich. Als du ihn anschalten willst, kommt aber kein Wasser raus. Kurze Zeit später kommt ein Schöpflöffel geflogen und du fällst in Ohnmacht."/>
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