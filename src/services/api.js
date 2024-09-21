// API.js
const apiUrl = "https://api.coinpaprika.com/v1";

export const getCoinList = async () => {
  const response = await fetch(`${apiUrl}/coins`);

  return await response.json();
};

export const getGlobalData = async () => {
  const response = await fetch(`${apiUrl}/global`);

  return await response.json();
};


// Bitcoin data
export const getBitcoin = async () => {
  const response = await fetch(`${apiUrl}/coins/btc-bitcoin`);
  
  
  if (!response.ok) {
    throw new Error('Failed to fetch Bitcoin data');
  }
  
  return await response.json();
};
