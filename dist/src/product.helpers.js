"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateProfitMargin = exports.generateUniqueSku = void 0;
const generateUniqueSku = (title, unit) => {
    const extractCharsFromProductTitle = (str) => {
        // Normalize string and split into words efficiently
        const parts = str
            .toLowerCase()
            .trim()
            .replace(/[  -]+/g, " ") // Replace multiple spaces and hyphens with single spaces
            .split(/\s+/); // Split on whitespace (including spaces, tabs, etc.)
        // Extract characters, preserving numbers and handling short words
        return parts.map((el) => {
            if (!Number.isNaN(parseInt(el))) {
                // Number: Keep it as-is
                return el;
            }
            else if (el.length > 3) {
                // String with more than 3 characters: Extract first 3
                return el.slice(0, 3);
            }
            else {
                // String with 1-3 characters: Keep all characters
                return el;
            }
        }).join("-");
    };
    // 1. Generate a base SKU using chars and unit (e.g., CH3-KG)
    let baseSku = `${extractCharsFromProductTitle(title)}`;
    if (unit) {
        baseSku = baseSku + `-${unit}`;
    }
    // 2. Check for existing SKUs in the database to ensure uniqueness
    // 3. If the base SKU already exists, add a random component to make it unique
    // 4. Repeat step 2 and 3 until a unique SKU is generated
    // For demonstration purposes, we'll just return the base SKU
    return baseSku; // Replace with actual generated SKU
};
exports.generateUniqueSku = generateUniqueSku;
const calculateProfitMargin = (costPrice, sellingPrice) => {
    // Ensure that costPrice and sellingPrice are valid numbers
    if (typeof costPrice !== 'number' ||
        typeof sellingPrice !== 'number' ||
        Number.isNaN(costPrice) ||
        Number.isNaN(sellingPrice)) {
        return 'Invalid input. Please provide valid numbers.';
    }
    // Calculate the profit
    let profit = sellingPrice - costPrice;
    // Calculate the profit margin as a percentage
    let profitMargin = ((profit / sellingPrice) * 100).toFixed(2); // Round to 2 decimal places
    return profitMargin + '%';
};
exports.calculateProfitMargin = calculateProfitMargin;
