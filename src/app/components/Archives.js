import React from "react";



export class Archives extends React.Component{
    
    render (){
        const {picture}=this.props
        const {title}=this.props
        const {content}=this.props
        const containerStyleP={
            color: "grey",
            marginTop: "2px" ,
            lineHeight: "180%"
        };
        const containerStyleH3={
            color: "grey",
            marginTop: "2px",
            fontWeight: "bold"
        };


        return (
            <div>
                
                <h3 style={containerStyleH3}>{title}</h3>
                <img className="workingMomArticles" src={picture} />
                <p style={containerStyleP}>{content}</p>
                
            </div>
        )
    }
}