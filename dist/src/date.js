"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
const moment_1 = __importDefault(require("moment"));
exports.DateUtils = {
    TODAY_START_DATE: (0, moment_1.default)().startOf('day').toDate(),
    TODAY_END_DATE: (0, moment_1.default)().endOf('day').toDate(),
    WEEK_START_DATE: (0, moment_1.default)().startOf('week').toDate(),
    WEEK_END_DATE: (0, moment_1.default)().endOf('week').toDate(),
    MONTH_START_DATE: (0, moment_1.default)().startOf('month').toDate(),
    MONTH_END_DATE: (0, moment_1.default)().endOf('month').toDate(),
    LAST_MONTH_START_DATE: (0, moment_1.default)().subtract(1, 'month').startOf('month').toDate(),
    LAST_MONTH_END_DATE: (0, moment_1.default)().subtract(1, 'month').endOf('month').toDate(),
    LAST_3_MONTHS_START_DATE: (0, moment_1.default)().subtract(3, 'month').startOf('month').toDate(),
    LAST_3_MONTHS_END_DATE: (0, moment_1.default)().endOf('month').toDate(),
    LAST_YEAR_START_DATE: (0, moment_1.default)().subtract(1, 'year').startOf('year').toDate(),
    LAST_YEAR_END_DATE: (0, moment_1.default)().subtract(1, 'year').endOf('year').toDate(),
    THIS_YEAR_START_DATE: (0, moment_1.default)().startOf('year').toDate(),
    THIS_YEAR_END_DATE: (0, moment_1.default)().endOf('year').toDate()
};
