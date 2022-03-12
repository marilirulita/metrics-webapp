import financialReducer from "../redux/financial/financial";

  test("When the action is LOAD, the store will have the data added from the source", () => {
    const fetchData = [
      {
        beta: 1.1855,
        companyName: "Apple Inc.",
        country: "US",
        exchange: "Nasdaq Global Select",
        exchangeShortName: "NASDAQ",
        industry: "Consumer Electronics",
        isActivelyTrading: true,
        isEtf: false,
        lastAnnualDividend: 0.88,
        marketCap: 2525100769280,
        price: 154.73,
        sector: "Technology",
        symbol: "AAPL",
        volume: 97572501,
      },
    ];

    const LOAD = "metrics-webapp/financial/LOAD";
    const action = { type: LOAD, data: fetchData };
    const result = financialReducer([], action);
    expect(result).toEqual(fetchData);
  });
