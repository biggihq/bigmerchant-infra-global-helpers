"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhone = exports.validateEmail = exports.validatePassword = exports.validatePositiveNumber = exports.validateOrderItems = exports.validatePurchaseItems = void 0;
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
const validatePassword = (value) => {
    if (!value) {
        return 'Password is required';
    }
    else if (value.length < 6) {
        return 'Password must be at least 6 characters long';
    }
    return undefined;
};
exports.validatePassword = validatePassword;
const validateEmail = (value) => {
    if (!value) {
        return 'Email is required';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return 'Invalid email address';
    }
    return undefined;
};
exports.validateEmail = validateEmail;
const validatePhone = (value) => {
    if (!value) {
        return 'Phone number is required';
    }
    else if (!/^\+?(\d.*){3,}$/.test(value)) {
        return 'Invalid phone number';
    }
    return undefined;
};
exports.validatePhone = validatePhone;
