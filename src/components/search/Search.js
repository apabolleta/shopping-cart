import './Search.css';
import { useState } from 'react';

function Search(props) {
    const [expr, setExpr] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        props.onClickFilter(expr);
    }

    return (
        <div className="search">
            <form onSubmit={submitHandler} className="d-flex">
                <input type="search" className="form-control me-2" value={expr} onChange={(e) => setExpr(e.target.value)} placeholder="Search" aria-label="Search" />
                <input type="submit" className="btn btn-primary float-end" value="Search" />
            </form>
        </div>
    )
}

export default Search;