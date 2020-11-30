import { SET_FILTER } from '../actionTypes';
import { VISIBILITY_FILTERS } from '../../constants';

const initialState = VISIBILITY_FILTERS.ALL;

export default function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
}
