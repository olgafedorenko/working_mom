import React from "react";
import {CommentLayout} from "./Comments";
import { browserHistory } from 'react-router'
import {Link} from "react-router"

export class Layout extends React.Component{
    onNavigateHome(){
        browserHistory.push("/home");

    }
    render (){
        return (
            <div>
            <div className="tenthings">
                <div>
                    <h1>10 Things Only Moms in San Francisco Can Say</h1>
                <p>
                    We’re lucky to be raising our families in San Francisco, but some of the things we say tend to strike our non-city dwelling friends and family as, well, a bit odd.
                </p>
                 <img  className="sf" alt="mom" src="../../images/sanfrancisco.jpg" />
                <ol>
                    <li>Hmm, I don’t know if we’ll be able to have the party outside. It’ll be summertime, so it might be too cold.</li>
                    <li> I can’t decide whether to take the kids to the anti-racist story time at the natural parenting store or drag queen storytime at the library.</li>
                    <li> Where is it sunny right now in the city?</li>
                    <li>Yes, there’s a great public school down the street, but I’m not sure if we’ll win the lottery – the public school enrollment lottery, that is.</li>
                    <li> Oh, look, honey! This three bedroom apartment is only $4,000 a month. We should check it out!</li>
                    <li>I had to push the stroller four blocks out of my way to avoid walking up that giant hill. I mean, I still walked up a hill, but at least it wasn’t that bad.</li>
                     <li> What’s the parking situation? Ugh, I wish Uber had car seats.</li>
                    <li>Yes, you need a jacket this morning. The fog is so thick you can’t see Sutro tower.</li>
                     <li>I love living in a place that prides itself on being unique and supporting local businesses, but… yeah, I kind of wish there were more drive-through coffee options around here.</li>
                      <li>Yes, sweetie. I know that man is naked. It’s Bay to Breakers.</li>
                 </ol>
            <p>
                Three cheers to experiencing motherhood the City by the Bay way!
            </p>
            
            </div>
            <div className="commentTenThings">
                 <CommentLayout />
            </div>
            </div>
            <div className="small">
                    
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