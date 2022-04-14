import { useState } from 'react';

function OrderForm(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");
    const order = props.cart.slice();

    const submitHandler = (e) => {
        const data = {
            name: name,
            surname: surname,
            phone: phone,
            address: address,
            email: email,
            note: note,
            createDate: new Date(),
            order: order,
        };
        props.onClickNewOrder(data);
        e.preventDefault();
    };

    return (
        <>
            {props.error &&
                <div className="alert alert-danger">
                    {props.error}
                </div>
            }
            <form onSubmit={submitHandler} className="p-3">
                <label className="d-block form-label">
                    Name*
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label className="d-block form-label">
                    Surname*
                    <input type="text" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)} required/>
                </label>
                <label className="d-block form-label">
                    Phone number
                    <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label className="d-block form-label">
                    Address*
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    <div id="addressHelp" className="form-text">This will be used as the shipping address for this order.</div>
                </label>
                <label className="d-block form-label">
                    Email*
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </label>
                <label className="d-block form-label">
                    Note
                    <textarea className="form-control" value={note} onChange={(e) => setNote(e.target.value)}/>
                </label>
                <input type="hidden" value={order} />
                <div className="text-end">
                    <button type="button" className="btn btn-secondary mx-1" data-bs-dismiss="modal">Cancel</button>
                    <input type="submit" className="btn btn-primary" value="Finish" />
                </div>
            </form>
        </>
    );
}

export default OrderForm;