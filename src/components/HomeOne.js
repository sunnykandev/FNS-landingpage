import React, {Component} from 'react';
import HeroOne from './Hero/HeroOne';
import ServiceOne from './Services/ServiceOne';
import ContentBlock from './ContentBlock';
import Ecosystem from './Ecosystem/Ecosystem';
import Faq from './Faq/FaqThree';
import InvolveContainer from './Involve/Involve';
import ContactOne from './Contact/ContactOne';
import ServiceData from './Services/ServiceData';
import FaqData from './Faq/FaqData';
import InvolveData from './Involve/InvolveData';
import Team from './Team';
import TeamData from './Data/TeamData';

class HomeOne extends Component {
    render() {
        return (
            <React.Fragment>
                <HeroOne BigTitle="Decentralised naming for wallets, websites, & more" SubTitle="Up to 50% Off Domain and Hosting, Starting from 0.001ETH." />
                <ServiceOne ServiceData={ServiceData} />
                <ContentBlock/>
                <Faq FaqData={FaqData}/>
                <InvolveContainer InvolveData={InvolveData}/>
                <ContactOne/>
            </React.Fragment>

        )
    }
}

export default HomeOne
