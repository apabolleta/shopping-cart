import './Footer.css';
import { ReactComponent as FacebookIcon } from 'assets/img/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/img/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from 'assets/img/icons/instagram.svg';

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
                            <FacebookIcon />
                        </a>
                        {/* Twitter */}
                        <a className="btn btn-outline-light m-1" href="#" role="button">
                            <TwitterIcon />
                        </a>
                        {/* Instagram */}
                        <a className="btn btn-outline-light m-1" href="#" role="button">
                            <InstagramIcon />
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
