import React from 'react';
import {ProductConsumer} from '../../Context';
import {FaTimes} from 'react-icons/fa';


const MemberModal = ()=>(
    <ProductConsumer>
        {
            value=>{
                const{formSubmitted, memberModal, closeMemberModal,handleMemberFormSubmit, tempFirstNameError, handleFirstNameChange, tempFirstName,
                    tempLastNameError, handleLastNameChange, tempLastName, tempEmailError, handleEmailChange, tempEmail, tempMembershipPlanError,
                    tempMembershipPlan, handleMembershipPlanChange, tempLocationError,tempLocation, handleLocationChange,}=value;

                return(
                    <div>
                        {
                            memberModal &&
                            <div className="member-modal-container">
                            <div className="member-modal">
                                <div className="close-member-modal">
                                   <FaTimes className="react-close-icon" onClick={closeMemberModal}/>
                                </div>
                                {
                                    formSubmitted === false ? <div>
                                  <div className="personal-info-form">
                                    <h4 className="mt-4 text-center mb-4">Become a Member Today</h4>
                                    <form onSubmit={handleMemberFormSubmit}>
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>First Name: </label>{tempFirstNameError !== '' && <p className="text-danger">{tempFirstNameError}</p>}
                                            </div>
                    
                                            <input type='text' onChange={handleFirstNameChange} value={tempFirstName} className="form-control" placeholder="" required/>
                                        </div>
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>Last Name: </label>{tempLastNameError !== '' && <p className="text-danger">{tempLastNameError}</p>}
                                            </div>
                    
                                            <input type='text' onChange={handleLastNameChange} value={tempLastName} className="form-control" placeholder="" required/>
                                        </div>
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>Email:</label>{tempEmailError!== '' && <p className="text-danger">{tempEmailError}</p>}
                                            </div>
                                            
                                            <input type='email' onChange={handleEmailChange} value={tempEmail} className="form-control" placeholder="" required/>
                                        </div>
                                        <div className="form-group">
                                            <div className="label-form-input">
                                               <label>Membership Plan</label>{tempMembershipPlanError!== '' && <p className="text-danger">{tempMembershipPlanError}</p>}
                                            </div>
                                            
                                            <select value={tempMembershipPlan} onChange={handleMembershipPlanChange} className="form-control">
                                                <option value="Default">--</option>
                                                <option value="Flex">Flex $100/month</option>
                                                <option value="Max">Max $200/month</option>                  
                                            </select>
                                        </div>
                                        <div className="form-group">
                                             <div className="label-form-input">
                                               <label>Gym Location</label>{tempLocationError!== '' && <p className="text-danger">{tempLocationError}</p>}
                                            </div>
                                             
                                             <select value={tempLocation} onChange={handleLocationChange} className="form-control">
                                                 <option value="Default">--</option>
                                                 <option value="USA">USA</option>
                                                 <option value="Canada">Canada</option>                  
                                                 <option value="Germany">Germany</option>                  
                                                 <option value="Ireland">Ireland</option>                  
                                                                
                                             </select>
                                        </div>
                                        
                        
                                        <input type="submit" className="float-right submit-button" value="submit"/>
                                    </form>
                                </div>


                                    </div>:<div>
                                        <div className="thank-you">
                                            <div>
                                                 <p className="thank-you-note">Thank you {tempFirstName} </p>
                                            </div>
                                            <div>
                                                <p className="thank-you-note">We will send you an email to complete the final step of your membership registration</p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                }
                             
                            </div>
                          </div>
                        }
                        
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default MemberModal;