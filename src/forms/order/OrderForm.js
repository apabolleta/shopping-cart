import { useState } from 'react';

function OrderForm(props) {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const order = props.cart.slice();

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            surname: surname,
            phone: phone,
            address: address,
            email: email,
            order: order,
        };
    };

    return (
        <form onSubmit={submitHandler} className="p-3">
            <label className="d-block form-label">
                Name:
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="d-block form-label">
                Surname:
                <input type="text" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)} />
            </label>
            <label className="d-block form-label">
                Phone number:
                <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className="d-block form-label">
                Address:
                <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                <div id="addressHelp" className="form-text">This will be used as the shipping address for this order.</div>
            </label>
            <label className="d-block form-label">
                Email:
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </label>
            <input type="hidden" value={order} />
            <input type="submit" className="btn btn-primary float-end" value="Finish" />
        </form>
    );
}

export default OrderForm;