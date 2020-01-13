import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {addTopic} from '../Redux/Action'
class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             topic:''
        }
    }
    
    handleInput = (e) => {
        this.setState({topic:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let randomNumber = Math.floor(Math.random(2000)*1000);
       let newComment = {
           id: randomNumber,
           topic:this.state.topic
       }
        this.props.add(newComment)
        
    }


    
    render() {
        return (
            <React.Fragment>
            <div className="container mt-5">
               <div className="row">
                   <div className="col-md-6">
                       <h1>TOPICS</h1>
                       <form onSubmit={this.handleSubmit}>
                           <div class="form-group">
                               <label for="exampleFormControlTextarea1">Question</label>
                               <textarea class="form-control" rows="4" value={this.state.topic} onChange={this.handleInput}></textarea>
                               <button className="btn btn-primary mt-2">Add</button>
                               <Link to="/view" type="button" class="btn btn-secondary btn-l ml-5">VIEW ALL TOPICS</Link> 
                           </div>
                       </form>

                  </div>
               </div>
           </div>
           
       </React.Fragment>
        );
    }
}

const dispatchStateToProps = (dispatch)  => {
    return {
        add: (send) => dispatch(addTopic(send))
    }
}
export default connect(null, dispatchStateToProps) (Add);