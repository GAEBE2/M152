import React from "react";
import Homescreen from "../../scenes/homescreen/Scene";
import Option1 from "../../scenes/options1/Scene";
import Scene4 from "../../scenes/1/Scene";
import {HashRouter, Route, Switch} from "react-router-dom";
import Container from "../Container";
import NoSuchLink from "../NoSuchLink";

export default class RouterConfig extends React.Component {
    render() {
        return (
            <Container>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Homescreen}/>
                        <Route exact path="/home" component={Homescreen}/>
                        <Route exact path="/option1" component={Option1}/>
                        <Route exact path="/scene4" component={Scene4}/>
                        <Route path="/" component={NoSuchLink}/>
                        {/* both /roster and /roster/:number begin with /roster */}
                        {/*<Route path="/roster" component={Roster}/>
                             <Route path="/schedule" component={Schedule}/>*/}
                    </Switch>
                </HashRouter>
            </Container>
        )
    }
}