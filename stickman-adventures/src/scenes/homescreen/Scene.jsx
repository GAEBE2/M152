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
                <img src={Video}/>
                <div className="overlay"/>
                <h1 className="master-title">Willkommen</h1>
                <button className="start-button"></button>
            </div>
        );
    }
}
