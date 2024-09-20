const apiUrl = "https://api.coinpaprika.com/v1";

export const getCoinList = async () => {
  const response = await fetch(`${apiUrl}/coins`);

  return await response.json();
};

export const getGlobalData = async () => {
  const response = await fetch(`${apiUrl}/global`);

  return await response.json();
};