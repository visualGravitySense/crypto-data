import React from 'react'
import { getExchangeList } from '../services/api';

export const BodyContext = React.createContext();

function BodyProvider({ children }) {
    const [historyLog, setHistoryLog] = React.useState([]);
    const [exchangeList, setExchangeList] = React.useState([]);
    const [compareList, setCompareList] = React.useState([]);

    React.useEffect(() => {
        getExchangeList().then(setExchangeList);
    }, []);

    const context = {
        compareList,
        setCompareList,
        exchangeList,
        historyLog,
        setHistoryLog,
    };

    console.log(exchangeList);
    

    return (<BodyContext.Provider value={context}>{children}</BodyContext.Provider>)
    
}

export default BodyProvider;