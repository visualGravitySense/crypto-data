import React from "react";
import { Link } from "react-router-dom";
import { BodyContext } from "../providers/BodyProvider";

function HistoryLog () {
    const { historyLog } = React.useContext(BodyContext);
    return historyLog.map((log) => (
        <Link key={log.id} to ={`/coin/${log.id}`}>
            {log.name}
        </Link>
        ));
}

export default HistoryLog;