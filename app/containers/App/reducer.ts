import { ContainerState, ContainerActions } from './types';
import ActionTypes from './actionTypes';

// The initial state of the App
export const initialState: ContainerState = {
  currentUser: {
    firstName: '',
    lastName: '',
    gender: 'male',
    savedItems: [],
  },
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
  switch (action.type) {
    case ActionTypes.SESSION_VERIFY:
      return {
        currentUser: state.currentUser,
      };
    case ActionTypes.SESSION_VERIFY_SUCCESS:
      return {
        currentUser: action.payload.data,
      };
    case ActionTypes.SESSION_VERIFY_FAILED:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ...rest } = state;
      return {
        ...rest,
      };
    default:
      return state;
  }
}

export default appReducer;
