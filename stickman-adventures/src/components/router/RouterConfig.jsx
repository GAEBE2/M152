import React from "react";
import Homescreen from "../../scenes/homescreen/Scene";
import Option1 from "../../scenes/options1/Scene";
import Option2 from "../../scenes/options2/Scene";
import Scene1 from "../../scenes/1/Scene";
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
                        <Route exact path="/option2" component={Option2}/>
                        <Route exact path="/scene1" component={Scene1}/>
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