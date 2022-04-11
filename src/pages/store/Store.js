import './Store.css';
import Products from 'layouts/products/Products';
import React from 'react';
import { getProducts, newOrder } from 'api/Firebase';
import { currencyCodes, CurrencyContext } from 'api/Currency';

class Store extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        products: [],
        cart: [],
        currency: currencyCodes.EUR,
      };

      this.changeCurrency = this.changeCurrency.bind(this);
      this.filterProducts = this.filterProducts.bind(this);
      this.addToCart = this.addToCart.bind(this);
      this.removeFromCart = this.removeFromCart.bind(this);
      this.addNewOrder = this.addNewOrder.bind(this);
    }

    componentDidMount() {
      const getProductsEx = async () => {
        const products = await getProducts();
        this.products = products.slice();
        this.setState({
          products: products.slice(),
        });
      };
      getProductsEx();
    }

    changeCurrency(code) {
      this.setState({
        currency: currencyCodes[code],
      });
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

    addNewOrder(data) {
      const newOrderEx = async () => {
        try {
          await newOrder(data);
        } catch (error) {
          console.log(error);
        }
      }
      newOrderEx();
    }

    render() {
      return (
        <CurrencyContext.Provider value={{currency: this.state.currency, changeCurrency:this.changeCurrency}}>
          <div className="store">
            <Products
              products={this.state.products}
              cart={this.state.cart}
              onClickAdd={this.addToCart}
              onClickRemove={this.removeFromCart}
              onClickFilter={this.filterProducts}
              onClickNewOrder={this.addNewOrder}
            />
          </div>
        </CurrencyContext.Provider>
      );
    }
}

export default Store;