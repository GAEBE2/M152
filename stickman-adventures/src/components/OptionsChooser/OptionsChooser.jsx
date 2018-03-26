import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./OptionsChooser.css"

export default class OptionsChooser extends Component {

    render() {
        return (
            <div className="options-chooser">
                <h2>Optionen</h2>
                <p>Wähle eine Option aus</p>
                {
                    Object.keys(this.props.options).map((key, index) => {
                        const func = this.props.options[key].func,
                            text = this.props.options[key].text;

                        if (func !== undefined && text !== undefined
                            && typeof(func) === "function" && typeof(text) === "string") {
                            return <button className="option"
                                           key={key}
                                           onClick={func}>{(index + 1) + ") " + text}</button>
                        } else {
                            console.error("Wrong proptypes for OptionsChooser")
                        }
                    })
                }
            </div>
        );
    }
}

OptionsChooser.propTypes = {
    options: PropTypes.object.isRequired
};
