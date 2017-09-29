import React from "react";

//import createHistory from 'history/createBrowserHistory'
import { browserHistory } from 'react-router'
import {Archives} from  "./Archives"
import {Link} from "react-router"
//const history = createHistory()


export class Articles extends React.Component{
    
    onNavigateHome(){
        browserHistory.push("/home");

    }
    
    render (){
        console.log(this.props)
        //const location = history.location
        const {params} = this.props;
        const {id}=params
        //console.log(this.props.location)
        const {query}=this.props.location
        const{date, filter}=query

        const containerStyleP={
            color: "grey",
            marginTop: "2px"
        };

        //const ArchivesGroup=[
          //  "Kim Pratt",
           // "Erin Hooley",
           // "Amber Lont",
            //"Miranda Marquit",
        //].map((title, content, i) => <Archives key={i} title={title} content={content}/>);

        const ArchivesGroup=[
         <Archives  key={1} title={"Kim Pratt"} picture={"../../images/kim.jpg"} content={"Kim Pratt lives in California and is mother to four boys. She had all four in five years, which left her without enough hands to fit all their needs. She solved some of this problem by creating a bib with a snap leash that attaches to any pacifier or teething toy. From that her company Freckle Baby was born. She started with this one product and in the first year was able to expand her brand. This may not have solved all her problems associated with raising boys but she did eliminate one. Her best advice is; 'Be open to seizing opportunities and reaching out to people you think would never notice you. Sometimes I`m blown away by the help I get. In the end it`s all about the hustle'"} />,
         <Archives  key={2} title={"Erin Hooley"}  picture={"../../images/erin.jpg"} content={"Erin Hooley`s business started as a crafting hobby in her kitchen to help pay off some of their student loan debt. While she started with her own Etsy.com shop, she eventually wanted to be separate and this is when she introduced a new Bailey’s Blossoms to the world. Erin took the business from the $10,000 they made in 2010, to selling $600,000 worth of product in 2014. While also raising her six kids, Erin has created a business that provides other mothers the opportunity to be a working mom as well. She allows her employees to bring their kids to work and play in their open play area. While this may be a bit unorthodox, Erin states 'I am committed to the idea that you really CAN have the best of both worlds as a working mom, kids in tow! I truly feel I’m living the dream as a stay-at-home working mom, and hope we can help inspire others to do the same.'"} />,
        <Archives  key={3} title={"Amber Lont"}  picture={"../../images/amber.jpg"} content={"Amber Lont is a mother of two who runs two businesses, Organized (re)Design, a professional organizing company, and Love at Home Designs, a furniture refinishing business. She started her entrepreneurial journey as a young college student by owning and running a Christian Housing property. That required her find cheap furniture, which led to upcycling thrift store furniture and, eventually, her own business Love at Home Designs.She realized she is skilled at organizing by meeting the challenge of raising a family and running both of these businesses. After working for a large professional  organizing company, she yearned to be her own boss again. In January she made the leap to start Organized (re)Design. She says her life of juggling kids and multiple businesses is chaotic and creative but she loves it. Her biggest advice is to find other mom-preneurs in your area to be friends with. This helps create a camaraderie with other moms who are also trying to stay afloat personally and professionally in similar ways as yourself."} />,
        <Archives  key={4} title={"Miranda Marquit"}  picture={"../../images/miranda.jpg"} content={"Miranda Marquit has been freelancing online for 10 years. She wanted a way to use her journalism degree while working from home. Her freelance business has allowed her a great deal of flexibility and freedom. Since she has the benefit of location independence, she loves the freedom to go wherever she feels is best for her and her 12 year old son.Her best piece of advice is to take time out for yourself.'This includes exercise, good sleep (when you can get it) and time to relax. Even if you only take 30 minutes a day for yourself, it can help. You’ll be happier and less stressed.'" } />,
        ];
        //const stories=TextGroup[Math.round( Math.random() * (TextGroup.length-1) )];
        //console.log(key{i})
         

        return (
            <div>
            <div className="article">
                <div>
                <h1> Working Mom. How combine everything and find time for yourself?</h1>
                <p>
                    In the past decade, more and more women have been stepping up and joining the female entrepreneur force. Many of which also carry the title of mom, which has created the slang word mompreneur. This describes women who juggle running their own business along with the demands of being a full-time parent.
                     Somehow they manage to do so with amazing devotion, hard sacrifices and pure determination.
                     
                    <br/><br/>
                      With the Internet allowing entrepreneurs to sell products and services out of their homes, rather than relying on foot traffic to brick-and-mortar business, more and more women are able to fulfill their dreams of working from home.
                       This can make it possible to get work done while also attending to the kids. 
                    
                     <br/><br/>
                    Deciding to make the jump to juggling multiple titles can be a scary one. But just like so many mompreneurs have proven, it can be done with amazing finesse. 
                    These eight average but successful women, share with you their stories, best advice and secrets to getting it all done, from their own experiences as a mompreneur. </p>
                
                <div className="article">{ArchivesGroup} </div>
                
                

                <button onClick={this.onNavigateHome} className="btn vtn-primary">Go Home</button>
                 </div>
                 </div>
                 <div className="small">
                    <div className="box">
                        
                        <Link to={"/layout"} className="link">10 Things Only Moms in San Francisco Can Say</Link>
                        <Link to={"/layout"} ><img className="workingMom" alt="mom" src="../../images/sanfrancisco.jpg" /> </Link>
                        
                    </div>
                    
                    <div className="box">
                        <Link to={"/truthMom"} className="link" >The Truth About Being A Working Mom </Link>
                        <Link to={"/truthMom"} ><img className="workingMom" alt="mom" src="../../images/WorkGroup.jpg" /> </Link>                      
                    </div>
                    
                
            
            </div>
            </div>
        )
    }
}

                //<h4 > data: {date}, filter: {filter} </h4>