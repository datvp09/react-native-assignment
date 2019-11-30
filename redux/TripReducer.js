import {createActions, handleActions} from 'redux-actions';

export const {saveTrip} = createActions('SAVE_TRIP');

const initialState = {
  trips: [],
};

const reducer = handleActions(
  {
    SAVE_TRIP: (state, action) => ({
      ...state,
      trips: [...state.trips, action.payload],
    }),
  },
  initialState,
);

export default reducer;
