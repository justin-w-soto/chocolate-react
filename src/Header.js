import React, { Component } from 'react';
import './home.css';

import fbIcon from './assets/fb-icon.png';
import flicIcon from './assets/flic-icon.png';
import gpIcon from './assets/gp-icon.png';
import instaIcon from './assets/insta-icon.png';
import mailIcon from './assets/mail-icon.png';
import pintIcon from './assets/pint-icon.png';
import rssIcon from './assets/rss-icon.png';
import twitterIcon from './assets/twit-icon.png';
import hrFancy from './assets/hr-img.png';


class Header extends Component {
    render() { 
        return (
            <header>
                <div id="header">
                    <div>
                        <h1> Delicious </h1>
                        <h4> THE BEST FOOD BLOB ON THE WEB </h4>
                    </div>
                </div>
                <nav>
                    <img src={fbIcon} alt="Facebook" className="Icon"/>
                    <img src={twitterIcon} alt="Twitter" className="Icon"/>
                    <img src={gpIcon} alt="Google" className="Icon"/>
                    <img src={instaIcon} alt="Instagram" className="Icon"/>
                    <img src={flicIcon} alt="Flickr" className="Icon"/>
                    <img src={pintIcon} alt="Pinterest" className="Icon"/>
                    <img src={rssIcon} alt="RSS" className="Icon"/>
                    <img src={mailIcon} alt="Email" className="Icon"/>
                </nav>
            </header>
          );
    }
}
 
export default Header;