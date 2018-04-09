import React, {Component} from "react";
import InfoText from "../components/InfoText/InfoText";
import OptionsChooser from "../components/OptionsChooser/OptionsChooser";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import FadeInBox from "../components/FadeInBox/FadeInBox";
import PropTypes from "prop-types";
import BoxedButton from "../components/BoxedButton/BoxedButton";
import Audio from "./decide_loop.wav";

export default class GeneralizedScene extends Component {
    state = {
        introPlaying: this.props.introVideo !== undefined
    };

    componentWillUnmount() {
        let audio;
        if((audio = document.getElementById("audio")) !== null) {
            audio.pause();
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
                <InfoText text={this.props.infoText}/>
                {this.state.introPlaying && this.props.introVideo !== undefined &&
                <VideoPlayer video={this.props.introVideo}
                             onEndedHandler={() => {
                                 this.setState({introPlaying: false});
                                 if(this.props.onEndedHandler !== undefined) {
                                     this.props.onEndedHandler();
                                 }
                             }}
                             type="video/mp4"
                             autoPlay={true}/>}
                {!this.state.introPlaying &&
                [
                    <OptionsChooser key="options-chooser" options={this.props.options}/>,
                    <FadeInBox key="fade-in-box">
                        <img src={this.props.endGif}/>
                        <BoxedButton text="Wiederholen" onClick={() => this.setState({introPlaying: true})} small={true}/>
                    </FadeInBox>,
                    <audio id="audio" key="audio" autoPlay loop>
                        <source src={Audio} type="audio/mp3"/>
                        Dein Browser unterstützt keine Audiowiedergabe
                    </audio>
                ]}
            </div>
        );
    }
}

GeneralizedScene.propTypes = {
    infoText: PropTypes.string,
    introVideo: PropTypes.string,
    introGif: PropTypes.string,
    endGif: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    children: PropTypes.array,
    onEndedHandler: PropTypes.func
};