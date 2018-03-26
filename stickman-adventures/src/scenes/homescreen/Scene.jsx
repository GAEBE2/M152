import React, {Component} from 'react';
import './Scene.css';
import Container from "../../components/Container";

export default class Scene1 extends Component {
    render() {
        return (
            <Container>
                <h1 className="master-title">Welcome</h1>
                <button className="start-button">Start</button>
            </Container>
        );
    }
}
