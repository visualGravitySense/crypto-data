import GlobalData from './GlobalData';
import ListCoins from './ListCoins';
import SearchResult from './SearchResult';
// import ChartModal from './CoinPage/ChartModal';
import Converter from './CoinPage/Converter';
import { Routes, Route } from 'react-router-dom';
import CoinPage from './CoinPage/CoinPage';

function Body(props) {
    return (
        <>
            <GlobalData />

            <Routes>
                <Route path="/" element={<ListCoins {...props} /> } />
                <Route path="/coin/:coinId" element={<CoinPage {...props} />} />
                <Route path="/search/:q" element={<SearchResult />} />
            </Routes>
            
            
            
            
        </>
    );
}

export default Body;