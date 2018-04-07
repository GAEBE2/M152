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

        const width = document.getElementById(this.id).offsetWidth + (this.props.small ? 10 : 40),
            height = document.getElementById(this.id).offsetHeight;
        console.log(width, height, this.id)
        document.getElementById(this.id).style.backgroundSize = width + "px " + height + "px";
        document.getElementById(this.id).style.backgroundPosition = -(this.props.small ? 5 : 20) + "px";
        this.forceUpdate()
    }

    render() {
        return (
            <button id={this.id} className={"boxed-button" + " " + (this.props.className || "")}
                    onClick={this.props.onClick} disabled={this.props.disabled}>
                {this.props.text}
            </button>
        );
    }
}

BoxedButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    small: PropTypes.bool,
    disabled: PropTypes.bool
};