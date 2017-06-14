/**
 * Created by admin on 6/9/17.
 */

import React, { Component } from 'react';
import './search.css';


class NySearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            topic: "",
            year: "",
            endYear: ""
        };
    }
    handleTopic (e)  {
    this.setState({ topic: e.target.value});
    }

    handlestartYear (e) {
    this.setState({year: e.target.value})
}
    handleendYear (e) {
        this.setState({endYear: e.target.value})
}
    handleSubmit (event)  {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state);
    this.setState({ term: "" });
}

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
                        <form className="button" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-group">
                        <label>
                        <input value={this.state.topic}
                               onChange={this.handleTopic.bind(this)}
                               type="text"
                               className="form-control"
                               placeholder="Topic"/>
                        </label>
                    </div>

                    <div className="Startyear">
                        <h3>Start Year</h3>
                        <div className="input-group">
                            <label>


                            <input value={this.state.year}
                                   onChange={this.handlestartYear.bind(this)}
                                   type="text"
                                   className="form-control"
                                   placeholder="YYYYMMDD"/>
                            </label>

                        </div>

                    <div className="Endyear">
                        <h3>End Year</h3>
                        <div className="input-group">
                            <label>
                            <input
                                value={this.state.endYear}
                                onChange={this.handleendYear.bind(this)}
                                type="text"
                                className="form-control"
                                placeholder="YYYYMMDD"/>
                            </label>
                        </div>
                        </div>

                        <div className="button">
                            <button
                                className ="btn btn primary btn-lg"
                                type ="submit"
                                >Search</button>
                        </div>
                    </div>
                        </form>
                    </div>


                    </div>
                </div>
            </div>
        )
    }
}




export default NySearch;