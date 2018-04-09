import React, {Component} from 'react';
import './Scene.css';
import {withRouter} from 'react-router-dom'

class Scene1 extends Component {
    render() {
        return <h1 className="master-title-2">Ende</h1>
    }
}

export default withRouter(Scene1);