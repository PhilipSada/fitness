import React from 'react';
import {ProductConsumer} from '../../Context';
import Card from 'react-bootstrap/Card';

const ClassCards = ()=>(
    <ProductConsumer>
        {
            value =>{
                const {filteredClasses, initialView, classes}=value;

                return(
                    <div> 
                       {
                           initialView ? <div >
                               <div className="class-cards-grid">
                               {
                                classes.filter(item => item.gym_location === "Canada").map(filteredClass => <div key={filteredClass.id}>
                                    <Card className="class-card">
                                       <Card.Img src={filteredClass.image_url} className="class-card-img" />
                                       <Card.ImgOverlay>
                                          <Card.Title className="class-title">{filteredClass.name}</Card.Title>
                                           <Card.Text className="class-text">
                                         {filteredClass.description}
                                       
                                           </Card.Text>
                                           {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.ImgOverlay>
                                     </Card>
                                </div>)
                               }
                               </div>

                           </div>:<div>

                           {
                            filteredClasses.length > 0 ? <div className="class-cards-grid">
                            {
                                filteredClasses.map(filteredClass => <div key={filteredClass.id}>
                                      <Card className="class-card">
                                       <Card.Img src={filteredClass.image_url} className="class-card-img" />
                                       <Card.ImgOverlay>
                                          <Card.Title className="class-title">{filteredClass.name}</Card.Title>
                                           <Card.Text className="class-text">
                                         {filteredClass.description}
                                       
                                           </Card.Text>
                                           {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.ImgOverlay>
                                     </Card>
                                </div>)
                            }
                       
                   
                        
                       </div>:<div>
                           <div className="text-center mt-4">
                                <h4>Sorry no items matched your search</h4>
                           </div>
                       </div>
                        }

                           </div>
                       }
                        
                       
                         
                       
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default ClassCards;