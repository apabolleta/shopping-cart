import './Store.css';
import Search from 'components/search/Search';
import Products from 'layouts/products/Products';

function Store() {
    const product = (i) => {
      return {
        id: i,
        name: "Product name",
        description: "Product description",
        price: 100,
        createDate: new Date(),
        img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b66dec9de06441aae52a60501798199_9366/zapatilla-gazelle.jpg"
      }
    };
    const products = Array(10).fill(null).map((val, i) => product(i));

    return (
        <div className="store">
          <Search />
          <Products products={products} />
        </div>
    )
}

export default Store;