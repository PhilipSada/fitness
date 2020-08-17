import React from 'react';
import {ProductConsumer} from '../../Context';
import {TiSocialFacebook} from 'react-icons/ti';
import {TiSocialTwitter} from 'react-icons/ti';
import {TiSocialInstagram} from 'react-icons/ti';


const Hero = ()=>(
    <ProductConsumer>
        {
            value =>{
                const {}=value;

                return(
                    <div>
                   
                     <header className="header-video">
                        <div className='video-text'>
                            <h1>Discover the best Workout</h1>
                            <h4 className="mb-4">Just for you</h4>
                            <button className="member-btn mt-4">Find a course</button>
                            
                        </div>
                        <div className='video-container'>
                            <div className="color-overlay"></div>
                            <video autoPlay loop muted style={{ width:'100%', objectFit:'cover', height:'100%'}}>
                                <source src="/videos/workout.mp4" type='video/mp4'/>
                                
                            </video>
                        </div>
                        <div className="social-icons">
                                <div><TiSocialFacebook className="social-icons-ti"/></div>
                                <div><TiSocialTwitter className="social-icons-ti"/></div>
                                <div><TiSocialInstagram className="social-icons-ti"/></div>
                         </div>
                     </header> 
                   
                       
                       
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default Hero;