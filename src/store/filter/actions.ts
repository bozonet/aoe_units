import {
    GET_UNIT_REQUEST,
    GET_UNIT_SUCCESS,
    FETCH_FAILURE,
    FETCH_ALL_UNITS_REQUEST,
    FETCH_ALL_UNITS_SUCCESS,
    FILTER_BY_FILTERS_REQUEST,
    FILTER_BY_FILTERS_SUCCESS
  } from "./actionTypes";
  import {
    FetchAllUnitsRequest,
    FilterByFiltersRequest,
    FilterByFiltersRequestPayload,
    FilterByFiltersSuccess,
    FilterByFiltersSuccessPayload,
    GetUnitRequest,
    GetUnitRequestPayload,
    GetUnitSuccess,
    GetUnitSuccessPayload,
    FetchAllUnitsSuccess,
    FetchAllUnitsSuccessPayload,
    FetchFailure,
    FetchFailurePayload
  } from "./types";
  
  export const fetchAllUnitsRequest = (): FetchAllUnitsRequest => ({
    type: FETCH_ALL_UNITS_REQUEST,
  });


  export const filterByFiltersRequest = (payload: FilterByFiltersRequestPayload): FilterByFiltersRequest => ({
    type: FILTER_BY_FILTERS_REQUEST,
    payload,
  });

  export const filterByFiltersSuccess = (payload: FilterByFiltersSuccessPayload): FilterByFiltersSuccess => ({
    type: FILTER_BY_FILTERS_SUCCESS,
    payload,
  });


  export const getUnitRequest = (payload: GetUnitRequestPayload): GetUnitRequest => ({
    type: GET_UNIT_REQUEST,
    payload
  });

  export const getUnitSuccess = (payload: GetUnitSuccessPayload): GetUnitSuccess => ({
    type: GET_UNIT_SUCCESS,
    payload
  });

  

  export const fetchAllUnitsSuccess = (
    payload: FetchAllUnitsSuccessPayload
  ): FetchAllUnitsSuccess => ({
    type: FETCH_ALL_UNITS_SUCCESS,
    payload,
  });
  
  export const fetchFailure = (
    payload: FetchFailurePayload
  ): FetchFailure => ({
    type: FETCH_FAILURE,
    payload,
  });