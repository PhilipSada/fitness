import React from 'react';
import {ProductConsumer} from '../../Context';
import LocationOptions from './LocationOptions';
import ClassCards from './ClassCards';


const Services = ()=>(
    <ProductConsumer>
        {
            value =>{
                const {}=value;

                return(
                    <div>
                   
                    <div className="services-container">
                        <h3>Choose a location to find available classes</h3>
                        <div className="select-location">
                            <LocationOptions/>
                        </div>
                        <div className="services-display">
                             <ClassCards/>
                        </div>
                    </div>
                   
                       
                       
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default Services;