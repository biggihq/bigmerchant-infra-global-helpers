import { DateRange } from "./enums";

const moment = require('moment');
export function getReportDateRange(timeRange: DateRange): [Date, Date] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);


  switch (timeRange) {
    case "yesterday": {
      const yesterdayStart = moment().subtract(1, 'day').startOf('day');
      const yesterdayEnd = moment().subtract(1, 'day').endOf('day');
      return [yesterdayStart.format(), yesterdayEnd.format()];
    }

    case "today": {
      const todayStart = moment().startOf('day');
      const todayEnd = moment().endOf('day');
      return [todayStart.format(), todayEnd.format()];
    }

    case "this-week": {
      const thisWeekStart = moment().startOf('week');
      const thisWeekEnd = moment().endOf('week');
      return [thisWeekStart.format(), thisWeekEnd.format()];
    }

    case "last-week": {
      const lastWeekStart = moment().subtract(1, 'week').startOf('week');
      const lastWeekEnd = moment().subtract(1, 'week').endOf('week');

      return [lastWeekStart.format(), lastWeekEnd.format()];
    }

    case "last-month": {
      const lastMonthStart = moment().subtract(1, 'month').startOf('month');
      const lastMonthEnd = moment().subtract(1, 'month').endOf('month');

      return [lastMonthStart.format(), lastMonthEnd.format()];
    }

    case "this-month": {
      const thisMonthStart = moment().startOf('month');
      const thisMonthEnd = moment().endOf('month');
      return [thisMonthStart.format(), thisMonthEnd.format()];
    }

    case "this-quarter": {
      const thisQuarterStart = moment().startOf('quarter');
      const thisQuarterEnd = moment().endOf('quarter');

      return [thisQuarterStart.format(), thisQuarterEnd.format()];
    }

    case "last-quarter": {
      const lastQuarterStart = moment()
        .subtract(1, 'quarter')
        .startOf('quarter');
      const lastQuarterEnd = moment().subtract(1, 'quarter').endOf('quarter');

      return [lastQuarterStart.format(), lastQuarterEnd.format()];
    }

    case "this-year": {
      const thisYearStart = moment().startOf('year');
      const thisYearEnd = moment().endOf('year');
      return [thisYearStart.format(), thisYearEnd.format()];
    }



    case 'january':
      return [
        moment().month(0).startOf('month').format(),
        moment().month(0).endOf('month').format(),
      ];

    case "february":
      return [
        moment().month(1).startOf('month').format(),
        moment().month(1).endOf('month').format(),
      ];

    case "march":
      return [
        moment().month(2).startOf('month').format(),
        moment().month(2).endOf('month').format(),
      ];

    case "april":
      return [
        moment().month(3).startOf('month').format(),
        moment().month(3).endOf('month').format(),
      ];

    case "may":
      return [
        moment().month(4).startOf('month').format(),
        moment().month(4).endOf('month').format(),
      ];

    case "june":
      return [
        moment().month(5).startOf('month').format(),
        moment().month(5).endOf('month').format(),
      ];

    case "july":
      return [
        moment().month(6).startOf('month').format(),
        moment().month(6).endOf('month').format(),
      ];

    case "august":
      return [
        moment().month(7).startOf('month').format(),
        moment().month(7).endOf('month').format(),
      ];

    case "september":
      return [
        moment().month(8).startOf('month').format(),
        moment().month(8).endOf('month').format(),
      ];

    case "october":
      return [
        moment().month(9).startOf('month').format(),
        moment().month(9).endOf('month').format(),
      ];

    case "november":
      return [
        moment().month(10).startOf('month').format(),
        moment().month(10).endOf('month').format(),
      ];

    case "december":
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
