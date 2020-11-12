import React, { Component } from 'react';
import { connect } from 'react-redux';


import ExtraComment from './ExtraComment';
class Comment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            topic:'',
            id:'',
            comment:''
        }
    }

    componentDidMount() {
        this.props.allTopic.data.map(e => {
           return (
               <div>
            if(e.id === this.props.match.params.id){
                this.setState({topic:e.topic,id:e.id })
            }
           )
           </div>
        })
    }
    handleInput = (e) => {
        this.setState({comment:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
       
        
    }
    
    render() {
     
        
        return (
            <React.Fragment>
            <div className="container mt-5">
               <div className="row">
                   <div className="col-md-6">
                       <h1>TOPICS</h1>
                            <div class="card">                    
                            <div class="card-body">
                               <h5 class="card-title">{this.state.topic}</h5>
                               
                               {/* <Link to="/extra" className="btn btn-success">Comment</Link> */}
                            </div>
                        </div> 
                  </div>
               </div>
           </div>
         <ExtraComment id={this.state.id}/>
       </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       allTopic: state.allData
    }
}

export default connect(mapStateToProps) (Comment);