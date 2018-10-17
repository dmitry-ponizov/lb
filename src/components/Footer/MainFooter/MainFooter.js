import React from 'react'
import './MainFooter.scss'

const mainFooter = () => (
    <footer>
        <div className="container-fluid">
            <div className="row">
            <div className="col-sm-3">
                <ul className="footer-nav">
                <li className="mini-title">Product</li>
                <li><a href='features.html'>Features</a></li>
                <li><a href='prices.html'>Prices</a></li>
                <li><a href='templates.html'>Templates</a></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <ul className="footer-nav">
                <li className="mini-title">Support</li>
                <li><a href='how-to.html'>How To</a></li>
                <li><a href='FAQ.html'>FAQ</a></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <ul className="footer-nav">
                <li className="mini-title">Company</li>
                <li><a href='about.html'>About</a></li>
                <li><a href='tc.html'>Terms of Service</a></li>
                <li><a href='pp.html'>Privacy Policy</a></li>
                <li><a href='contact.html'>Contact</a></li>
                </ul>
            </div>

            <div className="col-sm-3">
                <p className="social-media-links">
                <a href="#" className="sm-link-1"></a>
                <a href="#" className="sm-link-2"></a>
                <a href="#" className="sm-link-3"></a>
                <a href="#" className="sm-link-4"></a>
                <a href="#" className="sm-link-5"></a>
                </p>
                <div className="clearfix"></div>

            </div>
            </div>
        </div>
    </footer>
)

export default mainFooter;