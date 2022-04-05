import Search from 'components/search/Search';
import Cart from 'components/cart/Cart';
import CurrencySelector from 'components/currencySelector/CurrencySelector';

function StoreHeader(props) {
    return (
        <div className="container py-2 mt-3">
            <div className="row">
                <div className="col-3 d-flex justify-content-end">
                    <CurrencySelector />
                </div>
                <div className="col-6">
                    <Search />
                </div>
                <div className="col-3 d-flex justify-content-start">
                    <Cart
                        cart={props.cart}
                        onClickAdd={props.onClickAdd}
                        onClickRemove={props.onClickRemove}
                    />
                </div>
            </div>
        </div>
    )
}

export default StoreHeader;