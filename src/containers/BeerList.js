import React, { Component } from "react";
import BeerItem from "../components/BeerItem";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/beersActions';

class BeerList extends Component {
  componentWillMount() {
    this.props.fetchBeers();
  }

  render() {
    if (this.props.beers===[])
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    )
    return (      
      <ul className="collection beer-list">
        {this.props.beers.map(beer => 
         <BeerItem beer={beer} key={beer.id} />
        )}
      </ul>
    )
  }
}

BeerList.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
  beers: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    beers: state.beers.all,
  }
};

export default connect(mapStateToProps, { fetchBeers })(BeerList);

