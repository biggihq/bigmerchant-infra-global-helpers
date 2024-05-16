import * as OrderHelpers from "./order.helpers"
import * as CurrencyHelpers from "./currency"
import * as ProductHelpers from "./product.helpers"
import * as DateRangeHelpers from "./date_range.helper"
import * as DateHelpers from "./date"
import * as Statics from "./statics"
import * as FormHelpers from "./form.helpers"
export * from "./enums"

const TimeInMilliseconds = Object.freeze({
    SECOND: 1000,
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000,
});

export {
    OrderHelpers,
    CurrencyHelpers,
    ProductHelpers,
    DateRangeHelpers,
    DateHelpers,
    TimeInMilliseconds,
    Statics,FormHelpers
}