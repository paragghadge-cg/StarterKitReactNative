import { ADD_USER_DATA } from './ActionTypes';

/**
 *
 * @param dispatch is function
 * @param data payload data to sent to reducer
 */
export const addUserData = (dispatch: any, data: any) => {
    dispatch({
        type: ADD_USER_DATA,
        payload: data
    });
};
