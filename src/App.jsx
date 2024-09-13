import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";
import ListCoins from "./ListCoins";
import CoinPage from "./CoinPage";
import GlobalData from "./GlobalData";
import SearchResult from "./SearchResult";
import Converter from "./Converter";

function App() {
  return (
    <Container>
      <Navigation />
      <GlobalData />
      {/* <ListCoins /> */}
      {/* <CoinPage /> */}
      <SearchResult />
      <Converter />
    </Container>
  );
}

export default App;
