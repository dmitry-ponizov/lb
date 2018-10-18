import React, { Component } from 'react'
import Toolbar from '../../components/Navigation/MainNavigation/Toollbar/Toolbar'
import './HomePage.scss';
import porfolio1 from '../../assets/images/portfolio/1.jpg'
import porfolio2 from '../../assets/images/portfolio/2.jpg'
import porfolio3 from '../../assets/images/portfolio/3.jpg'
import porfolio4 from '../../assets/images/portfolio/4.jpg'
import porfolio5 from '../../assets/images/portfolio/5.jpg'
import porfolio6 from '../../assets/images/portfolio/6.jpg'
import MainFooter from '../../components/Footer/MainFooter/MainFooter'


class HomePage extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <section id="banner">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1 className='special-headers'>Welcome to Zeeasy</h1>
                            <p className='lead special-headers-db'>Having your own website has never been so easy.</p>
                            <a href="#about" className="btn btn-custom btn-xl page-scroll">Find Out More</a>
                        </div>
                    </div>
                </section>
                <section className="bg-school" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 text-center bg-school-content">
                                <h2 className="section-heading special-headers-db">We've got what you need!</h2>
                                <hr className="light" />
                                <p className="text-faded">It's surprisingly easy to create your own website. With our simple DRAG-AND-DROP website builder you can make your own website in a couple of easy steps.</p>
                                <p>
                                    <a href="/" className="btn btn-custom-default btn-xl" >See how it works!</a>
                                </p>
                                <p className="text-faded">
                        
                                Create a powerful, professional website without any technical skills.
                                </p>
                                <p className="text-faded">
                                Modal for See how it Works
                                </p>
                                <a href="#services" className="btn btn-custom-default btn-xl page-scroll blue-bg">What To Expect</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">At Your Service</h2>
                            <hr className="primary" />
                        </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                            <i className="fa fa-4x fa-cubes wow bounceIn text-primary"></i>
                            <h3>Responsive Templates</h3>
                            <p className="text-muted">Our templates are fully responsive. We add more every week so you have a lot to choose from to create an unique looking, modern website.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                            <i className="fa fa-4x fa-paper-plane wow bounceIn text-primary" data-wow-delay=".1s"></i>
                            <h3>Ready to Go</h3>
                            <p className="text-muted">You can use one of our templates or create your own using simple  Website Builder. Once you're done your website is ready to go live!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                            <i className="fa fa-4x fa-pencil-square-o wow bounceIn text-primary" data-wow-delay=".2s"></i>
                            <h3>Up to Date</h3>
                            <p className="text-muted">We add new features on regular basis to keep things fresh. We would like to listen to your suggestions, too. Contact us if there is something
                                you would like to see in our Editor.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                            <i className="fa fa-4x fa-heart wow bounceIn text-primary" data-wow-delay=".3s"></i>
                            <h3>You are Never alone!</h3>
                            <p className="text-muted">We have online tutorials with pictures and videos. BUT if you need any extra help our support team is there for you.</p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <p>
                            <br/>
                            <a href="#portfolio" className="btn btn-custom-default btn-xl page-scroll blue-bg">See More</a></p>
                        </div>
                        </div>
                    </div>
                 </section>
                 <section className="less-padding" id="portfolio">
                    <div className="container-fluid">
                        <div className="row no-gutter">
                            <div className="col-lg-4 col-sm-6">
                                <a href="/" className="portfolio-box">
                                <img src={porfolio1} className="img-responsive" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Feature
                                    </div>
                                    <div className="project-name">
                                        Hundreds of Clip-Arts and colorfull Web-Icons to choose from.</div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                    <a href="/" className="portfolio-box">
                                    <img src={porfolio2} className="img-responsive" alt="" />
                                    <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                            Feature
                                    </div>
                                    <div className="project-name">
                                            Professionally design categorised templates (updated every week) to suit your business.
                                    </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="/" className="portfolio-box">
                                <img src={porfolio3} className="img-responsive" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Feature
                                    </div>
                                    <div className="project-name">
                                        Large selection of high quality photos and background images.
                                    </div>
                                    </div>
                                </div>
                                </a>
                             </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="/" className="portfolio-box">
                                <img src={porfolio4} className="img-responsive" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Feature
                                    </div>
                                    <div className="project-name">
                                        Our reliable hosting will keep your website safe and secure.
                                    </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="/" className="portfolio-box">
                                <img src={porfolio5} className="img-responsive" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Feature
                                    </div>
                                    <div className="project-name">
                                        Intuitive Drag-and-Drop editor lets you customise each template without having to know any programming language.
                                    </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a href="/" className="portfolio-box">
                                <img src={porfolio6} className="img-responsive" alt="" />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                    <div className="project-category text-faded">
                                        Feature
                                    </div>
                                    <div className="project-name">
                                        Custom Domain Names! Make a great impression on your visitors with a custom domain.

                                    </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                 </section>
                 <aside className="bg-school">
                    <div className="container text-center">
                        <div className="call-to-action">
                        <h2 className="special-headers-db">Your Website Your Way!</h2>
                        <a href="/"  className="btn btn-custom-default btn-xl wow tada">Start Now!</a>
                        </div>
                    </div>
                </aside>
                <MainFooter />
            </div>
        )
    }
}

export default HomePage;