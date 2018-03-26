import React from 'react';

export default class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoPlay: props.autoPlay || true,   // boolean, if true the video should autoplay
            video: props.video,                 // the imported video
            height: props.height || 400,
            width: props.width || 550,
            handlers: props.handler,            // an object with multiple callbacks like onEnded
            format: props.format
        };
    }

    render() {
        return <video width={this.state.width} height={this.state.height}
                      autoPlay={this.state.autoPlay}
                      onEnded={this.state.handlers.onEnded}>
            <source src={this.state.video} type={this.state.format}/>
            <p>Dieser Browser unterstütz kein video-format. Bitte wechseln Sie zu Chrome oder aktualisieren Sie ihren Browser</p>
        </video>;
    }
}