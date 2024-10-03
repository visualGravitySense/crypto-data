import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./services/store";

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/crypto-data">
        <Provider store={store}>
            <App /> 

        </Provider>
        
    </BrowserRouter>

);