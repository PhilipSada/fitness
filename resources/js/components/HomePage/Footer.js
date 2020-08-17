import React from 'react';
import {TiSocialFacebook} from 'react-icons/ti';
import {TiSocialTwitter} from 'react-icons/ti';
import {TiSocialInstagram} from 'react-icons/ti';

const Footer = ()=>(
    <div>
        <footer>
            <div className="footer">
              
                <div>
                    <div><TiSocialFacebook className="social-icons-ti-footer"/></div>
                    <div><TiSocialTwitter className="social-icons-ti-footer"/></div>
                    <div><TiSocialInstagram className="social-icons-ti-footer"/></div>
                </div>
            </div>
            <div className='last-footer'><p>&copy;{new Date().getFullYear()} PhillFit Inc. All Rights Reserved</p></div>
      </footer>
    </div>
);

export default Footer;