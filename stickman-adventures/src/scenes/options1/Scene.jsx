import React, {Component} from "react";
import "./Scene.css";
import {withRouter} from 'react-router-dom'
import BoxedButton from "../../components/BoxedButton/BoxedButton";

const standardText = "tippe ein...";

class Scene extends Component {
    state = {
        name: standardText
    };

    onNameChange = (event) => {
        this.setState({name : event.target.value})
    };

    isDisabled() {
        return this.state.name === standardText || this.state.name === "" || this.state.name.indexOf(" ") > -1 || this.state.name.length > 12;
    }

    onClick = () => {
        if(this.state.name === standardText) {
            this.setState({name: ""})
        }
    };

    onBlur = () => {
        if(this.state.name === "") {
            this.setState({name: standardText})
        }
    };

    onContinue = () => {
        localStorage.setItem("name", this.state.name);
        this.props.history.push("/option2")
    };

    render() {
        return (
            <div>
                <h1 className="title">Wähle deinen Namen</h1>
                <input className="input-name" type="text" name="name" value={this.state.name} onChange={this.onNameChange} onClick={this.onClick} onBlur={this.onBlur}/>
                <BoxedButton className="continue-button" disabled={this.isDisabled()} onClick={this.onContinue} text="Weiter" small={true}/>
            </div>
        );
    }
}

export default withRouter(Scene);