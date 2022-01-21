import React, { Component } from 'react';
import superplaceholder from 'superplaceholder';


class SearchBar extends Component {

    componentDidMount() {
        var placehoder = document.querySelector('.search-box-inner input');
        var pText = placehoder.placeholder;

        const sp = superplaceholder({
            el: placehoder,
            sentences: [pText],
            options: {
            loop: true
          }
        });
        
        sp.start();
    }

    render() {
        return (
            <div className="domain-search-box mt-40">
                <div className="search-box-inner text-left">
                    <form action="#">
                        <input type="text" placeholder="Find your new domain name" />
                        <button type="submit">search</button>
                    </form>
                </div>
            </div>            
        )
    }
}

export default SearchBar
