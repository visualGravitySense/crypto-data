import { NumericFormat } from "react-number-format";
const PriceNumber = ({ value, symbol }) => {
  return (
    <NumericFormat value={value} thousandSeparator=" " displayType="text" prefix={symbol}  />
  );
};
export default PriceNumber;