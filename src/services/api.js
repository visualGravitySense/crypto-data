const apiUrl = "https://api.coinpaprika.com/v1";

export const getCoinList = async (currency) => {
  const params = new URLSearchParams({
    quotes: currency,
  });
  const response = await fetch(`${apiUrl}/tickers?${params}`);

  return await response.json();
};

export const getGlobalData = async () => {
  const response = await fetch(`${apiUrl}/global`);

  return await response.json();
};

export const getCoinById = async (id, currency) => {
  const params = new URLSearchParams({
    quotes: currency,
  });

  const response = await fetch(`${apiUrl}/tickers/${id}?${params}`);

  return await response.json();
};

export const getHistoricalData = async ({ id, currency, start, interval }) => {
  const params = new URLSearchParams({
    quotes: currency,
    start,
    interval,
  });

  const response = await fetch(`${apiUrl}/tickers/${id}/historical?${params}`);

  return await response.json();
};

export const getSearch = async (q) => {
  const params = new URLSearchParams({
    q,
  });
  const response = await fetch(`${apiUrl}/search/?${params}`);

  return await response.json();
}