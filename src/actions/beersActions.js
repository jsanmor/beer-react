import {
    FETCH_BEERS,
    FETCH_BEER,
    SET_HOPS_STATUS,
    SET_MALT_STATUS,
    SET_METHOD_STATUS,
} from './types';

import { STATUS } from '../types'
import { fakeBeer } from './fake/beer';
import { fakeBeers } from './fake/beers';

export const fetchBeers = () => dispatch => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(handleErrors)
        .then(beers =>
            dispatch({
                type: FETCH_BEERS,
                payload: beers
            })
        )
        .catch(error => {
            //Development purposes
            console.error(error, " ONLINE API NOT AVAILABLE GETING FAKE BEERS ")
            dispatch({
                type: FETCH_BEERS,
                payload: fakeBeers
            })
        })
};

//Improve that to try fetch before from all list

export const fetchBeer = id => dispatch => {
    fetch('https://api.punkapi.com/v2/beers/' + id)
        .then(handleErrors)
        .then(beer => {
            let malts = normalizeIngredients(beer[0].ingredients.malt)
            let hops = normalizeIngredients(beer[0].ingredients.hops)
            let methods = normalizeMethods(beer[0].method);
            delete beer[0].ingredients;
            dispatch({
                type: FETCH_BEER,
                payload: {
                    ...beer[0],
                    malts,
                    hops,
                    methods
                }
            })
        })
        .catch(error => {
            //Development purposes
            console.error(error, " ONLINE API NOT AVAILABLE GETING FAKE BEER ")
            dispatch({
                type: FETCH_BEER,
                payload: fakeBeer
            })
        })
}
export const setHopsStatus = (id, status) => ({
    type: SET_HOPS_STATUS,
    id,
    status
})
export const setMaltStatus = (id, status) => ({
    type: SET_MALT_STATUS,
    id,
    status
})

export const setMethodStatus = (id, status) => ({
    type: SET_METHOD_STATUS,
    id,
    status
})

/**
 * Given an array of objects, add to each object following atributes 
 *  - ID
 *  - Status (defaut idle) 
 * @param {array} arr 
 * @returns {array} copy of initial array with new fields
 */
function normalizeIngredients(arr) {
    let nextId = 0;
    return arr.map((el) => {
        el.id = nextId++;
        el.status = STATUS.IDLE;
        return el;
    });
}

/**
 * Function for normalice the "methods object" that include API response.
 * Return an array of objects of methods, avoiding nesting, 
 * more easy to use in the rest of app
 * Also add following to each method objpurposesect
 * - ID
 * - status (default idle)
 * @param {object} methodsObj 
 */
function normalizeMethods(methodsObj) {
    let nextId = 0;
    let methodArray = [];
    function addToArray(met, key) {
        //Normalize names
        key = key.split("_").join(" ");
        //if current object is an array call this method recursively with all elements in array 
        if (Array.isArray(met)) {
            met.forEach((el, key2) => {
                let newName = key + " " + (key2 + 1);
                addToArray(el, newName)
            });
        }
        else {
            if (typeof met === "string") met = { text: met };
            methodArray.push({
                name: key,
                id: nextId++,
                status: STATUS.IDLE,
                ...met
            })
        }
    }
    Object.keys(methodsObj).forEach((name) => {
        let method = methodsObj[name];
        addToArray(method, name)
    });
    return methodArray;
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
