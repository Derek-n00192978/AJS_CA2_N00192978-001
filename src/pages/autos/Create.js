import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TextField  from "@mui/material/TextField";
import InputLabel  from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Create = () => {
    const [form, setForm] = useState ({});
    const navigate = useNavigate();

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        

       
        setForm(prevState =>({
            ...prevState,
            [name]: value
        }));
        
    };
    const submitform = () => {
        let token = localStorage.getItem('token');
        axios.post('https://festivals-api.vercel.app/api/festivals', {

        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
             .then(response => {
                console.log(response.data);
                //navigate('/');
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
            <TextField variant='filled' label='Name' name='name' onChange={handleForm}/> 
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Location' name='location' onChange={handleForm}/> 
            </div>
            <div className='form-group'>
            <TextField variant='filled' label='Phone' name='phone' onChange={handleForm}/> 
            </div>
        </>
    );

};

export default Create;