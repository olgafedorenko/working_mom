import React from "react";
import {Header} from "./Header"

export class Root extends React.Component {
render(){
    const containerStyle={
        color: "grey"
    };
return (
    <div className="container" style={containerStyle}> 
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <Header />
            </div>
        </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {this.props.children}
            </div>
        </div>
    </div>
       
);
}
}
