import React, {Component} from "react";
import "./Scene.css";
import {withRouter} from 'react-router-dom'
import BoxedButton from "../../components/BoxedButton/BoxedButton";
import LocalStorageHandler from "../../js/LocalStorageHandler";

const standardText = "tippe ein...",
    errorTextName = "Du musst einen Namen auswählen, der keine Abstände und 4 bis 13 Buchstaben beinhaltet.",
    errorTextGender = "Du musst ein Geschlecht auswählen.";

class Scene extends Component {
    state = {
        name: standardText
    };

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    isDisabled() {
        return this.state.name === standardText ||
            this.state.name === "" ||
            this.state.name.indexOf(" ") > -1 ||
            this.state.name.length > 12 ||
            this.state.name.length < 4;
    }

    onClick = () => {
        if (this.state.name === standardText) {
            this.setState({name: ""})
        }
    };

    onBlur = () => {
        if (this.state.name === "") {
            this.setState({name: standardText})
        }
    };

    onContinue = () => {
        LocalStorageHandler.setItem("name", this.state.name);
        this.props.history.push("/scene1")
    };

    onGenderClick(gender) {
        LocalStorageHandler.setItem("gender", gender);
        this.setState({gender: gender})
    };

    render() {
        const continueIsDisabled = this.isDisabled();
        return (
            <div>
                <h1 className="title">Wähle deinen Namen</h1>
                <input className="input-name" type="text" name="name" value={this.state.name}
                       onChange={this.onNameChange} onClick={this.onClick} onBlur={this.onBlur}/>
                <div className="gender-buttons">
                    <button className="m-button" onClick={() => this.onGenderClick("m")}></button>
                    <button className="w-button" onClick={() => this.onGenderClick("w")}></button>
                </div>
                <BoxedButton className="continue-button" disabled={continueIsDisabled} onClick={this.onContinue}
                             text="Weiter" small={true}/>

                {continueIsDisabled && <p className="error-text">{errorTextName}</p> ||
                this.state.gender === undefined && <p className="error-text">{errorTextGender}</p>}
            </div>
        );
    }
}

export default withRouter(Scene);