export const compareTableData = (currency) => [
  {
    label: "Coin name",
    path: "name",
  },
  {
    label: "Rank",
    path: "rank",
  },
  {
    label: "Symbol",
    path: "symbol",
  },
  {
    label: "Price",
    path: `quotes.${currency}.price`,
  },
];

