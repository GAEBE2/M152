import React, {Component} from "react";
import "./FadeInBox.css";
import PropTypes from "prop-types";

export default class FadeInBox extends Component {
    render() {
        return (
            <div className={"fade-in-box " + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

FadeInBox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    className: PropTypes.string
};