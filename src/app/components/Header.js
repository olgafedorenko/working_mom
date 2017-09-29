import React from "react";
import {Link} from "react-router"

export class Header extends React.Component {
    constructor(){
        super()
    }
    render () {
    const {location} = this.props
    const {history}=this.props;
    //history.isActive("");

    //const homeClass = location.pathname.match(/^\/home/)? "active":"";
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li ><Link to={"home"}>Home</Link></li>
                        <li><Link to={"/articles"} activeClassName={"active"}>Working Mom</Link></li>
                        <li><Link to={"/share-your-story"} activeClassName={"active"}>Share Your Story</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};
}