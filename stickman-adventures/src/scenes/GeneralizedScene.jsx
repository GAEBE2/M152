import React, {Component} from "react";
import InfoText from "../components/InfoText/InfoText";
import OptionsChooser from "../components/OptionsChooser/OptionsChooser";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import FadeInBox from "../components/FadeInBox/FadeInBox";
import PropTypes from "prop-types";

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
                                 this.setState({introPlaying: false})
                             }}
                             type="video/mp4"
                             autoPlay={true}/>}
                {!this.state.introPlaying &&
                [
                    <OptionsChooser key="options-chooser" options={this.props.options}/>,
                    <FadeInBox key="fade-in-box">
                        <img src={this.props.endGif}/>
                    </FadeInBox>
                ]}
            </div>
        );
    }
}

GeneralizedScene.propTypes = {
    infoText: PropTypes.string,
    introVideo: PropTypes.string.isRequired,
    endGif: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    children: PropTypes.array,
};