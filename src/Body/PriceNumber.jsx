import { NumericFormat } from "react-number-format";
const PriceNumber = ({ value }) => {
  return (
    <NumericFormat value={value} thousandSeparator=" " displayType="text" prefix="$"/>
  );
};
export default PriceNumber;