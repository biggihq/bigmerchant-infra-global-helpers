"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePositiveNumber = exports.validateOrderItems = exports.validatePurchaseItems = void 0;
const validatePurchaseItems = (item) => {
    let errors = {};
    const quantityError = (0, exports.validatePositiveNumber)(item.quantity, 'Quantity', 1);
    if (quantityError) {
        errors.quantity = quantityError;
    }
    const amountError = (0, exports.validatePositiveNumber)(item.amount, 'Amount', 1);
    if (amountError) {
        errors.amount = amountError;
    }
    const salePriceError = (0, exports.validatePositiveNumber)(item.sale_price, "Sale price", 0);
    if (salePriceError) {
        errors.sale_price = salePriceError;
    }
    return Object.keys(errors).length > 0 ? errors : null;
};
exports.validatePurchaseItems = validatePurchaseItems;
const validateOrderItems = (item) => {
    let errors = {};
    const quantityError = (0, exports.validatePositiveNumber)(item.quantity, 'Quantity', 0);
    if (quantityError) {
        errors.quantity = quantityError;
    }
    const amountError = (0, exports.validatePositiveNumber)(item.amount, 'Amount', 0);
    if (amountError) {
        errors.amount = amountError;
    }
    return Object.keys(errors).length > 0 ? errors : null;
};
exports.validateOrderItems = validateOrderItems;
const validatePositiveNumber = (value, label, leastNumber) => {
    if (typeof value === 'string') {
        return `${label} must be a valid number`;
    }
    if (Number.isNaN(value)) {
        return `${label} must be a valid number`;
    }
    if (!(value >= leastNumber)) {
        return `${label} must be at least (${leastNumber})`;
    }
    return undefined;
};
exports.validatePositiveNumber = validatePositiveNumber;
