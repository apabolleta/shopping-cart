import './Product.css';
import { ReactComponent as PlusIcon } from 'assets/img/icons/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/img/icons/minus.svg';
import { CurrencyContext, toCurrency } from 'api/Currency';

function Product(props) {
    return (
        <CurrencyContext.Consumer>
            {value =>
                <div className="product">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col col-sm-12">
                                <img src={props.img} className="card-img-top" alt={"img-product-" + props.id} />
                            </div>
                            <div className="col col-sm-12">
                                <div className="card-body">
                                    <h5 className="card-title">{props.name}</h5>
                                    <p className="card-text">{props.description}</p>
                                    <span className="fs-2">{toCurrency(props.price || 0.00, value.currency)}{value.currency.symbol}</span>
                                </div>
                                <div className="d-flex justify-content-end p-2">
                                    <button className="btn btn-outline-danger mx-1" onClick={() => props.onClickRemove(props.id)}><MinusIcon /></button>
                                    <div className="d-flex align-items-center justify-content-center border border-secondary rounded w-25"><span className="d-inline-block align-middle">{props.count || '-'}</span></div>
                                    <button className="btn btn-outline-success mx-1" onClick={() => props.onClickAdd(props.id)}><PlusIcon /></button>
                                </div>
                            </div>
                            <div className="card-footer d-none d-sm-block">
                                <small className="text-muted">{"Added on " + props.createDate}</small>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </CurrencyContext.Consumer>
    )
}

export default Product;