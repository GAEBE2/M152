import React, {Component} from "react";
import "./BoxedButton.css";
import PropTypes from "prop-types";

export default class BoxedButton extends Component {
    componentDidMount() {
        const width = document.getElementById("boxed-button").offsetWidth,
            height = document.getElementById("boxed-button").offsetHeight;
        document.getElementById("boxed-button").style.backgroundSize = width + "px " + height + "px";
        this.forceUpdate()
    }

    render() {
        return (
            <button id="boxed-button" className={this.props.className} onClick={this.props.onClick}>
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