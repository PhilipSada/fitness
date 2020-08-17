import React from 'react';
import {ProductConsumer} from '../../Context';


const LocationOptions = ()=>(
    <ProductConsumer>
        {
            value =>{
                const { showCanadianClasses, showGermanClasses, showIrelandClasses, showUsaClasses,
                    canadianClassesOpened, irelandClassesOpened, usaClassesOpened, germanClassesOpened}=value;

                return(
                    <div>
                   
                   
                    <div className="location-flex">
                        <button className= {canadianClassesOpened ? "location-active-btn small-space": "location-btn small-space"} onClick={showCanadianClasses}>Canada</button>
                        <button className= {irelandClassesOpened? "location-active-btn small-space": "location-btn small-space"} onClick={showIrelandClasses}>Ireland</button>
                        <button className= {germanClassesOpened? "location-active-btn small-space": "location-btn small-space"} onClick={showGermanClasses}>Germany</button>
                        <button className= {usaClassesOpened ? "location-active-btn": "location-btn"} onClick={showUsaClasses}>USA</button>
                    </div>
                   
                       
                       
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default LocationOptions;