import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./InfoText.css";

export default class InfoText extends Component {
    render() {
        return (
            <div className="info-text">
                {this.props.text}
            </div>
        );
    }
}

InfoText.propTypes = {
    text: PropTypes.string.isRequired
};