import React, {Component} from "react";
import "./Scene.css";
import {withRouter} from "react-router-dom";
import InfoText from "../../../../../components/InfoText/InfoText";
import LocalStorageHandler from "../../../../../js/LocalStorageHandler";

class Scene extends Component {
    componentWillMount() {
        if (LocalStorageHandler.getGender() === "m") {
            this.text = "Nach einer kurzen Denkpause rennst du ihr hinterher und entschuldigst dich für die Schuldzuweisung. Deine Partnerin akzeptiert die Entschuldigung. Ihr holt Hilfe bei der Polizei, werdet dort aufgehoben und eine Zwischenlösung wird organisiert.";
        } else {
            this.text = "Nach einer kurzen Denkpause rennst du ihm hinterher und entschuldigst dich für die Schuldzuweisung. Dein Partner akzeptiert die Entschuldigung. Ihr holt Hilfe bei der Polizei, werdet dort aufgehoben und eine Zwischenlösung wird organisiert.";
        }
    }

    render() {
        console.log("1.1.1.2")
        return <div>
            <InfoText text={this.text}/>
            {/*<VideoPlayer video={Intro}
                         onEndedHandler={() => {
                             window.setTimeout(() => {
                                 this.props.history.push("/end");
                             }, 1000);
                         }}
                         type="video/mp4"
                         autoPlay={true}/>*/}
        </div>
    }
}

export default withRouter(Scene);