"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptedMediaTypes = exports.ProductUnits = exports.BusinessCategories = exports.SupportedCountries = void 0;
exports.SupportedCountries = [
    {
        name: 'Nigeria',
        currency: 'NGN',
        currency_name: 'Nigerian naira',
        currency_symbol: '₦',
    },
];
exports.BusinessCategories = [
    {
        category: 'Retail Stores',
    },
    {
        category: 'Restaurants and Cafes',
    },
    {
        category: 'Beauty and Wellness',
    },
    {
        category: 'Fashion and Apparel',
    },
    {
        category: 'Home and Decor',
    },
    {
        category: 'Electronics and Gadgets',
    },
    {
        category: 'Health and Fitness',
    },
    {
        category: 'Grocery and Supermarkets',
    },
    {
        category: 'Automotive and Parts',
    },
    {
        category: 'Professional Services',
    },
    {
        category: 'Arts and Crafts',
    },
    {
        category: 'Pet Supplies and Services',
    },
    {
        category: 'Event Planning and Services',
    },
    {
        category: 'Education and Training',
    },
    {
        category: 'Sports and Recreation',
    },
    {
        category: 'Others',
    },
];
exports.ProductUnits = [
    'pc',
    'box',
    'pack',
    'pair',
    'bag',
    'cm',
    'dz',
    'ft',
    'g',
    'in',
    'kg',
    'km',
    'lb',
    'mg',
    'ml',
    'yard',
    'portion',
    'bowl',
    'bottle',
    'plate',
    'carton',
    'card',
    'tab',
    'sachet',
];
exports.AcceptedMediaTypes = [
    {
        ext: 'pdf',
        id: 'pdf',
        name: 'PDF Document',
        contentType: 'application/pdf',
    },
    { ext: 'txt', id: 'txt', name: 'Text Document', contentType: 'text/plain' },
    {
        ext: 'docx',
        id: 'docx',
        name: 'Word Document',
        contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
    {
        ext: 'xlsx',
        id: 'xlsx',
        name: 'Excel Document',
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
    {
        ext: 'ppt',
        id: 'ppt',
        name: 'PowerPoint Presentation',
        contentType: 'application/vnd.ms-powerpoint',
    },
    {
        ext: 'zip',
        id: 'zip',
        name: 'ZIP Archive',
        contentType: 'application/zip',
    },
];
