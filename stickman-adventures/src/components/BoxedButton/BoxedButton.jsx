import React, {Component} from "react";
import "./BoxedButton.css";
import PropTypes from "prop-types";

function makeid() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return "boxed-button-" + text;
}

export default class BoxedButton extends Component {
    id = makeid();

    componentDidMount() {
        const width = document.getElementById(this.id).offsetWidth,
            height = document.getElementById(this.id).offsetHeight;
        console.log(width, height, this.id)
        document.getElementById(this.id).style.backgroundSize = width + "px " + height + "px";
        this.forceUpdate()
    }

    render() {
        return (
            <button id={this.id} className={"boxed-button" + " " + this.props.className} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}

BoxedButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};