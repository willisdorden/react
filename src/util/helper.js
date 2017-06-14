/**
 * Created by admin on 6/11/17.
 */

const axios = require('axios');

const helpers = {
    runQuery: ({topic,year,endYear}) => {
        console.log(topic,year,endYear);
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json')
            .then(response => response.data)
            .catch(error => { console.log(error); });
    },
};

module.exports = helpers;