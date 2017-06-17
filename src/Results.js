/**
 * Created by admin on 6/9/17.
 */

import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state={
            events: []
        };
    }
    componentWillReceiveProps (props) {
    this.setState({ events: this.props.events});
    console.log(props);
}

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
                    <ul>

                        {
                            this.state.events.map((event) =>{
                                console.log(event);
                            return <li className ="btn btn primary btn-lg" >{event.headline.main}</li>
                             })
                        }


                    </ul>
                </div>

            </div>
            </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Results;
