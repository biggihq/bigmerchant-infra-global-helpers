import moment from "moment";

export const DateUtils = {
    TODAY_START_DATE: moment().startOf('day').toDate(),
    TODAY_END_DATE: moment().endOf('day').toDate(),
    WEEK_START_DATE: moment().startOf('week').toDate(),
    WEEK_END_DATE: moment().endOf('week').toDate(),
    MONTH_START_DATE: moment().startOf('month').toDate(),
    MONTH_END_DATE: moment().endOf('month').toDate(),
    LAST_MONTH_START_DATE: moment().subtract(1, 'month').startOf('month').toDate(),
    LAST_MONTH_END_DATE: moment().subtract(1, 'month').endOf('month').toDate(),
    LAST_3_MONTHS_START_DATE: moment().subtract(3, 'month').startOf('month').toDate(),
    LAST_3_MONTHS_END_DATE: moment().endOf('month').toDate(),
    LAST_YEAR_START_DATE: moment().subtract(1, 'year').startOf('year').toDate(),
    LAST_YEAR_END_DATE: moment().subtract(1, 'year').endOf('year').toDate(),
    THIS_YEAR_START_DATE: moment().startOf('year').toDate(),
    THIS_YEAR_END_DATE: moment().endOf('year').toDate()
};