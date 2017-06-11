import React, { Component } from 'react';
import './App.css';
import Search from './search.js'
import Results from './Results.js'
import SavedArticles from './SavedArticles.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>New York Times Article Scrubber</h2>
                <h3>Search for and annotate article of interest</h3>
        </div>
          <div>
              <Search />
          </div>
          <div>
          <Results />
          </div>
          <div>
              <SavedArticles />
          </div>
      </div>
    );
  }
}

export default App;
