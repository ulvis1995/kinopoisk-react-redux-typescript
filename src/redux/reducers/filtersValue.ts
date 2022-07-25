import {FilterValueAction, FilterValueState, FilterValueActionTypes} from '../types/filterValue'

const initialState: FilterValueState = {
  genresValue: [],
  countryValue: [],
};

const filtersValue = (state = initialState, action: FilterValueAction): FilterValueState => {
  if (action.type === FilterValueActionTypes.GENRES_VALUE) {
    return {
      ...state,
      genresValue: action.payload,
    };
  };
  if (action.type === FilterValueActionTypes.COUNTRY_VALUE) {
    return {
      ...state,
      countryValue: action.payload,
    };
  };
  
  return state;
};

export default filtersValue; 