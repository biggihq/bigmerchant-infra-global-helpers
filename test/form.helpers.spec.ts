import { validatePositiveNumber, validatePurchaseItems, validateOrderItems } from "../src/form.helpers";

describe('Validation Functions', () => {
    describe('validatePositiveNumber', () => {
        it('should return an error message if value is a string', () => {
            const result = validatePositiveNumber("string_value" as any, 'Test Label', 0);
            expect(result).toBe('Test Label must be a valid number');
        });

        it('should return an error message if value is NaN', () => {
            const result = validatePositiveNumber(NaN, 'Test Label', 0);
            expect(result).toBe('Test Label must be a valid number');
        });

        it('should return an error message if value is less than the least number', () => {
            const result = validatePositiveNumber(-1, 'Test Label', 0);
            expect(result).toBe('Test Label must be at least (0)');
        });

        it('should return undefined if value is valid', () => {
            const result = validatePositiveNumber(5, 'Test Label', 0);
            expect(result).toBeUndefined();
        });
    });

    describe('validatePurchaseItems', () => {
        it('should return an error object if any validation fails', () => {
            const item = { quantity: 0, amount: 0, sale_price: -1 };
            const result = validatePurchaseItems(item);
            expect(result).toEqual({
                quantity: 'Quantity must be at least (1)',
                amount: 'Amount must be at least (1)',
                sale_price: 'Sale price must be at least (0)'
            });
        });

        it('should return null if all validations pass', () => {
            const item = { quantity: 5, amount: 10, sale_price: 15 };
            const result = validatePurchaseItems(item);
            expect(result).toBeNull();
        });
    });

    describe('validateOrderItems', () => {
        it('should return an error object if any validation fails', () => {
            const item = { quantity: -1, amount: -1 };
            const result = validateOrderItems(item);
            expect(result).toEqual({
                quantity: 'Quantity must be at least (0)',
                amount: 'Amount must be at least (0)'
            });
        });

        it('should return null if all validations pass', () => {
            const item = { quantity: 5, amount: 10 };
            const result = validateOrderItems(item);
            expect(result).toBeNull();
        });
    });
});
