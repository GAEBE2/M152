import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_2_1_Start.mp4";
import {withRouter} from "react-router-dom";
import InfoText from "../../../../components/InfoText/InfoText";
import VideoPlayer from "../../../../components/VideoPlayer/VideoPlayer";

class Scene extends Component {
    render() {
        console.log("1.2.1")

        return <div>
            <InfoText text="Du beschimpfst ihn/sie und sie dich zurück. Ihr geht beide nach draussen."/>
            <VideoPlayer video={Intro}
                         onEndedHandler={() => {
                             window.setTimeout(() => {
                                 this.props.history.push("/scene1111");
                             }, 1000);
                         }}
                         type="video/mp4"
                         autoPlay={true}/>
        </div>
    }
}

export default withRouter(Scene);