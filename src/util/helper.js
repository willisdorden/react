/**
 * Created by admin on 6/11/17.
 */
import React, { Component } from 'react';

var axios = require("axios");

class helpers extends Component {
    render(){
        return (
            runQuery = (location) => {
                console.log(location);
               return axios.get('"https://www.nytimes.com/"')
                    .then(response => {
                        return response.data
                            .catch(error => {
                                console.log(error);
                            });

                    })
            }
        )
    }
}
export default helpers;