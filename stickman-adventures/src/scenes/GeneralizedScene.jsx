import React, {Component} from "react";
import InfoText from "../components/InfoText/InfoText";
import OptionsChooser from "../components/OptionsChooser/OptionsChooser";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import FadeInBox from "../components/FadeInBox/FadeInBox";
import PropTypes from "prop-types";
import BoxedButton from "../components/BoxedButton/BoxedButton";

export default class GeneralizedScene extends Component {
    state = {
        introPlaying: true
    };

    render() {
        return (
            <div>
                {this.props.children}
                <InfoText text={this.props.infoText}/>
                {this.state.introPlaying &&
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
                    <audio key="audio" controls autoPlay loop>
                        <source src="decide_loop.ogg" type="audio/mp3"></source>
                        Dein Browser unterstützt keine Audiowiedergabe
                    </audio>
                ]}
            </div>
        );
    }
}

GeneralizedScene.propTypes = {
    infoText: PropTypes.string,
    introVideo: PropTypes.string.isRequired,
    endGif: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    children: PropTypes.array,
    onEndedHandler: PropTypes.func
};