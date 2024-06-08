"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormHelpers = exports.Statics = exports.TimeInMilliseconds = exports.DateHelpers = exports.DateRangeHelpers = exports.ProductHelpers = exports.CurrencyHelpers = exports.OrderHelpers = void 0;
const OrderHelpers = __importStar(require("./order.helpers"));
exports.OrderHelpers = OrderHelpers;
const CurrencyHelpers = __importStar(require("./currency"));
exports.CurrencyHelpers = CurrencyHelpers;
const ProductHelpers = __importStar(require("./product.helpers"));
exports.ProductHelpers = ProductHelpers;
const DateRangeHelpers = __importStar(require("./date_range.helper"));
exports.DateRangeHelpers = DateRangeHelpers;
const DateHelpers = __importStar(require("./date"));
exports.DateHelpers = DateHelpers;
const Statics = __importStar(require("./statics"));
exports.Statics = Statics;
const FormHelpers = __importStar(require("./form.helpers"));
exports.FormHelpers = FormHelpers;
__exportStar(require("./enums"), exports);
const TimeInMilliseconds = Object.freeze({
    SECOND: 1000,
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000,
});
exports.TimeInMilliseconds = TimeInMilliseconds;
