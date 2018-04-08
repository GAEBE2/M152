import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_2_2_Start.mp4";
import {withRouter} from "react-router-dom";
import InfoText from "../../../../../components/InfoText/InfoText";
import VideoPlayer from "../../../../../components/VideoPlayer/VideoPlayer";

class Scene extends Component {
    render() {
        //TODO: Add correct video
        console.log("1.1.2.2")

        return <div>
            <InfoText text="Ihr werdet von den Kontrolleuren erwischt, jedoch haben die Kontrolleure Verständnis mit euch, jedoch müsst ihr hier aussteigen. Ihr geht zu Fuss zum Hotel und verweilt dort. "/>
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