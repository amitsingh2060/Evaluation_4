import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExtraView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             total:[],
             page:1,
             perPage:10
        }
    }
    
    handleDropDown = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: Number(e.target.value)})
      
    }

    handleButton = (pageNo) => {
        this.setState({page:Number(pageNo)})
    }

    handleNext = (a) => {
        if (a <= this.state.total.length) {
            this.setState({
                page: a + 1
            })
        }
      }

      handlePrev = (a) => {
        if (a > 1) {
            this.setState({
                page: a - 1
            })
        }
      }

    render() {
        this.state.total = this.props.allTopic.commentData
        var totalData = this.state.total
        var pageNo = this.state.page
        var perPageNo = this.state.perPage
        var totalPages = Math.ceil(totalData.length/perPageNo)
        
        var start = (pageNo -1) *perPageNo
        var end = start + perPageNo 
        var slicedData = totalData.slice(start,end)

        var pageNumbers = []
        for(var i=1; i<=totalPages; i++){
            pageNumbers.push(i)
        }

        var button = pageNumbers.map(btn => {
            return(
            <button  type="button" class="btn btn-warning" onClick={() =>this.handleButton(btn)}>{btn}</button>
            )
        })


        var nextButton = () => {
            if (this.state.page !== this.state.total.length) {
                return (
                    <button className="btn btn-primary ml-3" onClick={() => this.handleNext(this.state.page)}> Next</button>
                )
          
            }
            else {
                return (
                    <button className="btn btn-primary" disabled>Next</button>
                )
            }
          }

          var prevButton = () => {
            if (this.state.page !== 1) {
                return (
                    <button className="btn btn-success ml-3" onClick={() => this.handlePrev(this.state.page)}>Prev</button>
                )
            }
            else {
                return (
                    <button className="btn btn-success "  disabled>Prev</button>
                )
            }
          }

        // ***************************Pagination**************************************
        console.log(this.props.allTopic.commentData);
        let show = slicedData.filter((e) => {
            return e.tid === this.props.tid
        }).map(e=>{
            return(
                <div class="card mb-3" >
                     <div class="row no-gutters">
                          
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title"><b>{e.comment}</b></h5>                        
                                </div>
                            </div>
                      </div>
                </div>
            )
        })
        
        return (
            <React.Fragment>
                      <div className="container">
                    <div className="my-5">  {prevButton()}{button} {nextButton()}
                    <select className="form-control offset-2  btn btn-primary"style={{width:"120px"}} onChange={this.handleDropDown} name="perPage">
                                    <option value="5" selected>Per Page</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                    </select>  
                   </div>  
                                 <div className="row">
                                     <div className="col-6">
                        <h1>See All Comments </h1>
                        {show}
                    </div>
                </div>
                
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       allTopic: state.allData
    }
}

export default connect(mapStateToProps) (ExtraView);