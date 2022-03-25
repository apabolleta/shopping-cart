import React from 'react';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="product card h-100">
                <img src={this.props.img} className="card-img-top" alt={"img-product-" + this.props.id} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{"Added on " + this.props.createDate}</small>
                </div>
            </div>
        )
    }
}

export default Product;