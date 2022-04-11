import React from "react";

export const currencyCodes = {
    EUR: {
        code: "EUR",
        symbol: "€",
        value: 1,
    },
    USD: {
        code: "USD",
        symbol: "$",
        value: 1.09,
    },
    GBP: {
        code: "GBP",
        symbol: "£",
        value: 0.84,
    },
};

export const CurrencyContext = React.createContext({
    currency: currencyCodes.EUR,
    changeCurrency: () => {},
});

export const toCurrency = (value, toCurrencyCode) => {
    return (value * currencyCodes[toCurrencyCode.code].value).toFixed(2);
};