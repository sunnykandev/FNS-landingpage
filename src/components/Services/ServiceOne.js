import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'

class ServiceOne extends Component {

    render() {

        var ServiceData = this.props.ServiceData;

        return (
            <section className="services-wrap section-padding pt-0 below_banner" id="service">
                <div className="container">
                    <div className="row">
                    {
                        ServiceData.serviceBoxItem.map(item=> {
                            return(
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-6" key={item.id} >
                                <div className="single-service-box">
                                    <div className="service-icon">
                                        <img src={require (`../../assets/img/services/${item.imgUrl}`)} alt="FantomDomains" />
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p className="d-none d-sm-block">{item.text}</p>
                                </div>
                            </div>
                            )
                        })
                    }

                    </div>
                </div>
            </section>
        )
    }
}

export default ServiceOne
