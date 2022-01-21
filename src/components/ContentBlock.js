import React, { Component } from 'react'
import SectionTitle from './SectionTitle'


class ContentBlock extends Component {
    render() {
        return (
            <section className="content-block-wrap section-padding pb-130 pt-0">
                <div className="container">
                    
                    <SectionTitle Title="single username in Web3 world"
                        Titlep="No more sandboxed usernames. Own your username, store an avatar and other profile data, and use it across services."
                    />  
                    <div className="row">
                        <div className="col-xl-5 col-lg-6  col-sm-12 col-12">
                            <div className="content-block" data-aos="fade-right" data-aos-duration={1200}>
                                <span className="top-title">Access Apps Easily</span>
                                <h2>One Name For All of Your Addresses</h2>
                                <p>No more copying and pasting long addresses. Use your ENS name to store all of your addresses and receive any cryptocurrency, token, or NFT.</p>
                                <ul>
                                    <li>Crypto currency wallets: Bitcoin, Ethereum...</li>
                                    <li>Coin exchange apps: Pancakeswap, Uniswap... </li>
                                    <li>Blockchain games: Cryptokitties, CryptoCosmos...</li>
                                    <li>NFT marketplaces: Opensea, Foundation...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-featured-img" data-aos="fade-left" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img1.jpg") } alt="FantomDomains" />
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <span className="top-title">Launch & Access Websites</span>
                                <h2>Decentralised Websites</h2>
                                <p>Launch censorship-resistant decentralised websites with ENS. Upload your website to IPFS and access it with your ENS name.</p>
                                <a href=".#" className="theme-btn">Learn more</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img2.jpg") } alt="FantomDomains" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentBlock
