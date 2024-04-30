export function formatCurrency(num: any, symbol = "₦") {
    // Check if the input is a valid number
    if (isNaN(num)) {
        return "Invalid input";
    }
    // Convert number to a string and split into integer and decimal parts
    const parts = num.toFixed(2).toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1];
    // Add commas for thousands separator
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Return formatted currency string
    return symbol + formattedIntegerPart + "." + decimalPart;
}
