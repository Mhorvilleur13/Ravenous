//import logo from '
import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import logo from '../../logo.svg';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: [],
    };
   this.searchYelpApp = this.searchYelpApp.bind(this);
  }
  searchYelpApp(term, location, sortBy){
   Yelp.searchYelp(term, location, sortBy).then(businesses => {
     this.setState({ businesses: businesses });
   })
  }
  render() {
  return (
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar felix={this.searchYelpApp} a='b' x={5} c='z'/>
    <BusinessList  businesses={this.state.businesses}/>
  </div>
  );
  }
}

export default App;
