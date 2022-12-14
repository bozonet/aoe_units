import {
  FETCH_ALL_UNITS_REQUEST,
  FETCH_ALL_UNITS_SUCCESS,
  GET_UNIT_REQUEST,
  GET_UNIT_SUCCESS,
  FETCH_FAILURE,
  FILTER_BY_FILTERS_REQUEST,
  FILTER_BY_FILTERS_SUCCESS
} from "./actionTypes";



export interface Unit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: Cost;
  build_time?: number | null;
  reload_time?: number | null;
  attack_delay?: number | null;
  movement_rate?: number | null;
  line_of_sight: number;
  hit_points: number;
  range?: number | string;
  attack?: number | null;
  armor: string;
  attack_bonus?: (string)[] | null;
  accuracy?: string | null;
  search_radius?: number | null;
  blast_radius?: number | null;
  armor_bonus?: (string)[] | null;
}

export interface Cost {
  Wood: number;
  Gold: number;
  Food: number;
}


export interface FilterState {
  pending: boolean;
  units: Unit[];
  filteredUnits: Unit[] | null;
  selectedUnit: Unit | null;
  error: string | null;
  ageFilter: string;
  costFilters: {
    filters: string[];
    filtersRanges: {
      "Wood": [number, number],
      "Food": [number, number],
      "Gold": [number, number],
    }
  };
}


export interface FilterByFiltersRequest {
  type: typeof FILTER_BY_FILTERS_REQUEST;
  payload: FilterByFiltersRequestPayload;
}

export type FilterByFiltersSuccess = {
  type: typeof FILTER_BY_FILTERS_SUCCESS;
  payload: FilterByFiltersSuccessPayload;
};

export type GetUnitRequest = {
  type: typeof GET_UNIT_REQUEST;
  payload: GetUnitRequestPayload;
};

export type GetUnitSuccess = {
  type: typeof GET_UNIT_SUCCESS;
  payload: GetUnitSuccessPayload;
};

export type GetUnitRequestPayload = {
  id: number;
};

export type GetUnitSuccessPayload = {
  selectedUnit: Unit;
};





export interface FilterByFiltersRequestPayload {
  ageFilter?: string;
  woodFilter?: boolean;
  goldFilter?: boolean;
  foodFilter?: boolean;
  woodFilterRange?: [number, number];
  goldFilterRange?: [number, number];
  foodFilterRange?: [number, number]
}

export interface FilterByFiltersSuccessPayload {
  filters: string[];
  filtersRanges: {
    "Wood": [number, number],
    "Food": [number, number],
    "Gold": [number, number],
  };
  filteredUnits: Unit[];
  ageFilter: string;
}



export interface FetchUnitSuccessPayload {
  units: Unit[];
}
export interface FetchAllUnitsSuccessPayload {
  units: Unit[];
}
export interface FetchAllUnitsSuccess {
  type: typeof FETCH_ALL_UNITS_SUCCESS;
  payload: FetchAllUnitsSuccessPayload;
}

export interface FetchFailurePayload {
  error: string;
}
export interface FetchAllUnitsRequest {
  type: typeof FETCH_ALL_UNITS_REQUEST;
}



export type FetchFailure = {
  type: typeof FETCH_FAILURE;
  payload: FetchFailurePayload;
};

export type FilterActions =
  | FetchAllUnitsRequest
  | FetchAllUnitsSuccess
  | GetUnitRequest
  | GetUnitSuccess
  | FilterByFiltersRequest
  | FilterByFiltersSuccess
  | FetchFailure;