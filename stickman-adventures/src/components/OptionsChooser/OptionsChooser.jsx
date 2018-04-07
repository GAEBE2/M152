import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./OptionsChooser.css"
import BoxedButton from "../BoxedButton/BoxedButton";

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

                        if (func !== undefined && text !== undefined) {
                            return <BoxedButton className="option"
                                                key={key}
                                                onClick={func}
                                                text={(index + 1) + ") " + text}/>
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
    options: PropTypes.arrayOf(
        PropTypes.shape({
            func: PropTypes.func.isRequired,
            text: PropTypes.string.isRequired
        })
    )
};
