import React, {Component} from 'react';

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Video from './startscreen.gif';
import './Scene.css';

export default class Scene1 extends Component {

    handler = {
        onEnded: () => {
            console.log('ENDED BRO');
        }
    };

    render() {
        return (
            <div>
                <VideoPlayer video={Video} handler={this.handler} format="video/gif"/>
            </div>
        );
    }
}
