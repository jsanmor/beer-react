import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBeer, setHopsStatus, setMaltStatus , setMethodStatus} from '../actions/beersActions';
import IngredientsList from "../components/IngredientsList"
import { STATUS } from "../types"

class BeerDetails extends Component {
    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.fetchBeer(id);
    }
    render() {
        const beer = this.props.beer;
        if (!beer.name)
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        return (
            <div className="container beer-detail">
                <h1 className="center">{beer.name}</h1>
                <h2 className="center">{beer.tagline}</h2>
                <div className="row">
                    <div className="col s12 m6">
                        <img prop={beer.name} alt={beer.name} className="beer-detail__img" src={beer.image_url}></img>
                    </div>
                    <div className="beer-detail__description col s12 m6">
                        <p>{beer.description}</p>
                        <br />
                        <span className="badge left">{beer.abv} AVB</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col m6 s12">
                        <IngredientsList
                            title="Hops"
                            availableCondition={this.props.availableHops}
                            availableField="add"
                            ingredients={this.props.hops}
                            onclick={this.props.setHopsStatus}
                        />
                    </div>
                    <div className="col s12 m6">
                        <IngredientsList
                            title="Malts"
                            ingredients={this.props.malts}
                            onclick={this.props.setMaltStatus}
                        />
                    </div>
                    <div className="col s12">
                        <IngredientsList
                            title="Methods"
                            ingredients={this.props.methods}
                            onclick={this.props.setMethodStatus}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


BeerDetails.propTypes = {
    fetchBeer: PropTypes.func.isRequired,
    setHopsStatus: PropTypes.func.isRequired,
    setMethodStatus: PropTypes.func.isRequired,
    setMaltStatus: PropTypes.func.isRequired,
    beer: PropTypes.object.isRequired,
    malts: PropTypes.array.isRequired,
    hops: PropTypes.array.isRequired,
    methods: PropTypes.array.isRequired,
    availableHops: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
    return {
        beer: state.beer,
        malts: state.beer.malts,
        hops: state.beer.hops,
        methods: state.beer.methods,
        availableHops: state.beer.availableHops
    }
};
const mapDispatchToProps = dispatch => ({
    fetchBeer: id => dispatch(fetchBeer(id)),
    setHopsStatus: id => dispatch(setHopsStatus(id, STATUS.DONE)),
    setMaltStatus: id => dispatch(setMaltStatus(id, STATUS.DONE)),
    setMethodStatus: id => dispatch(setMethodStatus(id, STATUS.DONE))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetails);

