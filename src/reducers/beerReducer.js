import {
  FETCH_BEER,
  SET_HOPS_STATUS,
  SET_MALT_STATUS,
  SET_METHOD_STATUS
} from '../actions/types';

import { STATUS } from '../types'

const initialState = {
  malts:[],
  hops:[],
  methods:[],
  availableHops:""
};


export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BEER:
      return {
        ...state,
        ...action.payload,
        availableHops: nextAvailableHops(action.payload.hops),
      };
    case SET_HOPS_STATUS:
      let newHops = setStatus(state.hops, action.id, action.status);
      return {
        ...state,
        hops: newHops,
        availableHops: nextAvailableHops(newHops)
      }

    case SET_MALT_STATUS:
      return {
        ...state,
        malt: setStatus(state.malts, action.id, action.status),
      }

    case SET_METHOD_STATUS:
      let newMethods = state.methods.map(m => {
        if (m.id === action.id) m.status = action.status;
        return m;
      });
      return {
        ...state,
        methods: newMethods,
      }

    default:
      return state;
  }
}

/**
 * Given an array of hops, return the current kind of hop can be add 
 * @param {array} hops 
 * @returns {string} [start|middle|end]
 */
function nextAvailableHops(hops) {
  var start = false, middle = false, end = false;
  hops.forEach(h => {
    if (h.status === STATUS.IDLE){
      if (h.add === "start") start = true;
      else if (h.add === "middle") middle = true;
      else if (h.add === "end") end = true;
    }
  });
  return start ? "start" : (middle ? "middle" : (end ? "end" : ""))
}

/**
 * Set property status of object with given id inside the array.
 * Return a new array with all elements (including modified)
 * @param {array} objArray Array of objects
 * @param {number} id id of object (object.id)
 * @param {string} status new state to asign
 */
function setStatus(objArray, id, status) {
  return objArray.map(el => {
    if (el.id === id) el.status = status;
    return el;
  });
}