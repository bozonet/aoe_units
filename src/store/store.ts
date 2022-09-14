import {configureStore} from '@reduxjs/toolkit';
import  createSagaMiddleware from 'redux-saga';

import filterReducer from './filter/reducer';
import { rootSaga } from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: {
        filter: filterReducer,
    },
    middleware: [sagaMiddleware],
});


sagaMiddleware.run(rootSaga);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
