export const validatePurchaseItems = (item: { quantity: number, amount: number , sale_price: number }) => {
    let errors: { quantity?: string, amount?: string, sale_price?: string } = {};

    const quantityError = validatePositiveNumber(item.quantity, 'Quantity', 1);
    if (quantityError) {
        errors.quantity = quantityError;
    }

    const amountError = validatePositiveNumber(item.amount, 'Amount', 1);
    if (amountError) {
        errors.amount = amountError;
    }

    const salePriceError = validatePositiveNumber(item.sale_price, "Sale price", 0);
    if (salePriceError) {
        errors.sale_price = salePriceError;
    }

    return Object.keys(errors).length > 0 ? errors : null;
}

export const validateOrderItems = (item: { quantity: number, amount: number  }) => {
    let errors: { quantity?: string, amount?: string } = {};

    const quantityError = validatePositiveNumber(item.quantity, 'Quantity', 0);
    if (quantityError) {
        errors.quantity = quantityError;
    }

    const amountError = validatePositiveNumber(item.amount, 'Amount', 0);
    if (amountError) {
        errors.amount = amountError;
    }

    return Object.keys(errors).length > 0 ? errors : null;
}

export const validatePositiveNumber = (value: number , label: string, leastNumber: number): undefined | string => {
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
}
