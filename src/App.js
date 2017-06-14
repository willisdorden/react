import React, { Component } from 'react';
import './App.css';
import NySearch from './search.js'
import Results from './Results.js'
import SavedArticles from './SavedArticles.js'
import helpers from './util/helper'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: "",
            topic: "",
            year:"",
            endYear:""
        };
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.topic !== this.state.topic) {
            console.log("UPDATED");

            helpers.runQuery(this.state).then ( (data) => {
                if (data !== this.state.results) {
                    console.log("HERE");
                    console.log(data);

                    this.setState({results: data});
                }

                // This code is necessary to bind the keyword "this" when we say this.setState
                // to actually mean the component itself and not the runQuery function.
            })
        }
    }
    setTerm ({topic, year, endYear })  {
        this.setState({ topic, year, endYear });
    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>New York Times Article Scrubber</h2>
                <h3>Search for and annotate article of interest</h3>
        </div>
          <div>
              <NySearch  setTerm={this.setTerm} />
          </div>
          <div>
          <Results events={this.state.results}  />
          </div>
          <div>
              <SavedArticles />
          </div>
      </div>
    );
  }
}

export default App;
