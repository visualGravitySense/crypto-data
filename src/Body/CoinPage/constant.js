import moment from 'moment';

export const periods = [
    {
        label: "1d",
        start: moment().subtract(1, 'day').add(10, 'second').utc().unix(),
        interval: "1h"
    },

    {
        label: "7d",
        start: null,
        interval: "1d"
    },
    {
        label: "30d",
        start: null,
        interval: "1d"
    },
    {
        label: "1q",
        start: null,
        interval: "7d"
    },
    {
        label: "1y",
        start: null,
        interval: "7d"
    },
    {
        label: "YTD",
        start: null,
        interval: "7d"
    },
]