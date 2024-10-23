import GlobalData from "./GlobalData";
import ListCoins from "./ListCoins";
import SearchResult from "./SearchResult";
// import ChartModal from './CoinPage/ChartModal';

// import { Routes, Route } from "react-router-dom";
import CoinPage from "./CoinPage/CoinPage";
import ErrorModal from "./ErrorModal";
import BodyProvider from "../providers/BodyProvider";
import ExchangeList from "./ExchangeList";
import HistoryLog from "./HistoryLog";
import ComparePage from "./ComparePage";
import CourseDetail from "../Body/Courses/CourseDetail";
import PromoBanners from "./PromoBanners"; 
import UserDetail from "../Body/Users/UserDetail"; 
import Dashboard from "../Body/Dashboards/Dashboard"; 
import Courses from "../Body/Courses/Courses"; 
// import Converter from "./CoinPage/Converter"; 

import NewCoins from "../Body/TopPerformers/NewCoins"; 
import GlobalStats from "../Body/TopPerformers/GlobalStats"; 
import TopPerformesrs from "../Body/TopPerformers/TopPerformers"; 
import TopExchanges from "../Body/TopPerformers/TopExchanges"; 

import PriceAlerts from "../Body/PriceAlerts/PriceAlerts"; 
import NewsFeed from "../Body/PriceAlerts/NewsFeed"; 
import TrendingCoins from "../Body/PriceAlerts/TrendingCoins"; 
import MarketDominanceChart from "../Body/PriceAlerts/MarketDominanceChart"; 
import HistoricalChart from "../Body/PriceAlerts/HistoricalChart"; 


import BlogPost from "./BlogPost";
import PostComponent from "./PostComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './Body.scss';

function Body(props) {
  return (
    <BodyProvider>
      
      <GlobalData />
      <HistoryLog />
      {/* <Converter /> */}

      <PriceAlerts />
      <NewsFeed />
      <TrendingCoins />
      {/* <MarketDominanceChart /> */}
      {/* <HistoricalChart /> */}

      <NewCoins />
      <TopExchanges />
      <TopPerformesrs />
      <GlobalStats />

      
      <Routes>
        <Route path="/" element={<ListCoins {...props} />} />

        <Route path="/coin/:coinId" element={<CoinPage {...props} />} />
        <Route path="/search/:q" element={<SearchResult />} />
        <Route path="/exchange" element={<ExchangeList />} />
        <Route path="/compare" element={<ComparePage />} />
        
        <Route path="/posts/:postId" element={<BlogPost />} />{" "}

        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/dashboards/:userId" element={<Dashboard />} />
        

      </Routes>

      <PromoBanners />
      
      
      {/* <BlogPost fileName="blog-post-1" /> */}
      <ErrorModal />
    </BodyProvider>
  );
}

export default Body;
