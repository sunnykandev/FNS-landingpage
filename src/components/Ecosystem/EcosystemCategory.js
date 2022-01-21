import React, { Component } from 'react'

class EcosystemCategory extends Component {
    render() {
        var items = this.props.items;
        var title = this.props.title;

        return (
            <div className="ecosystem_category_container">
                <div className="text-center ecosystem_tab_title">
                    {title}
                </div>
                <div className="ecosystem_item_container">
                    {
                        items.map(item=> {
                            return(
                                <div className="ecosystem_item">
                                    <div className="ecosystem_item_inner_container">
                                        <div className="ecosystem_item_img">
                                            <img src={require (`../../assets/img/ecosystem/${item.img}`) } alt="FantomDomains" />
                                        </div>
                                        <div className="ecosystem_name">
                                            {item.name}
                                            </div>
                                    </div>
                                </div>                              
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default EcosystemCategory
