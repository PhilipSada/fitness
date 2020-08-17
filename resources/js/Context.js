import React, {Component} from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends Component{
    constructor(props){
        super(props);

        this.state = {   
            classes:[],
            filteredClasses:this.getFilteredClasses(),
            canadianClassesOpened:true,
            irelandClassesOpened:false,
            usaClassesOpened:false,
            germanClassesOpened:false,
            initialView:true,
            formSubmitted:false,
            memberModal:false,
            tempFirstNameError:'',
            tempFirstName:'',
            tempLastNameError:'',
            tempLastName:'',
            tempEmailError:'',
            tempEmail:'',
            tempMembershipPlanError:'',
            tempMembershipPlan:'',
            tempLocationError:'',
            tempLocation:'',
            





            
            

        }
         //bind
         this.showCanadianClasses = this.showCanadianClasses.bind(this);
         this.showGermanClasses = this.showGermanClasses.bind(this);
         this.showIrelandClasses = this.showIrelandClasses.bind(this);
         this.showUsaClasses = this.showUsaClasses.bind(this);
         this.openMemberModal = this.openMemberModal.bind(this);
         this.closeMemberModal = this.closeMemberModal.bind(this);
         this.handleMembershipPlanChange = this.handleMembershipPlanChange.bind(this);
         this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
         this.handleLastNameChange = this.handleLastNameChange.bind(this);
         this.handleEmailChange = this.handleEmailChange.bind(this);
         this.handleLocationChange = this.handleLocationChange.bind(this);
         this.handleMemberFormSubmit = this.handleMemberFormSubmit.bind(this);
      
       


    }
    handleLocationChange(e){
        this.setState({
            tempLocation:e.target.value
        })
    }
    handleMembershipPlanChange(e){
        this.setState({
            tempMembershipPlan:e.target.value
        })
    }
    handleEmailChange(e){
        this.setState({
            tempEmail:e.target.value
        })
    }
    handleLastNameChange(e){
        this.setState({
            tempLastName:e.target.value
        })
    }
    handleFirstNameChange(e){
        this.setState({
            tempFirstName:e.target.value
        })
    }
    handleMemberFormSubmit(e){
        e.preventDefault();
        const data = {
            firstName:this.state.tempFirstName,
            lastName:this.state.tempLastName,
            email:this.state.tempEmail,
            membershipPlan:this.state.tempMembershipPlan,
            gymLocation:this.state.tempLocation,
        }
        axios.post('/membership', data).then(response =>{
            if(response.data.errors){
                console.log(response.data.errors)
                if(response.data.errors.firstName){
                    this.setState({
                        tempFirstNameError:response.data.errors.firstName
                    })
                }else{
                    this.setState({
                        tempFirstNameError:'',
                    })
                }
                if(response.data.errors.lastName){
                    this.setState({
                        tempLastNameError:response.data.errors.lastName
                    })
                }else{
                    this.setState({
                        tempLastNameError:'',
                    })
                }
                if(response.data.errors.email){
                    this.setState({
                        tempEmailError:response.data.errors.email
                    })
                }else{
                    this.setState({
                        tempEmailError:'',
                    })
                }
                if(response.data.errors.membershipPlan){
                    this.setState({
                        tempMembershipPlanError:response.data.errors.membershipPlan
                    })
                }else{
                    this.setState({
                        tempMembershipPlanError:'',
                    })
                }
                if(response.data.errors.gymLocation){
                    this.setState({
                        tempLocationError:response.data.errors.gymLocation
                    })
                }else{
                    this.setState({
                        tempLocationError:'',
                    })
                }
                // else{
                //     this.setState({
                //         tempProductTitleError:'',
                //         tempProductPriceRangeError:'',
                //         tempProductCategoryError:'',
                //         tempProductDescriptionError:'',
                //     })
                   
                // }
            }else{
                this.setState({
                    tempLastName:'',
                    tempLocation:'',
                    tempMembershipPlan:'',
                    tempEmail:'',
                    tempFirstNameError:'',
                    tempLastNameError:'',
                    tempLocationError:'',
                    tempMembershipPlanError:'',
                    tempEmailError:'',
                    formSubmitted:true
                })
                // setTimeout(() => {
                //     window.location.href = '/';
                //     this.setState({
                //         tempFirstName:'',
                //         tempLastName:'',
                //         tempLocation:'',
                //         tempMembershipPlan:'',
                //         tempEmail:'',
                //         tempFirstNameError:'',
                //         tempLastNameError:'',
                //         tempLocationError:'',
                //         tempMembershipPlanError:'',
                //         tempEmailError:'',
                //         formSubmitted:true
                //     })
                // }, 1000);
            }
        })
    }
    openMemberModal(){
        this.setState({
            memberModal:true
        })
    }
    closeMemberModal(){
        this.setState({
            memberModal:false,
            tempFirstName:'',
            formSubmitted:false,
        })
    }
   showCanadianClasses(){
       let tempClasses = this.state.classes;

       tempClasses = tempClasses.filter(item => item.gym_location === 'Canada');
       localStorage.setItem('filteredClasses', JSON.stringify(tempClasses));
       this.setState({
           filteredClasses:tempClasses,
           canadianClassesOpened:true,
           irelandClassesOpened:false,
           germanClassesOpened:false,
           usaClassesOpened:false,
           initialView:false
       })
        
   }
   showIrelandClasses(){
       let tempClasses = this.state.classes;

       tempClasses = tempClasses.filter(item => item.gym_location === 'Ireland');
       localStorage.setItem('filteredClasses', JSON.stringify(tempClasses));
       this.setState({
           filteredClasses:tempClasses,
           canadianClassesOpened:false,
           irelandClassesOpened:true,
           germanClassesOpened:false,
           usaClassesOpened:false,
           initialView:false
       })
        
   }
   showGermanClasses(){
       let tempClasses = this.state.classes;

       tempClasses = tempClasses.filter(item => item.gym_location === 'Germany');
       localStorage.setItem('filteredClasses', JSON.stringify(tempClasses));
       this.setState({
           filteredClasses:tempClasses,
           canadianClassesOpened:false,
           irelandClassesOpened:false,
           germanClassesOpened:true,
           usaClassesOpened:false,
           initialView:false
       })
        
   }
   showUsaClasses(){
       let tempClasses = this.state.classes;

       tempClasses = tempClasses.filter(item => item.gym_location === 'USA');
       localStorage.setItem('filteredClasses', JSON.stringify(tempClasses));
       this.setState({
           filteredClasses:tempClasses,
           canadianClassesOpened:false,
           irelandClassesOpened:false,
           germanClassesOpened:false,
           usaClassesOpened:true,
           initialView:false
       })
        
   }
   getFilteredClasses(){
      return localStorage.getItem('filteredClasses')? JSON.parse(localStorage.getItem('filteredClasses')):[];
   }
    getItems(){
        axios.get('/show-classes').then(response => {
            this.setState(()=>{
                return (
                    {
                        classes:response.data.classes
                    }
                )
            })
           
        })
    }
    componentDidMount(){
      
       this.getItems();
    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                showCanadianClasses:this.showCanadianClasses,
                showGermanClasses:this.showGermanClasses,
                showIrelandClasses:this.showIrelandClasses,
                showUsaClasses:this.showUsaClasses,
                openMemberModal:this.openMemberModal,
                closeMemberModal:this.closeMemberModal,
                handleEmailChange:this.handleEmailChange,
                handleFirstNameChange:this.handleFirstNameChange,
                handleLastNameChange:this.handleLastNameChange,
                handleLocationChange:this.handleLocationChange,
                handleMembershipPlanChange:this.handleMembershipPlanChange,
                handleMemberFormSubmit:this.handleMemberFormSubmit,
               

                  
                
            }}> 
              {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}