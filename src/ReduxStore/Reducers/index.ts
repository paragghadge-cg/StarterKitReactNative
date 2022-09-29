import { combineReducers } from 'redux';
import { CLEAR_APP_STATE } from '../../Actions/ActionTypes';

import GlobalReducers from './GlobalReducers';

/**
 * Add All reducers in object combineReducers which are created
 */
const AppReducers = combineReducers({
    globalReducer: GlobalReducers
});

/**
 *
 * @param state
 * @param action
 * @returns app reducer with current state is CLEAR_APP_STATE action is not dispatched
 * if action CLEAR_APP_STATE get's hit it will return all initial state reducers value
 *
 */
const RootReducer = (state: any, action: any) => {
    if (action.type === CLEAR_APP_STATE) {
        return AppReducers(undefined, action);
    }
    return AppReducers(state, action);
};
export default RootReducer;
