import React from 'react';
import {ProductConsumer} from '../../Context';
import Hero from './Hero';
import Navigation from './Navigation';
import About from './About';
import Services from './Services';
import MemberModal from './MemberModal';


const Layout = ()=>(
    <ProductConsumer>
        {
            value =>{
                const{}=value;

                return(
                    <div>
                        <div>
                            <div className="hero-container">
                                <Navigation/>
                               <Hero/>
                            </div>

                           <About/>
                           <Services/>
                           <MemberModal/>
                        </div>
                        
                   </div>
                )
            }
        }
    </ProductConsumer>
)

export default Layout;