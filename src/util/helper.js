/**
 * Created by admin on 6/11/17.
 */

const axios = require('axios');

const helpers = {
    runQuery: ({topic,year,endYear}) => {
        console.log(topic,year,endYear);
        const query = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${topic}&begin_date=${year}&end_date=${endYear}&api-key=68417fabf62e46319016b82ea8cc4816`;
        return axios.get(query)

    },
};

module.exports = helpers;