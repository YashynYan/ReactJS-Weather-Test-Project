import React from 'react';
import './../Search.css';

const Search = ({weatherMethod}) =>(
    <div id="search-bar">
      <form onSubmit={weatherMethod}> 
      <label class="form-label"
      for="searchCity">Choose city:</label>
    <input type="text" name = "searchCity"></input> 
    <input type="submit" name = "sumbitButton"></input>
    </form>
    </div>
  )


export default Search;
