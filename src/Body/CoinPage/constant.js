import moment from 'moment';

export const periods = [
    {
        label: "1d",
        start: moment().subtract(1, 'day').add(10, 'second').utc().unix(),
        interval: "1h"
    },

    {
        label: "7d",
        start: moment().subtract(7, 'days').add(10, 'second').utc().unix(),
        interval: "1d"
    },
    {
        label: "30d",
        start: moment().subtract(30, 'days').add(10, 'second').utc().unix(),
        interval: "1d"
    },
    {
        label: "1q",
        start: moment().subtract(3, 'months').add(10, 'second').utc().unix(),
        interval: "7d"
    },
    {
        label: "1y",
        start: moment().subtract(1, 'year').add(10, 'second').utc().unix(),
        interval: "7d"
    },
    {
        label: "YTD",
        start: moment().startOf('year').add(10, 'second').utc().unix(),
        interval: "7d"
    },
]