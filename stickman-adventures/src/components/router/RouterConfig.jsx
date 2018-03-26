import React from "react";
import Scene1 from "../../scenes/homescreen/Scene";
import Scene4 from "../../scenes/4/Scene";
import {HashRouter, Route, Switch} from "react-router-dom";
import Container from "../Container";
import NoSuchLink from "../NoSuchLink";

export default class RouterConfig extends React.Component {
    render() {
        return (
            <Container>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Scene1}/>
                        <Route exact path="/scene1" component={Scene1}/>
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