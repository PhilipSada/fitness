import React from 'react';
import {ProductConsumer} from '../../Context';


const About = ()=>(
    <ProductConsumer>
        {
            value =>{
                const {}=value;

                return(
                    <div>
                   
                    
                   
                       <div className="about-grid">
                            <div className="about-image-section">
                                <div className="about-image-container"><img src="/images/about.jpg" className="about-image"/></div>
                            </div>
                            <div className="about-info">
                                    <h2>Let us help you get fit</h2>
                                
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna orci, pharetra sit amet diam in, volutpat aliquam lorem. 
                                        Phasellus sed mauris lacinia, fringilla dolor vitae, mattis metus. Cras sollicitudin consequat leo, quis iaculis nulla 
                                        pellentesque id. Nunc non velit vitae nulla commodo auctor. Duis id faucibus neque, nec vulputate nunc. Etiam leo lacus,
                                        viverra at feugiat sed, gravida at turpis. Pellentesque massa turpis, lobortis vitae turpis eget, vestibulum elementum justo.
                                        Fusce sit amet dolor sagittis nisi feugiat viverra ac sed est. Vivamus vitae fermentum enim, sed ullamcorper neque. Mauris 
                                        eu dolor consequat, tempor orci non, tempus lacus. Curabitur risus diam, sollicitudin sed quam at, porta interdum sem. 
                                       
                                    </p>
                            </div>
                           
                       </div>
                       
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default About;