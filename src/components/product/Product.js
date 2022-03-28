import React from 'react';
import './Product.css';
import plusIcon from 'assets/img/icons/plus.svg';
import minusIcon from 'assets/img/icons/minus.svg';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product">
                <div className="card">
                    <img src={this.props.img} className="card-img-top" alt={"img-product-" + this.props.id} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <span className="fs-1">{this.props.price || '-'}€</span>
                    </div>
                    <div className="d-flex justify-content-end p-2">
                        <button className="btn btn-outline-danger mx-1"><img src={minusIcon} alt="minus-icon" /></button>
                        <button className="btn btn-outline-success mx-1"><img src={plusIcon} alt="plus-icon" /></button>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{"Added on " + this.props.createDate}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;