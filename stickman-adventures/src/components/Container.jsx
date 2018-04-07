import React, {Component} from 'react';
import '../css/style.css';

export default class Container extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Stickman adventures</h1>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
