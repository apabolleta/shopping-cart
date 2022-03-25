import Product from 'components/product/Product';

function Products(props) {
    return (
        <div className="products">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-xxl-5">
                {props.products.map((p) => (
                    <div className="col">
                        <Product
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            description={p.description}
                            createDate={p.createDate.toLocaleDateString()}
                            img={p.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;