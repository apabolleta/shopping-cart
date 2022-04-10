import './Store.css';
import StoreHeader from 'layouts/storeHeader/StoreHeader';
import Products from 'layouts/products/Products';
import React from 'react';

class Store extends React.Component {
    constructor(props) {
      super(props);

      this.products = this.getProducts();

      this.state = {
        products: this.products.slice(),
        cart: [],
      };

      this.filterProducts = this.filterProducts.bind(this);
      this.addToCart = this.addToCart.bind(this);
      this.removeFromCart = this.removeFromCart.bind(this);
    }

    getProducts() {
      const product = (i) => {
        return {
          id: i,
          name: "Product name",
          description: "Product description",
          price: 100,
          createDate: new Date(),
          img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b66dec9de06441aae52a60501798199_9366/zapatilla-gazelle.jpg",
        };
      };

      return Array(15).fill(null).map((val, i) => product(i));
    }

    filterProducts(expr) {
      this.setState((state, props) => ({
        products: this.products.filter(p => (p.name + p.description).includes(expr)),
      }));
    }

    addToCart(id) {
      this.setState((state, props) => ({
        cart: state.cart.concat([state.products.find(el => el.id === id) || {}]),
      }));
    }

    removeFromCart(id) {
      this.setState(function(state, props) {
        var cart = state.cart.slice();
        var index = cart.findIndex(el => el.id === id);
        if (index > -1) {
          cart.splice(index, 1);
          return {cart: cart};
        }
        return {};
      });
    }

    render() {
      return (
          <div className="store">
            <StoreHeader
              cart={this.state.cart}
              onClickAdd={this.addToCart}
              onClickRemove={this.removeFromCart}
              onClickFilter={this.filterProducts}
            />
            <Products
              products={this.state.products}
              cart={this.state.cart}
              onClickAdd={this.addToCart}
              onClickRemove={this.removeFromCart}
            />
          </div>
      );
    }
}

export default Store;