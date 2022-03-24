import './Footer.css';
import facebookIcon from 'assets/img/icons/facebook.svg';
import twitterIcon from 'assets/img/icons/twitter.svg';
import instagramIcon from 'assets/img/icons/instagram.svg';

function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-dark text-center text-white">
                {/* Social icons */}
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        {/* Facebook */}
                        <a className="btn btn-outline-light m-1" href="#" role="button">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        {/* Twitter */}
                        <a className="btn btn-outline-light m-1" href="#" role="button">
                            <img src={twitterIcon} alt="Twitter" />
                        </a>
                        {/* Instagram */}
                        <a className="btn btn-outline-light m-1" href="#" role="button">
                            <img src={instagramIcon} alt="Twitter" />
                        </a>
                    </section>
                </div>
                {/* Copyright */}
                <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2022 Copyright:
                    <a className="text-white" href="https://github.com/apabolleta">@apabolleta</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
