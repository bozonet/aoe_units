import { all, call, put, takeLatest } from "redux-saga/effects";

import store from "../store";
import { fetchFailure, getUnitSuccess, fetchAllUnitsSuccess } from "./actions";
import { FETCH_ALL_UNITS_REQUEST, FILTER_BY_FILTERS_REQUEST, FILTER_BY_FILTERS_SUCCESS, GET_UNIT_REQUEST} from "./actionTypes";
import { FilterByFiltersRequest, GetUnitRequest, GetUnitRequestPayload, Unit } from "./types";

import units from "../../data/age-of-empires-units.json";

//getAllUnits mock API Call local JSON file
const getAllUnits = (): Unit[] => {
    const objectArray = Object.values(units.units);
    const unitsArray = objectArray.map((unit): Unit => {
        //Cost type guard for better filtering
        if (unit.cost === undefined || unit.cost == null) {
            return {
                ...unit,
                cost: {
                    Wood: 0,
                    Gold: 0,
                    Food: 0,
                },
            };
        } else {
            return {
                ...unit,
                cost: {
                    Wood: unit.cost.Wood || 0,
                    Gold: unit.cost.Gold || 0,
                    Food: unit.cost.Food || 0,
                },
            }
        }
    });
    return unitsArray;
};

function getUnit(payload: GetUnitRequestPayload) {
    const response = getAllUnits();
    const unit = response.find((unit) => unit.id === payload.id);
    return unit;
}

/*
  Worker Saga: Fired on FETCH_ALL_UNITS_REQUEST action
*/
function* getUnitSaga(action: GetUnitRequest) {
    try {
        const response: Unit = yield call(getUnit, action.payload);
        yield put(
            getUnitSuccess({
                selectedUnit: response,
            })
        );
    }
    catch (e: any) {
        //TODO add error handling
        yield put(fetchFailure(
            {
                error: e.message,
            }
        ));
    }
}


function* fetchAllUnitsSaga() {
    try {
        const response: Unit[] = yield call(getAllUnits);
        yield put(
            fetchAllUnitsSuccess({
                units: response,
            })
        );
    } catch (e: any) {
        yield put(
            //TODO add error handling
            fetchFailure({
                error: e.message,
            })
        );
    }
}

/*
  Worker Saga: Fired on FILTER_BY_FILTERS_REQUEST action
*/

function* filterByFiltersSaga(action: FilterByFiltersRequest) {
    //TODO add error handling
    //TODO make filter from utils
    const units = store.getState().filter.units;
    let filters = store.getState().filter.costFilters.filters;
    let filtersRanges = store.getState().filter.costFilters.filtersRanges;
    let ageFilter = store.getState().filter.ageFilter;


    /*
    Check Filters On/Off
    */

    //Wood Filter Check
    if (action.payload.woodFilter) {
        filters.push("Wood");
    }

    if (action.payload.woodFilterRange) {
        filtersRanges.Wood = action.payload.woodFilterRange;
    }

    if (action.payload.woodFilter === false) {
        filters = filters.filter(function (item) {
            return item !== "Wood";
        }
        );
    }

    //Food Filter Check
    if (action.payload.foodFilter) {
        filters.push("Food");
    }
    if (action.payload.foodFilterRange) {
        filtersRanges.Food = action.payload.foodFilterRange;
    }

    if (action.payload.foodFilter === false) {
        filters = filters.filter(function (item) {
            return item !== "Food";
        }
        );
    }

    //Gold Filter Check
    if (action.payload.goldFilter) {
        filters.push("Gold");

    }
    if (action.payload.goldFilterRange) {
        filtersRanges.Gold = action.payload.goldFilterRange;
    }


    if (action.payload.goldFilter === false) {
        filters = filters.filter(function (item) {
            return item !== "Gold";
        }
        );
    }

    //Get inital units from store

    /*
    Filter by filters 
    */

    let filteredUnits = units.filter(function (unit) {
        //Get costs from units
        let wood = unit.cost.Wood;
        let food = unit.cost.Food;
        let gold = unit.cost.Gold;

        //Check costs filters on/off
        let woodFilter = filters.includes("Wood");
        let foodFilter = filters.includes("Food");
        let goldFilter = filters.includes("Gold");

        /*
        Filter by Costs
        */

        //Wood Filter
        if (woodFilter && (wood || wood === 0)) {
            if (wood < filtersRanges.Wood[0] || wood > filtersRanges.Wood[1]) {
                return false;
            }
        }
        if (woodFilter && !wood && wood !== 0) {
            return false;
        }

        //Food Filter
        if (foodFilter && (food || food === 0)) {
            if (food < filtersRanges.Food[0] || food > filtersRanges.Food[1]) {
                return false;
            }
        }
        if (foodFilter && !food && food !== 0) {
            return false;
        }

        //Gold Filter
        if (goldFilter && (gold || gold === 0)) {
            if (gold < filtersRanges.Gold[0] || gold > filtersRanges.Gold[1]) {
                return false;
            }
        }
        if (goldFilter && !gold && gold !== 0) {
            return false;
        }


        //Filter by Age
        if (ageFilter !== "All") {
            if (unit.age !== ageFilter) {
                return false;
            } else {
                return true;
            }
        }

        return true;
    });


    yield put({
        type: FILTER_BY_FILTERS_SUCCESS,
        payload: {
            filters,
            filtersRanges,
            filteredUnits,
            ageFilter
        },
    });
}

/*
  Filters and Inital Units watcher saga
*/
function* filterSaga() {
    yield all([
        takeLatest(FETCH_ALL_UNITS_REQUEST, fetchAllUnitsSaga),
        takeLatest(FILTER_BY_FILTERS_REQUEST, filterByFiltersSaga),
        takeLatest(GET_UNIT_REQUEST, getUnitSaga),
    ]);
}

export default filterSaga;