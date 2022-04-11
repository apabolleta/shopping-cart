import { CurrencyContext } from 'api/Currency';

function CurrencySelector() {
    return (
        <CurrencyContext.Consumer>
            {({currency, changeCurrency}) => (
                <div className="currency-selector">
                    <select className="form-select" onChange={(e) => changeCurrency(e.target.value)} aria-label="Currency selector">
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
            )}
        </CurrencyContext.Consumer>
    )
}

export default CurrencySelector;