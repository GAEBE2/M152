import React from 'react';
import PropTypes from "prop-types";

export default class VideoPlayer extends React.Component {
    render() {
        return <video width={this.props.width} height={this.props.height}
                      autoPlay={this.props.autoPlay}
                      onEnded={this.props.onEndedHandler}>
            <source src={this.props.video} type={this.props.type}/>
            <p>Dieser Browser unterstützt kein Video-Format. Bitte wechseln Sie zu Chrome oder aktualisieren Sie Ihren Browser</p>
        </video>;
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