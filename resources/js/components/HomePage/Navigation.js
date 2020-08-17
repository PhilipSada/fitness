import React from 'react';
import {ProductConsumer} from '../../Context';



const Navigation = ()=>(
    <ProductConsumer>
        {
            value => {
                const {openMemberModal} = value;

                return(
                    <div>
                        <nav className="home-navigate">
                          
                          <div className="logo-container">
                             <a href="/"><h3>FITNESS</h3></a>
                          </div>
                           <div className="member-btn-container">
                               
                                   <button className="member-btn" onClick={openMemberModal}>Become a member</button>
                                 
                          </div>
                        </nav>
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default Navigation;