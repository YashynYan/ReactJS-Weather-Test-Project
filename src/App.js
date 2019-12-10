import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Search from './components/Search';
import Weather from './components/Weather';

class App extends React.Component {
    
render(){
  return (
    
     <div className="background"> 
      <Header />
      <Search  />
      <Weather  /> 
      </div>
    
  );
}
  };

export default App;
