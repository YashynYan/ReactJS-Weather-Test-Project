import React, { Component } from 'react';
import './../styles/Search.css';
import { setCity } from '../redux/actions';
import { connect } from 'react-redux';
 
class Search extends Component {
  constructor(props){
    super(props);
    this.state = {input: ""};
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleSetCity = () =>{
    this.props.setCity(this.state.input);
  }

  render() {
    return(
    <div id="search-bar">     
      <label className="form-label"
      htmlFor="searchCity">Choose city:</label>
    <input type="text" name = "searchCity" onChange = {e => this.updateInput(e.target.value)}></input> 
    <input type="button" value="Search" className="submitCity" onClick={this.handleSetCity}></input>
    </div>
    )
  }
}

export default connect(
  null,
  {setCity}
)(Search);
