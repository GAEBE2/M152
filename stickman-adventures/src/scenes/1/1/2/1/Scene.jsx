import React, {Component} from "react";
import "./Scene.css";
import Intro from "./1_1_2_1_Start.mp4";
import {withRouter} from "react-router-dom";
import InfoText from "../../../../../components/InfoText/InfoText";
import VideoPlayer from "../../../../../components/VideoPlayer/VideoPlayer";

class Scene extends Component {
    render() {
        //TODO: Add correct video
        console.log("1.1.2.1")

        return <div>
            <InfoText text="Ihr steigt panisch bei der 4. Station aus dem Bus. Da ihr die Aufmerksamkeit der Kontrolleure geweckt habt, rennt ihr davon und entkommt den Kontrolleuren. Ihr läuft in die Stadt. Ihr geht in das zuvor gewählte Hotel und verweilt dort. "/>
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