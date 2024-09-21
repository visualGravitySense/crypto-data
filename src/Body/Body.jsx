import GlobalData from './GlobalData';
import ListCoins from './ListCoins';
import ChartModal from './CoinPage/ChartModal';
import CoinPage from './CoinPage/CoinPage';


function Body() {
    return (
        <>
            <GlobalData />
            <ListCoins />
            <ChartModal />
            <CoinPage />
            
        </>
    );
}

export default Body;