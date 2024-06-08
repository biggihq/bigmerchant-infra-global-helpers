export const validatePurchaseItems = (item: { quantity: number, amount: number, sale_price: number }) => {
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

export const validateOrderItems = (item: { quantity: number, amount: number }) => {
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

export const validatePositiveNumber = (value: number, label: string, leastNumber: number): undefined | string => {
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



export const validatePassword = (value: string): undefined | string => {
    if (!value) {
        return 'Password is required';
    } else if (value.length < 6) {
        return 'Password must be at least 6 characters long';
    }
    return undefined;
}

export const validateEmail = (value: string): undefined | string => {
    if (!value) {
        return 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return 'Invalid email address';
    }
    return undefined;
}


export const validatePhone = (value: string): undefined | string => {
    if (!value) {
        return 'Phone number is required';
    } else if (!/^\+?(\d.*){3,}$/.test(value)) {
        return 'Invalid phone number';
    }
    return undefined;
}