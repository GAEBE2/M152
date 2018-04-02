import React, {Component} from 'react';
import Video from './startscreen.gif';
import './Scene.css';
import {withRouter} from 'react-router-dom'
import BoxedButton from "../../components/BoxedButton/BoxedButton";

class Scene1 extends Component {
    render() {
        return (
            <div>
                <img className="welcome-image" src={Video}/>
                <div className="overlay">
                    <h1 className="master-title">Willkommen</h1>
                    <BoxedButton className="start-button" onClick={() => this.props.history.push("/option1")} text="Start"/>
                </div>
            </div>
        );
    }
}

export default withRouter(Scene1);