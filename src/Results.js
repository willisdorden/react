/**
 * Created by admin on 6/9/17.
 */

import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: props.events || []
        };
    }
    componentWillReceiveProps (Nextprops) {
        console.log(Nextprops.events);
    if(this.state.data !== Nextprops.events)
        this.setState({data : Nextprops.events});
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
                            this.state.data.map((event) => {
                            return (
                             <li key ={event._id} className="btn btn-primary btn-lg">
                                 {event.headline.main}
                                 <button className="btn btn-primary btn-lg" type="submit">Save</button>
                             </li>
                            )
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
