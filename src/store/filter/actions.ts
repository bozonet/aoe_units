import {
    FETCH_UNIT_REQUEST,
    FILTER_BY_AGE_REQUEST,
    GET_UNIT_REQUEST,
    GET_UNIT_SUCCESS,
    FETCH_TODO_FAILURE,
    FETCH_UNIT_SUCCESS,
    FETCH_ALL_UNITS_REQUEST,
    FETCH_ALL_UNITS_SUCCESS,
    FILTER_BY_AGE_SUCCESS,
    FILTER_BY_FILTERS_REQUEST,
    FILTER_BY_FILTERS_SUCCESS
  } from "./actionTypes";
  import {
    FetchAllUnitsRequest,
    FilterByAgeRequest,
    FilterByAgeRequestPayload,
    FilterByFiltersRequest,
    FilterByFiltersRequestPayload,
    FilterByFiltersSuccess,
    FilterByFiltersSuccessPayload,
    GetUnitRequest,
    GetUnitRequestPayload,
    GetUnitSuccess,
    GetUnitSuccessPayload,
    FetchUnitRequest,
    FetchUnitSuccess,
    FetchAllUnitsSuccess,
    FetchAllUnitsSuccessPayload,
    FetchUnitSuccessPayload,
    FetchTodoFailure,
    FetchTodoFailurePayload,
    FilterByAgeSuccess,
  } from "./types";
  
  export const fetchAllUnitsRequest = (): FetchAllUnitsRequest => ({
    type: FETCH_ALL_UNITS_REQUEST,
  });

  export const filterByAgeRequest = (payload: FilterByAgeRequestPayload): FilterByAgeRequest => ({
    type: FILTER_BY_AGE_REQUEST,
    payload,
  });

  export const filterByFiltersRequest = (payload: FilterByFiltersRequestPayload): FilterByFiltersRequest => ({
    type: FILTER_BY_FILTERS_REQUEST,
    payload,
  });

  export const filterByFiltersSuccess = (payload: FilterByFiltersSuccessPayload): FilterByFiltersSuccess => ({
    type: FILTER_BY_FILTERS_SUCCESS,
    payload,
  });

  export const filterByAgeSuccess = (payload: FilterByAgeRequestPayload): FilterByAgeSuccess => ({
    type: FILTER_BY_AGE_SUCCESS,
    payload
  });

  export const getUnitRequest = (payload: GetUnitRequestPayload): GetUnitRequest => ({
    type: GET_UNIT_REQUEST,
    payload
  });

  export const getUnitSuccess = (payload: GetUnitSuccessPayload): GetUnitSuccess => ({
    type: GET_UNIT_SUCCESS,
    payload
  });

  export const fetchUnitRequest = (): FetchUnitRequest => ({
    type: FETCH_UNIT_REQUEST,
    payload: {},
  });
  
  
  export const fetchUnitSuccess = (
    payload: FetchUnitSuccessPayload
  ): FetchUnitSuccess => ({
    type: FETCH_UNIT_SUCCESS,
    payload,
  });

  export const fetchAllUnitsSuccess = (
    payload: FetchAllUnitsSuccessPayload
  ): FetchAllUnitsSuccess => ({
    type: FETCH_ALL_UNITS_SUCCESS,
    payload,
  });
  
  export const fetchTodoFailure = (
    payload: FetchTodoFailurePayload
  ): FetchTodoFailure => ({
    type: FETCH_TODO_FAILURE,
    payload,
  });