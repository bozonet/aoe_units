/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_UNIT_REQUEST,
  FILTER_BY_FILTERS_REQUEST,
  FILTER_BY_FILTERS_SUCCESS,
  FETCH_UNIT_SUCCESS,
  FETCH_TODO_FAILURE,
  FETCH_ALL_UNITS_REQUEST,
  FETCH_ALL_UNITS_SUCCESS,
  GET_UNIT_REQUEST,
  GET_UNIT_SUCCESS,
} from "./actionTypes";

import { FilterActions, FilterState } from "./types";

const initialState: FilterState = {
  pending: false,
  units: [],
  filteredUnits: [],
  selectedUnit: null,
  error: null,
  ageFilter: "All",
  costFilters: {
    filters: [],
    filtersRanges:
    {
      Wood: [0, 200],
      Gold: [0, 200],
      Food: [0, 200],

    },
  }
};

export default (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case FETCH_ALL_UNITS_REQUEST:
      return {
        ...state,
        pending: true,
      };
      case GET_UNIT_REQUEST:
        return {
          ...state,
          ...action.payload,
          pending: true,
        };
        case GET_UNIT_SUCCESS:
          return {
            ...state,
            pending: false,
            selectedUnit: action.payload.selectedUnit,
          };
    case FILTER_BY_FILTERS_REQUEST:
      return {
        ...state,
        ...action.payload,
        pending: true,
      };
    case FILTER_BY_FILTERS_SUCCESS:
      return {
        ...state,
        costFilters: {
          filters: action.payload.filters,
          filtersRanges: action.payload.filtersRanges,
        },
        filteredUnits: action.payload.filteredUnits,
        ageFilter: action.payload.ageFilter,
        pending: false,
      };
    case FETCH_UNIT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_UNIT_SUCCESS:
      return {
        ...state,
        pending: false,
        filteredUnits: action.payload.units,
        error: null,
      };
      case FETCH_ALL_UNITS_SUCCESS:
        return {
          ...state,
          pending: false,
          units: action.payload.units,
          filteredUnits: action.payload.units,
          error: null,
        };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
} 