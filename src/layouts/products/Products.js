import './Products.css';
import Product from 'components/product/Product';

function Products(props) {
    return (
        <div className="products">
            <div className="container my-3">
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