import moment from 'moment';

const toRequestUnix = (momentObj) => momentObj.add(20, 'second').utc().unix();

export const periods = [
    {
        label: "1d",
        start: () => toRequestUnix(moment().subtract(1, 'day')),
        interval: "1h",
        format: "HH:mm",
    },

    {
        label: "7d",
        start: () => toRequestUnix(moment().subtract(7, 'days')),
        interval: "1d",
        format: "DD MMM",
    },
    {
        label: "30d",
        start: () => toRequestUnix(moment().subtract(30, 'days')),
        interval: "1d",
        format: "DD MMM",
    },
    {
        label: "1q",
        start: () => toRequestUnix(moment().subtract(90, 'days')),
        interval: "7d",
        format: "DD MMM",
    },
    {
        label: "1y",
        start: () => toRequestUnix(moment().subtract(365, 'days')),
        interval: "7d",
        format: "DD MMM",
    },
    {
        label: "YTD",
        start: () => toRequestUnix(moment().startOf('year')),
        interval: "7d",
        format: "DD MMM",
    },
]