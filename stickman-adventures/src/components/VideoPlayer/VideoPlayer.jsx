import React from 'react';
import PropTypes from "prop-types";
import BoxedButton from "../BoxedButton/BoxedButton";
import "./VideoPlayer.css";

export default class VideoPlayer extends React.Component {
    state = {
        paused: false
    };

    onPlayOrPause = () => {
        if (this.state.paused) {
            document.getElementById("video-scene").play();
        } else {
            document.getElementById("video-scene").pause()
        }
        this.setState({paused: !this.state.paused});
    };

    render() {
        return <div>
            <video width={this.props.width} height={this.props.height}
                   autoPlay={this.props.autoPlay}
                   onEnded={this.props.onEndedHandler}
                   id="video-scene">
                <source src={this.props.video} type={this.props.type}/>
                <p>Dieser Browser unterstützt kein Video-Format. Bitte wechseln Sie zu Chrome oder aktualisieren Sie
                    Ihren Browser</p>
            </video>
            <div className="interaction-section">
                <BoxedButton text={this.state.paused ? "Abspielen" : "Pausieren"} onClick={this.onPlayOrPause}
                             small={true}/>
                <BoxedButton text="Überspringen"
                             onClick={() => document.getElementById("video-scene").currentTime = 99999} small={true}/>
            </div>
        </div>;
    }
}

VideoPlayer.propTypes = {
    autoPlay: PropTypes.bool,
    video: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    onEndedHandler: PropTypes.func,
    type: PropTypes.string,
};

VideoPlayer.defaultProps = {
    autoPlay: false,
    height: 400,
    width: 550,
};