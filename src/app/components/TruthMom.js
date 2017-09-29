import React from "react";
import {CommentLayout} from "./Comments";
import { browserHistory } from 'react-router'
import {Link} from "react-router"

export class TruthMom extends React.Component{
    onNavigateHome(){
        browserHistory.push("/home");

    }
    render (){
        return (
            <div>

           
            <div className="article">
                <div>
                   <div>
                       
                <img className="WorkGroup" alt="workgroup" src="../../images/WorkGroup.jpg" />
                <div className="smoosh-background"></div>
                    
                    </div>
                    <div className="sand-background">
                    <h1>The Truth About Being A Working Mom</h1>
                    <p>
                        WHETHER YOU WORK FULL-TIME BECAUSE YOU LOVE WHAT YOU DO OR BECAUSE YOU CAN’T AFFORD NOT TO, 
                        ONE THING’S FOR SURE: ONCE YOU’VE BECOME A WORKING MOM, YOUR WORK LIFE WILL NEVER BE THE SAME.
                        </p>
                    </div>
                <p>
                Full-time working moms go through a whole gamut of emotions—crying at your desk because you think baby loves the nanny more, dropping off a screaming toddler at day care and (after feeling horrible for a few minutes) running out the door and throwing a diaper in the air like Mary Tyler Moore tossed up her hat (if you haven’t seen reruns of the old show, it’s the “Hooray, I’m free!” toss). 
                Okay, so that never happens. But the fact is, on a good day, work can feel like a vacation from the dredges of motherhood. Mostly, though, it’s the grind it’s cracked up to be. 
                That doesn’t mean you’ll hate it.
                </p>
                <ul>
                    <li>Adios, happy hour—and, probably, lunch</li>
                        <p>
                            For some parents, having to get home for baby is the excuse they’ve been waiting for to get out of spending after-hours time with coworkers. 
                            But if you actually liked throwing back a few with your work buddies (not to mention the professional benefits of bonding with colleagues), then you’re out of luck. 
                            You’re needed at home no matter what. The good news is, by the end of the day, baby’s adorable face will give you a much better buzz than that $3 Amstel Light special would.
                             As for lunch, forget about it. You’re going to be stuffing a Subway sandwich into your mouth while working or paying your bills online.
                        </p>
                    <li> You’ll always feel like you’re leaving too early—but you’ll still be working late (and no one will know).</li>
                        <p>
                        If the culture at your office is to come in early and stay late, you’ll feel like everyone’s sneering behind your back as you walk out the door at 5 p.m. (Chances are, they aren’t. And if they are, they’re really nasty people anyhow).
                         What they probably won’t realize—and what you’ll realize fast—is that you’ll be back to work on your home computer after you (finally) get those kids to bed. Oh, and don’t forget about the weekends. Remember, though, to occasionally give yourself a break. You do need rest. 
                        If you feel like you can’t take it anymore, take a personal day and spend it completely, gloriously alone doing nothing.
                        </p>
                    <li> You’ll bond with—and sometimes feel inferior to—other moms at the office</li>
                        <p>
                        Since you won’t feel comfortable going on and on about baby reflux and potty training to coworkers who don’t have kids, you’ll find excellent compatriots in fellow moms. 
                        Interestingly, the same moms who’ll care when you vent about kid stuff can occasionally also send you into fits of self-doubt. How dare they seem so professional?
                         Or thin? Or come up with amazing strategic plans on days you feel so sleep-deprived you can barely think straight? Focus on the fact that you’re all in it together.
                         There really is no such thing as Supermom.
                        </p>
                    <li>Childless coworkers can make your day</li>
                        <p>
                        Sometimes it’s just plain refreshing to talk to someone who hasn’t thought for a moment about how the hell they’re going to pay for their kid to go to college.
                         It takes you back to simpler times (insert long sigh here). But honestly, you won’t have much time for idle chitchat. 
                        See previous: Must charge out door at 5 p.m.
                        </p>
                    <li> You’ll miss your kids—but less than you think</li>
                        <p>
                        You’ll mourn your maternity leave for sure. But once you get back into the groove of work, you’ll probably find that from the moment you check your first email of the day, you get swallowed whole by your job and the eight hours fly by. 
                        The exception is a really bad day—that's when you’ll miss your child the most. That’s also why you have a million pictures of him on your phone, on your computer and on the walls of your cubicle.
                         Gaze at them. Gaze at them some more. They’ll ground you, remind you what really matters and make you feel better.
                        </p>
                    <li>You’ll have to do less housework (hopefully)</li>
                        <p>
                        When both parents work outside the house, you two are on equal footing. Having worked at home and had periods of full-time mom duty, I’ve learned that the person at home during the day is also implicitly expected to keep the house clean, cook the meals, take the baby to the doctor, sign the kids up for activities, make sure there’s toilet paper, and on and on.
                         When you both work, you’re in the same boat (with the same lack of free time), and there’s none of that guilt that comes with not bringing in income.
                         Duties will probably be more divided, and you’ll likely feel like a team (it may seem like one that loses a lot, but it’s a team nonetheless).
                        </p>
                     <li> Weekends won’t feel like weekends</li>
                        <p>
                        Actually, for _any _mom, weekends are a crock. It’s not like you’re sleeping in or spending hours at the gym just because it’s Saturday. 
                        You’re trying your best to be a cheerful, involved mom spending quality time (read: activities) with the child you’ve barely seen all week, even though you’re completely exhausted. Plus you’ve got to do all that laundry, grocery shopping and dry-cleaning-dropping-off that you haven’t had time to touch all week. 
                        And you should probably finally get that dusty, squished-Cheerios film off the floor.
                        </p>
                    <li>You’ll feel a strong bond with baby’s caregiver</li>
                        <p>
                            Okay, so there will be moments you feel jealous of the person who gets to spend more time with your child than you. But the predominant feeling you’ll have toward baby’s nanny or day care teacher will likely be attachment. 
                            After all, she’ll appreciate baby’s personality quirks and celebrate his milestones right along with you.
                             This is actually a very warm, it-takes-a-village feeling. Of course, if the caregiver lets you down, nothing will anger you more.
                        </p>
                     <li>You’ll feel like you’re never good enough—at home or at work</li>
                        <p>
                        We working women are so desperate for a formula that will help us achieve that elusive work-life balance—or at the very least help us feel less like we’re failing in both the parenting and career arenas. 
                        But there might not be one. There will be days you feel like you can’t do anything right, that you're not giving 100 percent at work, at home and definitely not at the gym (if you happen to miraculously find yourself there), and that you’re letting your colleagues, kids, partner and yourself down. But somehow, you’ll snap yourself out of it. 
                        You’ll forgive yourself for giving your kids frozen pizza for dinner and for missing that meeting at work and tell yourself that tomorrow will be better (and it probably will be, we swear!).
                        </p>
                      <li>Walking in the door makes it all worth it</li>
                        <p>
                        So here comes the best part. The return home/pickup. Man, are those kids happy to see you. Get ready for some hugs so big you’ll sometimes get knocked over. (Well, most of the time—occasionally they seem indifferent or, worse, miffed you arrived just when the game of Duck, Duck, Goose was getting interesting).
                         Your heart will melt at the excited squeals, the uncontrollable hand waves and the leg hugs. This is when everything seems okay. You made it through another day. 
                        You’ve got a job, a kid who doesn’t seem fazed by your absence, and you couldn’t be more grateful for this and in love with him. You’re gonna make it after all.
                        </p>
                 </ul>
            
            <button onClick={this.onNavigateHome} className="btn vtn-primary">Go Home</button>
            </div>
            </div>
            
            <div className="small">
                    <div className="box">
                        
                        <Link to={"/layout"} className="link">10 Things Only Moms in San Francisco Can Say</Link>
                        <Link to={"/layout"} ><img className="workingMom" alt="mom" src="../../images/sanfrancisco.jpg" /> </Link>
                        
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