/**
 * Created by admin on 6/9/17.
 */

import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
    // Here we describe this component's render method
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Results</h3>
                </div>
                <div className="panel-body text-center">
                    <p> events: {this.props.events}</p>
                </div>

            </div>
            </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Results;
