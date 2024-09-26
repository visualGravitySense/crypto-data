import { NumericFormat } from "react-number-format";
const PriceNumber = ({ value, symbol = '', suffix = '', fixedDecimalScale = true }) => {
  return (
    <NumericFormat value={value} thousandSeparator=" " displayType="text" prefix={`${symbol} `}
      suffix={suffix} fixedDecimalScale={fixedDecimalScale}    
    />
  );
};
export default PriceNumber;