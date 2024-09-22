import GlobalData from './GlobalData';
import ListCoins from './ListCoins';
import SearchResult from './SearchResult';
import ChartModal from './CoinPage/ChartModal';
import CoinPage from './CoinPage/CoinPage';
import Converter from './CoinPage/Converter';

function Body() {
    return (
        <>
            <GlobalData />
            <ListCoins />
            <Converter />
            <ChartModal />
            <CoinPage />
            <SearchResult />
            
        </>
    );
}

export default Body;