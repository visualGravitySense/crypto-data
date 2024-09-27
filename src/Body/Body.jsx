import GlobalData from './GlobalData';
import ListCoins from './ListCoins';
import SearchResult from './SearchResult';
// import ChartModal from './CoinPage/ChartModal';
import Converter from './CoinPage/Converter';


function Body(props) {
    return (
        <>
            <GlobalData />
            <SearchResult />
            <Converter />
            <ListCoins {...props} />
            {/* <ChartModal /> */}
            
            
            
        </>
    );
}

export default Body;