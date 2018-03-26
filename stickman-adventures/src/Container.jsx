import React, {Component} from 'react';
import './css/style.css';
import Scene1 from "./scenes/1/Scene1";

export default class Container extends Component {
    render() {
        return (
            <div className="container">
                <Scene1/>
            </div>
        );
    }
}
