import './Header.css';
import shopIcon from 'assets/img/icons/shop.svg';
import facebookIcon from 'assets/img/icons/facebook.svg';
import twitterIcon from 'assets/img/icons/twitter.svg';
import instagramIcon from 'assets/img/icons/instagram.svg';

function Header() {
    return (
        <div>
            {/* Secondary header */}
            <div className="container-fluid bg-light border-bottom">
                {/* Social icons */}
                <div className="d-flex justify-content-end">
                    {/* Facebook */}
                    <a className="btn btn-light m-1" href="#" role="button">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    {/* Twitter */}
                    <a className="btn btn-light m-1" href="#" role="button">
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    {/* Instagram */}
                    <a className="btn btn-light m-1" href="#" role="button">
                        <img src={instagramIcon} alt="Twitter" />
                    </a>
                </div>
            </div>

            {/* Main header */}
            <div className="container-fluid bg-light border-bottom pt-5">
                <div className="container text-center">
                    <img src={shopIcon} alt="Shop" width="96" height="96" />
                    <h1>Shopping Cart</h1>
                    <span className="text-muted">The place where you can find it...</span>
                    {/* Navbar */}
                    <nav className="navbar navbar-expand navbar-light bg-light mt-3">
                        <div className="container d-flex justify-content-center">
                            <div className="navbar-nav">
                                <a className="nav-link mx-3 active" aria-current="page" href="#">Store</a>
                                <a className="nav-link mx-3" href="#">About Us</a>
                                <a className="nav-link mx-3" href="#">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;
