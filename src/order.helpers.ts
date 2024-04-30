enum TEnums {
    OrderTransactionRefPrefix = "OID",
    OrderTRefSeperator = "-",
}

export const sumOfPurchaseItems = (purchase: { items: { quantity: number, amount: number }[] }) => {
    let sum = purchase.items.reduce((c, e) => {
        return c + (e.quantity ?? 1) * e.amount ?? 0;
    }, 0);
    return sum;
};


export const sumOfOrderItems = (
    order: { items: { quantity: number, amount: number }[] }
) => {
    let sum = order.items.reduce((c, e) => {
        return c + (e.quantity ?? 1) * e.amount ?? 0;
    }, 0);
    return sum;
};

export const generateOrderPaymentReferenceOneTime = (order_id: string) => {
    let ref = `${TEnums.OrderTransactionRefPrefix}${TEnums.OrderTRefSeperator}${order_id}`;
    return ref;
};

export const generateOrderPaymentReference = (order_id: string, random_postfix: string) => {
    let ref = `${TEnums.OrderTransactionRefPrefix}${TEnums.OrderTRefSeperator}${order_id}${TEnums.OrderTRefSeperator}${random_postfix}`;
    return ref;
};
