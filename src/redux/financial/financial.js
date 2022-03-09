// Actions
const LOAD = 'metrics-webapp/financial/LOAD';

const initialState = [];

// Reducer
const financialReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return state;
    default:
      return state;
  }
};

// Action Creators
export const loadFinancialData = () => ({ type: LOAD });

// side effects, only as applicable
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }

export default financialReducer;
