import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TextField  from "@mui/material/TextField";
import Button from '@mui/material/Button'; 
import Table from 'react-bootstrap/Table';

//import FormHelperText from '@mui/material/FormHelperText';


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
        return error;
    };
    const submitform = () => {
        if(!isRequired(['name', 'location', 'phone'])){
        let token = localStorage.getItem('token');
        axios.post('https://ca2-cars-api.vercel.app/api/auto_parts', form, {
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
                console.error(err.response.data.message);
                setErrors(err.response.data.errors);
             });  
        }
    };    
    return (
        <>
            <h2>Create Page</h2>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Name' 
                name='name' 
                onChange={handleForm}
                error={errors.name}
                helperText={errors.name?.message}
                /> 
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Location' 
                name='location' 
                onChange={handleForm}
                error={errors.location}
                helperText={errors.location?.message}
                /> 
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Phone' 
                name='phone' 
                onChange={handleForm}
                error={errors.phone}
                helperText={errors.phone?.message}
                />
            </div>
            <div className='form-group'>
            <TextField 
                variant='filled' 
                label='Web Address' 
                name='web_address' 
                onChange={handleForm}
                error={errors.web_address}
                helperText={errors.web_address?.message}
                />
            </div>
          
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Image Selector for Image Upload</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <input type="file" />
                    </tr>
                </tbody>
            </Table>
            <Button onClick={submitform}variant="contained">Submit</Button>
        </>
    );

};

export default Create;