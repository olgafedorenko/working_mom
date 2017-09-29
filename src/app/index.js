
import React from "react";
import {render} from "react-dom";
import {  Router,  IndexRoute,  Route, browserHistory} from "react-router"
//import createHistory from 'history/createBrowserHistory'

//const history = createHistory()


import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {Layout} from "./components/Layout";
import {Articles} from "./components/Articles"
import {TruthMom} from "./components/TruthMom";
import {ShareYourStory} from "./components/ShareYourStory"


class App extends React.Component{
    render(){
        
        return(
            <Router history={ browserHistory }>
                <Route path="/" component={Root}>
                <IndexRoute component={Home} />>
                    <Route path="/articles(/:id)" component ={Articles} /> 
                    <Route path="/home" component ={Home} />
                    <Route path="/layout" component ={Layout} />
                    <Route path="/truthMom" component ={TruthMom} />
                    <Route path="/share-your-story" component ={ShareYourStory} />
                    </Route>
                
                
            </Router>
        )
    }
}
render(<App/>, window.document.getElementById("app"));

/*
class App extends React.Component {
    constructor() {
        super();
        this.state = {
          homeLink: "Home",
          homeMounted:true

        };
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }
    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {
        let homeCmp=""
        if(this.state.homeMounted){
            homeCmp=(
            <Home
            name={"Max"}
            initialAge={27}
            greet={this.onGreet}
            changeLink={this.onChangeLinkName.bind(this)}
            initialLinkName={this.state.homeLink}
        />
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                      {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                      <button  onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}
*/