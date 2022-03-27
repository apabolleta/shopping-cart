import './Search.css';

function Search() {
    return (
        <div className="search">
            <div className="container my-5">
                <div className="row w-50 mx-auto">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;