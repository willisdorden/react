/**
 * Created by admin on 6/9/17.
 */

import React, { Component } from 'react';
import './search.css';

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            topic: "",
            year: "",
            endYear: ""
        };
    }
    handleTopic= (e) => {
    this.setState
        ({ topic: e.target.value});
    };

    handlestartYear =(e) => {
    this.setState
    ({year: e.target.value})
};
    handleendYear = (e) =>{
        this.setState
        ({endYear: e.target.value})
};
    componentDidUpdate =()=>{
          this.nyTime()
    };



    render(){
        return(
            <div className="container">
                <div className="col-md-12">
                    <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
            </div>
                    <div className="panel-body">
                    <div className="Topic">
                    <h3>Topic</h3>
                    <div className="input-group">
                        <input value={this.state.topic}
                               onChange={this.handleTopic}
                               type="text"
                               className="form-control"
                               placeholder="Topic"/>
                    </div>
                </div>
                    <div className="Startyear">
                        <h3>Start Year</h3>
                        <div className="input-group">
                            <input value={this.state.year}
                                   onChange={this.handlestartYear}
                                   type="text"
                                   className="form-control"
                                   placeholder="Start Year"/>
                        </div>
                    </div>
                    <div className="Endyear">
                        <h3>End Year</h3>
                        <div className="input-group">
                            <input
                                value={this.state.endYear}
                                onChange={this.handleendYear}
                                type="text"
                                className="form-control"
                                placeholder="End Year"/>
                        </div>
                    </div>
                        <div className="button">
                            <button className ="btn btn primary btn-lg" onClick={this.handleClick}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Search;