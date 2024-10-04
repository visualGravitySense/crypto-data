import React from 'react'
import { getExchangeList } from '../services/api';

export const BodyContext = React.createContext();

function BodyProvider({ children }) {
    const [exchangeList, setExchangeList] = React.useState([]);

    React.useEffect(() => {
        getExchangeList().then(setExchangeList);
    }, []);

    const context = {
        exchangeList,
    };

    console.log(exchangeList);
    

    return (<BodyContext.Provider value={context}>{children}</BodyContext.Provider>)
    
}

export default BodyProvider;