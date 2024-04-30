"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOrderPaymentReference = exports.generateOrderPaymentReferenceOneTime = exports.sumOfOrderItems = exports.sumOfPurchaseItems = void 0;
var TEnums;
(function (TEnums) {
    TEnums["OrderTransactionRefPrefix"] = "OID";
    TEnums["OrderTRefSeperator"] = "-";
})(TEnums || (TEnums = {}));
const sumOfPurchaseItems = (purchase) => {
    let sum = purchase.items.reduce((c, e) => {
        var _a, _b;
        return (_b = c + ((_a = e.quantity) !== null && _a !== void 0 ? _a : 1) * e.amount) !== null && _b !== void 0 ? _b : 0;
    }, 0);
    return sum;
};
exports.sumOfPurchaseItems = sumOfPurchaseItems;
const sumOfOrderItems = (order) => {
    let sum = order.items.reduce((c, e) => {
        var _a, _b;
        return (_b = c + ((_a = e.quantity) !== null && _a !== void 0 ? _a : 1) * e.amount) !== null && _b !== void 0 ? _b : 0;
    }, 0);
    return sum;
};
exports.sumOfOrderItems = sumOfOrderItems;
const generateOrderPaymentReferenceOneTime = (order_id) => {
    let ref = `${TEnums.OrderTransactionRefPrefix}${TEnums.OrderTRefSeperator}${order_id}`;
    return ref;
};
exports.generateOrderPaymentReferenceOneTime = generateOrderPaymentReferenceOneTime;
const generateOrderPaymentReference = (order_id, random_postfix) => {
    let ref = `${TEnums.OrderTransactionRefPrefix}${TEnums.OrderTRefSeperator}${order_id}${TEnums.OrderTRefSeperator}${random_postfix}`;
    return ref;
};
exports.generateOrderPaymentReference = generateOrderPaymentReference;
