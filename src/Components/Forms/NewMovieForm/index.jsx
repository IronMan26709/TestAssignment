import React  from 'react';
import { reduxForm, Field } from 'redux-form';
import './NewMovieForm.css';


 
 let NewMovieForm = props =>{
    const { handleSubmit } = props
    return(
        <div className="new_movie_form">
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    type="text"
                    component="input"
                    placeholder="Name"
                    required= {true} />
                <Field 
                    name="year"
                    type="text" 
                    component="input"
                    placeholder="Year"
                    required= {true}/>
                <div className="field_wrap">
                    <label>Comedy</label>
                    <Field  
                        name="Comedy"
                        component="input"
                        id="Comedy"
                        type= "checkbox"
                    />  
                </div> 
                <div className="field_wrap">
                    <label>Horror</label>
                    <Field  
                        name="Horror"
                        component="input"
                        id="Horror"
                        type= "checkbox"
                    />  
                </div>   
                <div className="field_wrap">
                    <label>Drama</label>
                    <Field  
                        name="Drama"
                        component="input"
                        id="Drama"
                        type= "checkbox"
                    />  
                </div>           
                <button>New movie</button>
            </form>
        </div>
    );
};

NewMovieForm = reduxForm({ form:"NewMovie" })(NewMovieForm)

export default NewMovieForm
