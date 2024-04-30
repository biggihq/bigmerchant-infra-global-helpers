"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReportDateRange = void 0;
const enums_1 = require("./enums");
const moment = require('moment');
function getReportDateRange(timeRange) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    switch (timeRange) {
        case enums_1.ReportTimeRange.YESTERDAY: {
            const yesterdayStart = moment().subtract(1, 'day').startOf('day');
            const yesterdayEnd = moment().subtract(1, 'day').endOf('day');
            return [yesterdayStart.format(), yesterdayEnd.format()];
        }
        case enums_1.ReportTimeRange.TODAY: {
            const todayStart = moment().startOf('day');
            const todayEnd = moment().endOf('day');
            return [todayStart.format(), todayEnd.format()];
        }
        case enums_1.ReportTimeRange.THIS_WEEK: {
            const thisWeekStart = moment().startOf('week');
            const thisWeekEnd = moment().endOf('week');
            return [thisWeekStart.format(), thisWeekEnd.format()];
        }
        case enums_1.ReportTimeRange.LAST_WEEK: {
            const lastWeekStart = moment().subtract(1, 'week').startOf('week');
            const lastWeekEnd = moment().subtract(1, 'week').endOf('week');
            return [lastWeekStart.format(), lastWeekEnd.format()];
        }
        case enums_1.ReportTimeRange.LAST_MONTH: {
            const lastMonthStart = moment().subtract(1, 'month').startOf('month');
            const lastMonthEnd = moment().subtract(1, 'month').endOf('month');
            return [lastMonthStart.format(), lastMonthEnd.format()];
        }
        case enums_1.ReportTimeRange.THIS_MONTH: {
            const thisMonthStart = moment().startOf('month');
            const thisMonthEnd = moment().endOf('month');
            return [thisMonthStart.format(), thisMonthEnd.format()];
        }
        case enums_1.ReportTimeRange.THIS_QUARTER: {
            const thisQuarterStart = moment().startOf('quarter');
            const thisQuarterEnd = moment().endOf('quarter');
            return [thisQuarterStart.format(), thisQuarterEnd.format()];
        }
        case enums_1.ReportTimeRange.LAST_QUARTER: {
            const lastQuarterStart = moment()
                .subtract(1, 'quarter')
                .startOf('quarter');
            const lastQuarterEnd = moment().subtract(1, 'quarter').endOf('quarter');
            return [lastQuarterStart.format(), lastQuarterEnd.format()];
        }
        case enums_1.ReportTimeRange.THIS_YEAR: {
            const thisYearStart = moment().startOf('year');
            const thisYearEnd = moment().endOf('year');
            return [thisYearStart.format(), thisYearEnd.format()];
        }
        case enums_1.ReportTimeRange.LAST_YEAR: {
            const lastYearStart = moment().subtract(1, 'year').startOf('year');
            const lastYearEnd = moment().subtract(1, 'year').endOf('year');
            return [lastYearStart.format(), lastYearEnd.format()];
        }
        case enums_1.ReportTimeRange.JANUARY:
            return [
                moment().month(0).startOf('month').format(),
                moment().month(0).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.FEBRUARY:
            return [
                moment().month(1).startOf('month').format(),
                moment().month(1).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.MARCH:
            return [
                moment().month(2).startOf('month').format(),
                moment().month(2).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.APRIL:
            return [
                moment().month(3).startOf('month').format(),
                moment().month(3).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.MAY:
            return [
                moment().month(4).startOf('month').format(),
                moment().month(4).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.JUNE:
            return [
                moment().month(5).startOf('month').format(),
                moment().month(5).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.JULY:
            return [
                moment().month(6).startOf('month').format(),
                moment().month(6).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.AUGUST:
            return [
                moment().month(7).startOf('month').format(),
                moment().month(7).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.SEPTEMBER:
            return [
                moment().month(8).startOf('month').format(),
                moment().month(8).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.OCTOBER:
            return [
                moment().month(9).startOf('month').format(),
                moment().month(9).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.NOVEMBER:
            return [
                moment().month(10).startOf('month').format(),
                moment().month(10).endOf('month').format(),
            ];
        case enums_1.ReportTimeRange.DECEMBER:
            return [
                moment().month(11).startOf('month').format(),
                moment().month(11).endOf('month').format(),
            ];
        // Add more cases for other time ranges as needed
        default: {
            const todayStart = new Date(today);
            todayStart.setHours(1, 0, 0, 0); // Start at 6:00 AM
            const todayEnd = new Date(today);
            todayEnd.setHours(24, 0, 0, 0); // End at 10:00 PM
            return [todayStart, todayEnd];
        }
    }
}
exports.getReportDateRange = getReportDateRange;
