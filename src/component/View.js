import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
class View extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props.allTopic);
        let show = this.props.allTopic.data.map( e => {
            return(
                <div class="card mb-3" >
                     <div class="row no-gutters">
                          
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title"><b>{e.topic}</b></h5>
                                <Link to={`/comment/${e.id}`}>Comment</Link>
                                </div>
                            </div>
                      </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>TOPICS </h1>
                        {show}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       allTopic: state.allData
    }
}
export default connect(mapStateToProps) (View);