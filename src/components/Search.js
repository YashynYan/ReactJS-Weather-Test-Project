import React, { Component } from 'react';
import './../styles/Search.css';

class Search extends Component {
    constructor (cityMethod) {
      super();
      this.cityMethod = cityMethod
    }

    render() {
    return(<div id="search-bar">     
      <label className="form-label"
      htmlFor="searchCity">Choose city:</label>
    <input type="text" name = "searchCity"></input> 
    <input type="button" value = "submit"></input>
    </div>)
    }
}

export default Search;
