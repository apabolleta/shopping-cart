import './Store.css';
import React from 'react';
import { getProducts, newOrder } from 'api/Firebase';
import { currencyCodes, CurrencyContext } from 'api/Currency';
import Search from 'components/search/Search';
import Cart from 'components/cart/Cart';
import CurrencySelector from 'components/currencySelector/CurrencySelector';
import Product from 'components/product/Product';

class Store extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        products: [],
        cart: [],
        orders: [],
        currency: currencyCodes.EUR,
        success: null,
        error: null,
      };

      this.changeCurrency = this.changeCurrency.bind(this);
      this.filterProducts = this.filterProducts.bind(this);
      this.addToCart = this.addToCart.bind(this);
      this.removeFromCart = this.removeFromCart.bind(this);
      this.addNewOrder = this.addNewOrder.bind(this);
      this.resetStore = this.resetStore.bind(this);
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
          const order = await newOrder(data);
          this.setState((state, props) => ({
            orders: state.orders.concat([order]),
            success: true,
          }));
        } catch (error) {
          this.setState({
            error: error,
          });
        }
      }
      newOrderEx();
    }

    resetStore() {
      this.setState({
        cart: [],
        success: null,
        error: null,
      });
    }

    render() {
      return (
        <CurrencyContext.Provider value={{currency: this.state.currency, changeCurrency:this.changeCurrency}}>
          <div className="page-content store">
            <div className="container my-5">
              <div className="row my-3 py-2">
                <div className="col-3 d-flex justify-content-end">
                  <CurrencySelector />
                </div>
                <div className="col-6">
                  <Search
                      onClickFilter={this.filterProducts}
                  />
                </div>
                <div className="col-3 d-flex justify-content-start">
                  <Cart
                      cart={this.state.cart}
                      orders={this.state.orders}
                      onClickAdd={this.addToCart}
                      onClickRemove={this.removeFromCart}
                      onClickNewOrder={this.addNewOrder}
                      onClickReset={this.resetStore}
                      success={this.state.success}
                      error={this.state.error}
                  />
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 gy-3 g-1">
                {this.state.products.map((p) => (
                  <div className="col" key={p.id}>
                    <Product
                        id={p.id}
                        name={p.name}
                        description={p.description}
                        price={p.price}
                        createDate={p.createDate.toDate().toLocaleDateString()}
                        img={p.img}
                        count={this.state.cart.filter(el => el.id === p.id).length}
                        onClickAdd={this.addToCart}
                        onClickRemove={this.removeFromCart}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CurrencyContext.Provider>
      );
    }
}

export default Store;