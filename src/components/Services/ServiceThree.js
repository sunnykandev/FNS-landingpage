import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'

class ServiceThree extends Component {
    render() {

        var ServiceData = this.props.ServiceData;

        return (
            <section className="services-wrap service-three section-padding" id="service">
                <div className="container">

                    <SectionTitle Title="The latest hosting server technology"  Titlep="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />

                    <div className="row">
                    {
                        ServiceData.serviceBoxItem.map( (item, index) =>  {
                            return(
                                index < 6 ? 
                                <div className="col-lg-4 col-md-6 col-12" key={item.id} >
                                    <div className="service-box-2 servicev3" data-aos="zoom-in" data-aos-duration={1000}>
                                        <div className="service-icon">
                                            <img src={require (`../../assets/img/services-2/${item.imgUrl}`)} alt="FantomDomains" />
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                :
                                ''
                            )                            
                        })
                    }
                    </div>
                </div>
            </section>
        )
    }
}

export default ServiceThree
