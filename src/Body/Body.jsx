import GlobalData from './GlobalData';
import ListCoins from './ListCoins';
import SearchResult from './SearchResult';
// import ChartModal from './CoinPage/ChartModal';
import CoinPage from './CoinPage/CoinPage';
import Converter from './CoinPage/Converter';


function Body({ selectedCurrency }) {
    return (
        <>
            <GlobalData />
            <SearchResult />
            <Converter />
            <ListCoins selectedCurrency={selectedCurrency} />
            {/* <ChartModal /> */}
            <CoinPage selectedCurrency={selectedCurrency}/>
            
            
        </>
    );
}

export default Body;