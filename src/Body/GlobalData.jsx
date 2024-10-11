import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getGlobalData } from "../services/api";
import ErrorModal from "./ErrorModal";
import { BodyContext } from "../providers/BodyProvider";

import "./hero.scss";

function GlobalData() {
  const [globalData, setGlobalData] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState(null);

  const { exchangeList } = React.useContext(BodyContext);

  React.useEffect(() => {
    getGlobalData()
      .then(setGlobalData)
      .catch((error) =>
        setErrorMessage(
          "Coin List is not available. Error: " + error.toString()
        )
      );
    // .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <section className="hero-section">
        <Row>
          <div className="hero-container">
            {/* Основная секция, которая занимает 2/3 ширины */}
            <div className="hero-content">
              <h1>
                Crypto community and
                <span className="highlighted-word">Knowledge </span>sharing
              </h1>
              {/* <p className="responsive-text">
          Join educators who are already creating courses, teaching students, and earning from their expertise. 
          </p> */}
              <div className="new-block">
                <p className="new-block-text">
                  Our platform offers everything you need to learn about
                  cryptocurrency. Don't miss the chance to be part of a growing
                  community!
                </p>

                <div className="global-data">

                <div>
                BTC Dominance:<p className="highlighted-item">{globalData.bitcoin_dominance_percentage} %</p>
                </div>

                <div>
                Vol 24h:<p className="highlighted-item">{globalData.volume_24h_usd}</p>
                </div>

                <div>
                Market Cap:<p className="highlighted-item">{globalData.market_cap_usd}</p>
                </div>


                </div>

                
              </div>

              <button className="btn-primary">Get Started</button>
            </div>

            {/* Вторая секция, которая занимает 1/3 ширины */}
            <div className="hero-image">
              {/* <Table >
        <tbody>
          <tr>
            <td>BTC Dominance</td>
            <td>{globalData.bitcoin_dominance_percentage} %</td>
          </tr>
          <tr>
            <td>Vol 24h</td>
            <td>{globalData.volume_24h_usd}</td>
          </tr>
          <tr>
            <td>Market Cap</td>
            <td>{globalData.market_cap_usd}</td>
          </tr>
          <tr>
            <td>EXCHANGES COUNT</td>
            <td>{exchangeList.length}</td>
          </tr>
        </tbody>
        
      </Table> */}

              {/* Вы можете добавить сюда изображение или любой другой контент */}
              {/* <img src="https://via.placeholder.com/400" alt="Placeholder Image" /> */}
              {/* <img src="cryptoImage" alt="Hero" /> */}
              {/* <img
            src={cryptoImage}
            alt="About Our Platform"
            className="about-image"
          /> */}
            </div>
          </div>
        </Row>
        <ErrorModal
          errorMessage={errorMessage}
          show={!!errorMessage}
          handleClose={() => setErrorMessage(null)}
        />
      </section>
    </>
  );
}

export default GlobalData;
