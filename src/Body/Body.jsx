import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
import SearchResult from "./SearchResult";
// import ChartModal from './CoinPage/ChartModal';
import Converter from "./CoinPage/Converter";
import { Routes, Route } from "react-router-dom";
import CoinPage from "./CoinPage/CoinPage";
import ErrorModal from "./ErrorModal";

function Body(props) {
  return (
    <>
      <GlobalData />
      <Converter />
      <Routes>
        <Route path="/" element={<ListCoins {...props} />} />
        <Route path="/coin/:coinId" element={<CoinPage {...props} />} />
        <Route path="/search/:q" element={<SearchResult />} />
      </Routes>
      <ErrorModal />
    </>
  );
}

export default Body;
