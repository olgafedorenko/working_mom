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
    renderForm(){
       return (
            <div className="commentContainer">
                <textarea ref="newText" className="textareaContainer1" defaultValue={this.props.children}></textarea>
                    <button onClick={this.save} className="save">Save</button>      
           </div>
        
    )}
    renderNormal(){
        
        return(
           <div className="commentContainer">
                <div className="commentText"> <p>{this.props.children}</p> </div>
                <img  className="edit"  onClick={this.edit} alt="like"src="../images/edit.png" />
                <img  className="remove"  onClick={this.remove} alt="like"src="../images/remove.png" />
                <span className="classFemale">{this.state.count}</span><img  className="likeStory"  onClick={this._addByOne}alt="like"src="../images/like.png" />
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

export class CommentLayout extends React.Component{
   constructor(){
       super();
        this.state={
          comments:[
            "Costumes are a way of life.",
            "If you’re a foodie, welcome to heaven.",
            "You’ll turn into an early adopter even if you weren’t one before."
          ]
   }
}
    addComment(){
        var val=this.refs.name.value
        var arr=this.state.comments;
           arr.push(val)
           this.setState({comments:arr})
         this.refs.name.value=''
        
    }
   
    updateComment(newText,i){
        var arr = this.state.comments
        arr[i]=newText
        this.setState({comments:arr})
        
    }
    removeComment(i){
        var arr=this.state.comments;
        arr.splice(i,1)
        this.setState({comments:arr})
        
    }
    eachComment(text,i){
        return (
            <Comment key={i} index={i} updateCommentText={(value, index)=>this.updateComment(value, index)} deleteFromBoard={(index)=>this.removeComment(index)}>{text}
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
            
            <div>
                <div>
                   {this.state.comments.map(this.eachComment, this)}
                </div>
                <div className="addNew">
                <textarea className="textareaContainer1" type="text" ref="name"  placeholder="Your comment" onKeyPress={this.handleKeyPress}/>
                <button type="submit" className="add" onClick={this.addComment.bind(this)}>Add new</button>
                    
                   </div>
                
                
           </div>
   
    )}
}

