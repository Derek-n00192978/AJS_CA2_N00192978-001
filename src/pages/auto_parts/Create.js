import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TextField  from "@mui/material/TextField";

import Button from '@mui/material/Button'; 


const Create = () => {
    const [form, setForm] = useState ({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        

       
        setForm(prevState =>({
            ...prevState,
            [name]: value
        }));
        
    };
    
    const isRequired = (fields) => {
        let error = false;

        fields.forEach(field => {
            if(!form[field]){
                error = true;
                setErrors(prevState => ({
                    ...prevState,
                    [field]: {
                        message: `${field} is required!!!`
                    }
                }));
            }
        })
    };
    const submitform = () => {
        let token = localStorage.getItem('token');
        if(!isRequired(['name', 'location', 'phone']))
        axios.post('http://localhost:3001/api/auto_parts', form, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
             .then(response => {
                console.log(response.data);
                navigate('/auto_parts');
             })
             .catch(err=> {
                console.log(err.response.data)
                console.error(err);
             });  
    }

    return (
        <>
            <h2>Create Page</h2>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Name' 
                name='name' 
                onChange={handleForm}
                error={errors.model}/> 
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Location' 
                name='location' 
                onChange={handleForm}
                error={errors.model}/> 
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Phone' name='phone' onChange={handleForm}/> 
            </div>
            <Button onClick={submitform}variant="contained">Submit</Button>
        </>
    );

};

export default Create;