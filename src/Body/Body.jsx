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

import BlogPost from "./BlogPost";
import PostComponent from "./PostComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Body(props) {
  return (
    <BodyProvider>
      
      <GlobalData />
      <HistoryLog />
      {/* <Converter /> */}

      

      
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
