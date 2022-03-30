import './Product.css';
import plusIcon from 'assets/img/icons/plus.svg';
import minusIcon from 'assets/img/icons/minus.svg';

function Product(props) {
    return (
        <div className="product">
            <div className="card">
                <img src={props.img} className="card-img-top" alt={"img-product-" + props.id} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <span className="fs-2">{props.price || 0}€</span>
                </div>
                <div className="d-flex justify-content-end p-2">
                    <button className="btn btn-outline-danger mx-1" onClick={() => props.onClickRemove(props.id)}><img src={minusIcon} alt="minus-icon" /></button>
                    <div className="d-flex align-items-center justify-content-center border border-secondary rounded w-25"><span className="d-inline-block align-middle">{props.count || '-'}</span></div>
                    <button className="btn btn-outline-success mx-1" onClick={() => props.onClickAdd(props.id)}><img src={plusIcon} alt="plus-icon" /></button>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{"Added on " + props.createDate}</small>
                </div>
            </div>
        </div>
    )
}

export default Product;