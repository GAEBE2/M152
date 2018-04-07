import React from "react";
import Homescreen from "../../scenes/homescreen/Scene";
import Option1 from "../../scenes/options/Scene";
import Scene1 from "../../scenes/1/Scene";
import Scene11 from "../../scenes/1/1/Scene";
import Scene111 from "../../scenes/1/1/1/Scene";
import Scene1111 from "../../scenes/1/1/1/1/Scene";
import Scene1112 from "../../scenes/1/1/1/2/Scene";
import Scene112 from "../../scenes/1/1/2/Scene";
import Scene1121 from "../../scenes/1/1/2/1/Scene";
import Scene1122 from "../../scenes/1/1/2/2/Scene";
import Scene12 from "../../scenes/1/2/Scene";
import Scene121 from "../../scenes/1/2/1/Scene";
import Scene122 from "../../scenes/1/2/2/Scene";
import Scene1221 from "../../scenes/1/2/2/1/Scene";
import Scene1222 from "../../scenes/1/2/2/2/Scene";
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
                        <Route exact path="/options" component={Option1}/>
                        <Route exact path="/scene1" component={Scene1}/>
                        <Route exact path="/scene11" component={Scene11}/>
                        <Route exact path="/scene111" component={Scene111}/>
                        <Route exact path="/scene1111" component={Scene1111}/>
                        <Route exact path="/scene1112" component={Scene1112}/>
                        <Route exact path="/scene112" component={Scene112}/>
                        <Route exact path="/scene1121" component={Scene1121}/>
                        <Route exact path="/scene1122" component={Scene1122}/>
                        <Route exact path="/scene12" component={Scene12}/>
                        <Route exact path="/scene121" component={Scene121}/>
                        <Route exact path="/scene122" component={Scene122}/>
                        <Route exact path="/scene1221" component={Scene1221}/>
                        <Route exact path="/scene1222" component={Scene1222}/>
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