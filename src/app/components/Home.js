import React from "react";
import {Link} from "react-router"

export class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="story">
                    <div className="box">
                        
                        <Link to={"/layout"} className="link">10 Things Only Moms in San Francisco Can Say</Link>
                        <Link to={"/layout"} ><img className="workingMom" alt="mom" src="../../images/sanfrancisco.jpg" /> </Link>
                        
                    </div>
                    
                    <div className="box">
                        <Link to={"/truthMom"} className="link" >The Truth About Being A Working Mom </Link>
                        <Link to={"/truthMom"} ><img className="workingMom" alt="mom" src="../../images/WorkGroup.jpg" /> </Link>                      
                    </div>
                    <div className="box">
                        <Link to={"/articles"} className="link" >How combine everything and find time for yourself?  </Link>
                        <Link to={"/articles"} ><img className="workingMom" alt="mom" src="../../images/workingMom.png" /> </Link>                      
                    </div>
                
                    </div>
            </div>
        )
    }
}




/*
export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
        console.log("Constructor")
    }

    componentWillMount(){
        console.log("Component will mount")
    }
    componentDidMount(){
        console.log("Component did mount")

    }
    componentWillReceiveProps(nextProps){
        console.log("Component will receive props")
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("Shoul Component update", nextProps, nextState)
        //if(nextState.status===1){return false}
        return true
    }
    componentWillUpdate(nextProps,nextState){
        console.log("Component will update", nextProps, nextState)
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Component did update", prevProps, prevState)
    }
    componentWillUnmount(){
        console.log("Component will unmount")
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                       onChange={(event) => this.onHandleChange(event)} />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};*/