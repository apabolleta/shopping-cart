import './AboutUs.css';

function AboutUs() {
    return (
        <div>
            <div className="container mt-4 mb-3">
                <h2>About Us</h2>
                <hr/>
                <p>
                    <a href="https://reactjs.org/">React</a> App for order management and fulfillment.
                </p>
                <h3>Features</h3>
                <ul>
                    <li>Product list</li>
                    <li>Order fulfillment</li>
                    <li>Order management</li>
                    <li>Shopping Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutUs;