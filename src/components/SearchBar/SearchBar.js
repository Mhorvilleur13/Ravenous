import React from 'react';

import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  getSortByClass(param) {
    if (this.state.sortBy === param) {
      return 'active';
    } else {
      return '';
    }
  }
  handleSortByChange(param) {
    this.setState({ sortBy: param });
    this.props.felix(this.state.term, this.state.location, param);
  }
  handleTermChange(event) {
    this.setState({ term: event.target.value })
  };

  handleLocationChange(event) {
    this.setState({ location: event.target.value, })
  };
  handleSearch(event) {
    console.log(this.props.a)
    this.props.felix(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
    console.log(this.props);
  };
  
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} 
        className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange = {(event) => this.handleTermChange(event)} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;

