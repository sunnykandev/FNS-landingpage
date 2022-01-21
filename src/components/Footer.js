import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {

    render() { 
        var FooterData = this.props.FooterData;

        return (
            <footer className="footer-wrap footer-two pb-80">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                <div className="site-info-widget single-footer-wid">
                                    {
                                        FooterData.siteInfo.map(site=> {
                                            return(
                                            <div className="footer-logo" key={site.id}>
                                                <Link to="/"><img src={require ("../assets/img/"+site.image) } alt="FantomDomains" className="navbar_logo"/></Link>
                                                <p>{site.aboutText}</p>
                                            </div> 
                                            )
                                        })
                                    }

                                    <div className="">
                                        <div className="">
                                            <form action="#" className="subscribe_form">
                                                <input type="text" placeholder="Subscribe Newsletter" />
                                                <button type="submit">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>  

                                    <div className="social-pages">
                                    {
                                        FooterData.socialIcon.map(item=> {
                                            return(
                                                <a href={item.url} key={item.id}><i className={item.icon} /></a>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>

                            {
                                FooterData.singleWidget.map(widget=> {
                                    return(
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6" key={widget.id}>
                                        <div className="single-footer-wid">
                                            <div className="foo-wid-title">
                                                <h3 key={widget.id}>{widget.title}</h3>
                                            </div>
                                            <ul>
                                            {
                                                widget.menuItems.map(item =>{
                                                    return(
                                                        <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
                                                    )
                                                })
                                            }
                                            </ul>
                                        </div>
                                    </div>
                                    )
                                })
                            }

                            <div className="col-lg-2 col-md-4 col-sm-4 col-12">
                                <div className="single-footer-wid">
                                    <div className="foo-wid-title">
                                        <h3>{FooterData.contact.title}</h3>
                                    </div>
                                    <ul>
                                    {
                                        FooterData.contact.menuItems.map(item =>{
                                            return(
                                                <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 
                <div className="footer-bottom mt-80">
                    <div className="container text-center">
                        <div className="copyright-info">
                            <span>{FooterData.copyright}</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
