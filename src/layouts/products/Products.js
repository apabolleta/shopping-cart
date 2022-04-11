import './Products.css';
import Search from 'components/search/Search';
import Cart from 'components/cart/Cart';
import CurrencySelector from 'components/currencySelector/CurrencySelector';
import Product from 'components/product/Product';

function Products(props) {
    return (
        <div className="products">
            <div className="container my-5">
                <div className="row my-3 py-2">
                    <div className="col-3 d-flex justify-content-end">
                        <CurrencySelector />
                    </div>
                    <div className="col-6">
                        <Search
                            onClickFilter={props.onClickFilter}
                        />
                    </div>
                    <div className="col-3 d-flex justify-content-start">
                        <Cart
                            cart={props.cart}
                            onClickAdd={props.onClickAdd}
                            onClickRemove={props.onClickRemove}
                            onClickNewOrder={props.onClickNewOrder}
                        />
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 gy-3 g-1">
                    {props.products.map((p) => (
                        <div className="col" key={p.id}>
                            <Product
                                id={p.id}
                                name={p.name}
                                description={p.description}
                                price={p.price}
                                createDate={p.createDate.toDate().toLocaleDateString()}
                                img={p.img}
                                count={props.cart.filter(el => el.id === p.id).length}
                                onClickAdd={props.onClickAdd}
                                onClickRemove={props.onClickRemove}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;