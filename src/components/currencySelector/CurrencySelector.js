function CurrencySelector() {
    return (
        <div className="currency-selector">
            <select className="form-select" aria-label="Currency selector">
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
            </select>
        </div>
    )
}

export default CurrencySelector;