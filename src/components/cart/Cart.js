import { ReactComponent as CartIcon } from 'assets/img/icons/cart.svg';
import { ReactComponent as MinusCartIcon } from 'assets/img/icons/minus-cart.svg';
import { ReactComponent as PlusCartIcon } from 'assets/img/icons/plus-cart.svg';

function Cart(props) {
    const products = props.cart.map((p) =>
        <Product
            product={p}
            onClickAdd={props.onClickAdd}
            onClickRemove={props.onClickRemove}
        />
    );

    const total = <Total cart={props.cart} />

    return (
        <div className="cart">
            {/* Button trigger modal */}
            <button className="btn btn-outline-dark position-relative px-4" type="button" data-bs-toggle="modal" data-bs-target="#cartModal">
                <CartIcon />
                {props.cart.length > 0 &&
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{props.cart.length}</span>
                }
            </button>
            {/* Modal */}
            <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-3" id="cartModalLabel">Product Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.cart.length > 0
                            ?
                                <>
                                    {products}
                                    {total}
                                </>
                            :
                                <span className="text-muted">No products selected</span>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Continue buying</button>
                            <button type="button" className="btn btn-primary">Make an order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Product(props) {
    return (
        <>
            <div className="row my-1 py-1 text-center">
                <div className="col-2 my-auto">
                    <img src={props.product.img} className="img-thumbnail" alt="product-img" />
                </div>
                <div className="col text-start my-auto">
                    <h5>{props.product.name}</h5>
                    <p>{props.product.description}</p>
                </div>
                <div className="col-2 my-auto">
                    <button className="btn" onClick={() => props.onClickRemove(props.product.id)}>
                        <MinusCartIcon className="text-danger" width="24" height="24" />
                    </button>
                    <button className="btn" onClick={() => props.onClickAdd(props.product.id)}>
                        <PlusCartIcon className="text-success" width="24" height="24" />
                    </button>
                </div>
                <div className="col-2 my-auto">
                    <span>{props.product.price}€</span>
                </div>
            </div>
        </>
    )
}

function Total(props) {
    var totalPrice = 0;
    props.cart.forEach(p => {
        totalPrice += p.price;
    });

    return (
        <>
            <div className="row border-top mt-5 pt-3">
                <div className="col text-start">
                    <span className="fs-5 fw-bold">TOTAL</span>
                </div>
                <div className="col-2 text-center">
                    <span className="fs-5">{totalPrice}€</span>
                </div>
            </div>
        </>
    )
}

export default Cart;