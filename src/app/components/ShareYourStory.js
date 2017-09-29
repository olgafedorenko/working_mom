import React from "react";

  

class Comment extends React.Component{
    
    constructor(){
        super()
        this.state={
            editing:false,
            count:0
        }
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this._addByOne = this._addByOne.bind(this);
        
    }
    
   edit(){
    this.setState({editing:true})
}
    remove(){
       this.props.deleteFromBoard(this.props.index)
        
    }
    save(){
        // referenve to new Text what types
       this.props.updateCommentText(this.refs.newText.value, this.props.index)
        this.setState({editing:false})
}
    //getInitialState(){
      //return{
        //count:0,  
          
      //}  
    //}
    _addByOne(){
        this.setState({
            count:this.state.count+1
        })
    }
    addNewComment(){
        <ShareYourStory />
    }
    renderForm(){
       return (
            <div className="commentContainer">
                <textarea ref="newText" className="textareaContainer" defaultValue={this.props.children}></textarea>
                    <button onClick={this.save} className="save">Save</button>      
           </div>
        
    )}
    renderNormal(){
        
        return(
           <div className="commentContainer">
                <div className="commentText"> <p>{this.props.children}</p> </div>
               {/*  <button onClick={this.addNewComment(this)} className="edit">Add Comment</button> */}
                
                <span className="classFemale">{this.state.count}</span><button className="buttonlike"><img  className="likeStory"  onClick={this._addByOne}alt="like"src="../images/like.png" /></button>
                <hr /> 
                
           </div>
            
    )
    }
    render() {
        if(this.state.editing){
               return this.renderForm();
           }
        else{
            
               return this.renderNormal();
           }
    }

}

export class ShareYourStory extends React.Component{
   constructor(){
       super();
        this.state={
          comments:[
            { author:"Jamie Williams", say:"'When I was a child my mother was making my lunch one day when a fire erupted on the stove top. My brave mom ran into the kitchen, grabbed the flaming pot and ran outside with it. As if that wasn't heroic enough... after the flames were gone, my mom sat in a chair on our porch and told me to stay inside and not to worry. Her expression seemed a bit strange and she had her body turned away from me, but she was otherwise completely calm and collected. I later found out that she suffered third-degree burns from her elbow to her fingertips on her right arm. She used every bit of strength and willpower she had to hold back tears and screams so that I wouldn't get scared or worried.'."},
            { author:"Nancy Kim", say:"'I was having a hard time with HR processing paperwork in preparation for my maternity leave. He kept telling me he needed to know what day I planned to start it. I couldn't get him to understand that I didn't know exactly when I'd go into labor. All I could give was an estimate. Then I was informed I wouldn`t be paid for holidays during my leave -- Thanksgiving, Christmas, New Year`s -- days they`d pay out to everyone else for being closed!'"}
          ],
          data:[]
   }
}
    addComment(){
        var val=this.refs.name.value
        var val2=this.refs.author.value
        var arr=this.state.comments;
           arr.push({
               author:val2,
               say:val
           })
           this.setState({comments:arr})
         this.refs.name.value=''
         this.refs.author.value=''
        
    }
   
    updateComment(newText,i){
        var arr = this.state.comments
        arr[i].say=newText
        this.setState({comments: arr})
        
    }
    removeComment(i){
        var arr=this.state.comments;
        arr.splice(i,1)
        this.setState({comments:arr})
        
    }
    eachComment(comment, i){
        return (
            <Comment author={comment.author}  key={i} index={i} updateCommentText={(value, index)=>this.updateComment(value, index)} deleteFromBoard={(index)=>this.removeComment(index)}><h3>{comment.author} </h3> {comment.say}
            </Comment>
        )
    }
    handleKeyPress(target) {
if(target.charCode==13){
   this.addComment()  
this.refs.name.value=''

}
        

}
    render(){
        return(
            
            <div className="article">
                <div>
                    <h1>Sweet Stories About Moms</h1>
                   {this.state.comments.map(this.eachComment, this)}
                   
                   
                </div>
                <div className="addNew">
                <input className="inputContainer" type="text" ref="author"  placeholder="Your name" />
                <textarea className="textareaContainer" type="text" ref="name"  placeholder="Type your mind" onKeyPress={this.handleKeyPress}/>
                <button type="submit" className="add" onClick={this.addComment.bind(this)}>Add new</button>
                    
                   </div>
                
                
           </div>
   
    )}
}

