import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
    userData: {}
};

const globalSlice = createSlice({
    name: 'globalReducer',
    initialState: INITIAL_STATE,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        addUserData: (state, action) => {
            console.log(action)
            state.userData = action.payload;
        }
    }
});

// destructure actions and reducer from the slice (or you can access as globalSlice.actions)
const { actions, reducer } = globalSlice;

// export individual action creator functions
export const { addUserData } = actions;

export default reducer;
