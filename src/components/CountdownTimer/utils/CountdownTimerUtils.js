import dayjs from 'dayjs'

export function getRemaningTimeUnitMsTimestamp(timestamp) {
    const timeStampDayjs = dayjs(timestamp);
    const nowDayjs = dayjs();

    return {
        seconds: getRemaningSeconds(nowDayjs, timeStampDayjs),
        minutes: getRemaningMinutes(nowDayjs, timeStampDayjs),
        hours: getRemaningHours(nowDayjs, timeStampDayjs),

    }
}

function getRemaningSeconds (nowDayjs, timeStampDayjs){
    const seconds = timeStampDayjs.diff(nowDayjs, 'seconds') % 60
    return seconds;
}

function getRemaningMinutes (nowDayjs, timeStampDayjs){
    const minutes = timeStampDayjs.diff(nowDayjs, 'minutes') % 60
    return minutes;
}

function getRemaningHours (nowDayjs, timeStampDayjs){
    const hours = timeStampDayjs.diff(nowDayjs, 'hours')
    return hours;
}