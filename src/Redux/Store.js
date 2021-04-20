import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";

import {getMyClassReducer, getMyScoreReducer} from './Reducers/GetMyClass'
import {getAllCoursesReducer} from './Reducers/GetAllCourses'
import getStudentProgressReducer from './Reducers/GetStudentProgress'
import getMyClassFasilitatorReducer from './Reducers/GetMyClassFasilitator'

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reducers = combineReducers({
  getMyClassReducer,
  getMyScoreReducer,
  getAllCoursesReducer,
  getStudentProgressReducer,
  getMyClassFasilitatorReducer
});
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
