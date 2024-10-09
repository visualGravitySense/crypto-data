import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
import SearchResult from "./SearchResult";
// import ChartModal from './CoinPage/ChartModal';

import { Routes, Route } from "react-router-dom";
import CoinPage from "./CoinPage/CoinPage";
import ErrorModal from "./ErrorModal";
import BodyProvider from "../providers/BodyProvider";
import ExchangeList from "./ExchangeList";
import HistoryLog from "./HistoryLog";
import ComparePage from "./ComparePage";
import CourseDetail from "../Body/Courses/CourseDetail";
import PromoBanners from "./PromoBanners"; 

function Body(props) {
  return (
    <BodyProvider>
      <HistoryLog />
      <GlobalData />
      {/* <Converter /> */}
      <Routes>
        <Route path="/" element={<ListCoins {...props} />} />

        <Route path="/coin/:coinId" element={<CoinPage {...props} />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/search/:q" element={<SearchResult />} />
        <Route path="/exchange" element={<ExchangeList />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
      <PromoBanners />
      <ErrorModal />
    </BodyProvider>
  );
}

export default Body;
