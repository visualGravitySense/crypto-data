import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";
import ListCoins from "./ListCoins";
import CoinPage from "./CoinPage";
import SearchResults from "./SearchResults";
import GlobalData from "./GlobalData";

function App() {
  return (
      <Container>
      <Navigation />
      <GlobalData />
      <ListCoins />
      <CoinPage />
      <SearchResults/> 
    </Container>        
  );
}

export default App;
