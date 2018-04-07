import React, {Component} from "react";
import "./Scene.css";
import {withRouter} from 'react-router-dom'
import BoxedButton from "../../components/BoxedButton/BoxedButton";

class Scene extends Component {

    render() {
        console.log("option1")
        return (
            <div>
                option2
                <BoxedButton className="continue-button" onClick={() => this.props.history.push("/scene1")} text="Weiter" small={true}/>
            </div>
        );
    }
}

export default withRouter(Scene);