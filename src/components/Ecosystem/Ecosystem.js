import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'
import EcosystemCategory from './EcosystemCategory'
import EcosystemData from './EcosystemData'

class Ecosystem extends Component {
    render() {
        return (
            <section className="content-block-wrap section-padding pb-130 pt-0">
                <div className="container">
                    
                    <SectionTitle Title="FantomDomains Ecosystem"
                        Titlep="No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services."
                    />  
                    <EcosystemCategory items={EcosystemData.browserItems} title="Supported Browsers"/>
                    <EcosystemCategory items={EcosystemData.walletItems} title="Supported Wallets" />
                    <EcosystemCategory items={EcosystemData.appItems} title="Supported Apps"/>
                </div>
            </section>
        )
    }
}

export default Ecosystem
