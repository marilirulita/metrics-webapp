// Actions
const LOAD = 'metrics-webapp/financial/LOAD';

const initialState = [];

// Action Creators
const loadFinancialData = (data) => ({ type: LOAD, data });

const url1 = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=739ea7778d9cd30c6b10af22ad6a6b1a';

export const getFinancialData = () => async (dispatch) => {
  const getData = await fetch(url1);
  const getDataJson = await getData.json();
  dispatch(loadFinancialData(getDataJson));
};

// Reducer
const financialReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return action.data;
    default:
      return state;
  }
};

export default financialReducer;
